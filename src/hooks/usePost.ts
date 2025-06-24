import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface Posts {
  id: number;
  title: string;
  body: string;
}

const usePost = (userId: number | undefined) => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    //  /users/1/posts
    queryKey: ["users", userId, "posts"],
    queryFn: () =>
      axios
        .get<Posts[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            userId
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000,
  });

  return { data: posts, isLoading, error };
};

export default usePost;

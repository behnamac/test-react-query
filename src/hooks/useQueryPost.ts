import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface PostQuery {
  page: number;
  pageSize: number;
}

interface PostProps {
  id: number;
  body: string;
  title: string;
}

const useQueryPost = (query: PostQuery) => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery<PostProps[], Error>({
    //  /users/1/posts
    queryKey: ["posts", query],
    queryFn: () =>
      axios
        .get<PostProps[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000,
    placeholderData: (previousData) => previousData,
  });

  return { data: posts, isLoading, error };
};

export default useQueryPost;

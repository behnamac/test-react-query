import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface User {
  id: number;
  name: string;
  email: string;
}

const useUser = () => {
  const {data:users, isLoading, error} = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get<User[]>("https://jsonplaceholder.typicode.com/users").then(res => res.data)
  })
  

  return { data: users, isLoading, error };
};

export default useUser;

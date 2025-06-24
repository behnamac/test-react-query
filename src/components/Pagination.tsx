import { useState } from "react";
import usePost from "../hooks/useQueryPost";

const Pagination = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const { data: posts, error, isLoading } = usePost({ page, pageSize });

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <ul>
        {posts?.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
      <button id="button">Previews</button>
      <button id="button">Next</button>
    </div>
  );
};

export default Pagination;

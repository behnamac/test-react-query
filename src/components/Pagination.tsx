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
      <button
        id="button"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previews
      </button>
      <button
        id="button"
        disabled={page === pageSize}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

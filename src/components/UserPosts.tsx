import { useState } from "react";
import usePost, { type Posts } from "../hooks/usePost";

const UserPosts = () => {
    const [userId, setUserId] = useState<number>();
  const { data: posts, isLoading, error } = usePost(userId);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message} please try again</div>}
      <select
        name=""
        onChange={(event) => {
          setUserId(parseInt(event.target.value));
        }}
        value={userId}
      >
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <h1>Posts</h1>
      <ul>
        {posts?.map((post: Posts) => 
          <li key={post.id}>
            <h2>{post.title}</h2>
            <span>{post.body}</span>
          </li>
    )}
      </ul>
    </div>
  );
};

export default UserPosts;

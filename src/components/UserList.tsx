import useUser from "../hooks/useUser";
import type { User } from "../hooks/useUser";

const UserList = () => {
  const { data: users, isLoading, error } = useUser();

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message} please try again</div>}
      <h1>Users</h1>
      <ul>
        {users?.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

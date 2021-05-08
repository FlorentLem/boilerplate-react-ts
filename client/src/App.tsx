import { useGetUsers } from "./useGetUsers";

const App = () => {
  const users = useGetUsers();

  if (!users) return <div>loading</div>;

  return (
    <div>
      {users.map((user) => (
        <div>
          <div>Email: {user.email}</div>
          <div>Password: {user.password}</div>
          <div>Date: {user.date}</div>
        </div>
      ))}
    </div>
  );
};

export default App;

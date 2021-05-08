import PostUser from "./components/PostUser";
import User from "./components/User";
import { useGetUsers } from "./useGetUsers";

const App = () => {
  const users = useGetUsers();

  if (!users) return <div>loading</div>;

  return (
    <div>
      {users.length !== 0 ? (
        users.map((user) => <User user={user} />)
      ) : (
        <div>Enter a user to start</div>
      )}
      <PostUser />
    </div>
  );
};

export default App;

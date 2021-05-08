import { FC } from "react";
import { User as UserType } from "../../features/users/types/state";

interface Props {
  user: UserType;
}

const User: FC<Props> = ({ user }) => {
  return (
    <div>
      <div>Email: {user.email}</div>
      <div>Password: {user.password}</div>
      <div>Date: {user.date}</div>
    </div>
  );
};

export default User;

import { useDispatch, useSelector } from "react-redux";

import { getUsers } from "./features/users/usersSlice";
import { selectUsers } from "./features/users/selectors/users";
import { useEffect } from "react";

export const useGetUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return users;
};

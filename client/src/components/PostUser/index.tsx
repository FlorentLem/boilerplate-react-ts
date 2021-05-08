import React, { useState } from "react";

import { postUser } from "../../features/users/usersSlice";
import { useDispatch } from "react-redux";

const PostUser = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(postUser({ email, password }));
      }}
    >
      <label>Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <label>Password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button type="submit">Post new user</button>
    </form>
  );
};

export default PostUser;

import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { User, Users } from "./types/state";

import { initialState } from "./initialState";

const userSlice = createSlice({
  name: "users",
  initialState: initialState as Users,
  reducers: {
    setUsers(state, action: PayloadAction<Array<User>>) {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;

export const getUsers = createAction("users/get");
export const postUser = createAction<User>("users/post");

export default userSlice.reducer;

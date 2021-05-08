import {
  TypedUseSelectorHook,
  useSelector as rawUseSelector,
} from "react-redux";

import { PayloadAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "../features/users/usersSlice";

const appReducer = combineReducers({
  users: userReducer,
});

const rootReducer = (state: any, action: PayloadAction) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof appReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

export default rootReducer;

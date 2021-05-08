import {
  TypedUseSelectorHook,
  useSelector as rawUseSelector,
} from "react-redux";

import { PayloadAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const appReducer = combineReducers({});

const rootReducer = (state: any, action: PayloadAction) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof appReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

export default rootReducer;

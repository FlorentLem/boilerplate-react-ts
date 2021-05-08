import { RootState } from "../../../app/rootReducer";
import { createSelector } from "reselect";

export const selectUsers = createSelector(
  (state: RootState) => state.users.users,
  (users) => users
);

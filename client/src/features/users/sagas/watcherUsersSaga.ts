import { fetchUsers } from "./usersSaga";
import { getUsers } from "../usersSlice";
import { takeEvery } from "redux-saga/effects";

export function* watcherUsersSaga() {
  yield takeEvery(getUsers.type, fetchUsers);
}

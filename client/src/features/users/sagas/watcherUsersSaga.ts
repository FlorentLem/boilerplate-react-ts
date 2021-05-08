import { fetchUsers, writeNewUser } from "./usersSaga";
import { getUsers, postUser } from "../usersSlice";

import { takeEvery } from "redux-saga/effects";

export function* watcherUsersSaga() {
  yield takeEvery(getUsers.type, fetchUsers);
  yield takeEvery(postUser.type, writeNewUser);
}

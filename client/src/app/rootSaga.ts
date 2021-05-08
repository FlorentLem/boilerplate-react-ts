import { all } from "redux-saga/effects";
import { watcherUsersSaga } from "../features/users/sagas/watcherUsersSaga";

export default function* rootSaga() {
  yield all([watcherUsersSaga()]);
}

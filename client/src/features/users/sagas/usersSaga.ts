import { call, put } from "redux-saga/effects";

import { AxiosResponse } from "axios";
import { UsersResponse } from "../types/responses";
import { fetchRequest } from "../../requests/sagas/requestsSaga";
import { setUsers } from "../usersSlice";

export function* fetchUsers() {
  const params = new URLSearchParams();

  try {
    const results: AxiosResponse<UsersResponse> = yield call<
      typeof fetchRequest
    >(fetchRequest, {
      url: "/api/users/",
      params,
    });

    yield put(setUsers(results.data.results));
  } catch (err) {
    console.log(err);
  }
}

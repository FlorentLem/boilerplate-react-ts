import { call, put } from "redux-saga/effects";
import { fetchRequest, postRequest } from "../../requests/sagas/requestsSaga";

import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { PostUser } from "../types/action";
import { UsersResponse } from "../types/responses";
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

export function* writeNewUser(action: PayloadAction<PostUser>) {
  try {
    const postUser: PostUser = action.payload;

    const results: AxiosResponse<UsersResponse> = yield call<
      typeof postRequest
    >(postRequest, { url: "/api/users/create/", data: postUser });

    yield put(setUsers(results.data.results));
  } catch (err) {
    console.log(err);
  }
}

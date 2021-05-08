import { FetchRequestAction, PostRequestAction } from "../types/action";
import { fetch, post } from "../axiosRequest";

import { AxiosResponse } from "axios";
import { call } from "redux-saga/effects";

export function* fetchRequest(action: FetchRequestAction) {
  try {
    const data: AxiosResponse = yield call<typeof fetch>(
      fetch,
      action.url,
      action.params
    );

    return data;
  } catch (err) {
    console.log(err);
  }
}

export function* postRequest(action: PostRequestAction) {
  try {
    const data: AxiosResponse = yield call<typeof post>(
      post,
      action.url,
      action.data
    );

    return data;
  } catch (err) {
    console.log(err);
  }
}

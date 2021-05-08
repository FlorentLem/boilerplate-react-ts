import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";

export function request(method: Method, url: string, params?: object | string) {
  const config: AxiosRequestConfig = {
    method,
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/`,
    url,
  };

  if (method === "GET" && params) {
    config.params = params;
  } else if (params) {
    config.data = params;
  }

  return axios(config);
}

export function fetch(
  url: string,
  params: URLSearchParams
): Promise<AxiosResponse> {
  return request("GET", url, params);
}

export function post(
  url: string,
  params: object | string
): Promise<AxiosResponse> {
  return request("POST", url, params);
}

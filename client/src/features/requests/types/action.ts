export type FetchRequestAction = {
  url: string;
  params: URLSearchParams;
};

export type PostRequestAction = {
  url: string;
  data: Object;
};

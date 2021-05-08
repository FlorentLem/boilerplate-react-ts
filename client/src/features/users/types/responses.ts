import { User } from "./state";

export type UsersResponse = {
  results: Array<User>;
  message: string;
};

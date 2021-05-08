export type User = {
  _id: string;
  email: string;
  password: string;
  date: Date;
};

export type Users = {
  users: Array<User> | null;
};

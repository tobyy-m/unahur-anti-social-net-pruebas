export interface User {
  id: number;
  nickName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export type NewUser = Pick<User, "nickName" | "email">;
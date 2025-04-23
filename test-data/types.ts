export interface TestData {
  users: User[];
}

export interface UserData {
  users: User[];
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: RoleType;
  optInForNews?: boolean;
}

export type RoleType =
  | "super admin"
  | "community admin"
  | "hiring admin"
  | "user"
  | "recruiter"
  | "admin";

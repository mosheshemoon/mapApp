export interface AuthLogin {
  userName: string;
  password: string;
}
export interface AuthRegister {
  userName: string;
  password: string;
}

export interface AuthUser {
  user: {userName: string, password: string};
  token: string;
}

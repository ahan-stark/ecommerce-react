export interface LoginData {
  username: string;
  password: string;
}
export interface LoginResponse {
  username?: string;
  authenticationToken?: string;
  userId?: number;
  error?: string;
}
export interface SignUpData {
  username: string;
  phoneNum: string;
  email: string;
  password: string;
}
export interface UserExists {
  userRegistercheck: string;
}
export interface AuthState {
  setState: React.Dispatch<React.SetStateAction<string>>;
}

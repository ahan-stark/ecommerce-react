import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  userId: number | null | undefined;
  authToken: string | null | undefined;
}
const initialState: LoginState = {
  userId: null,
  authToken: null,
};
const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<LoginState>) => {
      state.userId = action.payload.userId;
      state.authToken = action.payload.authToken;
    },
    removeUser: (state) => {
      state.userId = null;
    },
  },
});
export const { addUser, removeUser } = LoginSlice.actions;
export default LoginSlice.reducer;

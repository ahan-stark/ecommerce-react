import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  userId: number | null;
}
const initialState: LoginState = {
  userId: null,
};
const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<number | null>) => {
      state.userId = action.payload;
    },
    removeUser: (state) => {
      state.userId = null;
    },
  },
});
export const { addUser, removeUser } = LoginSlice.actions;
export default LoginSlice.reducer;

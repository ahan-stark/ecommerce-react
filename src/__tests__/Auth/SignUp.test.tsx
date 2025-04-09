import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import LoginSlice from "../../Store/Auth/LoginSlice";
import SignUp from "../../Components/Auth/SignUp";

const mockStore = configureStore({ reducer: { login: LoginSlice } });
test("Sign up should load", async () => {
  const store = mockStore;
  const mockSetState = jest.fn();
  render(
    <Provider store={store}>
      <SignUp setState={mockSetState} />
    </Provider>
  );
  const inputBoxes = screen.getAllByRole("textbox");
  const signUpBtn = screen.getByRole("button", { name: /Sign up/i });
  expect(inputBoxes.length).toBe(4);
  expect(signUpBtn).toBeInTheDocument();
});

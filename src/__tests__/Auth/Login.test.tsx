import { render, screen } from "@testing-library/react";
import Login from "../../Components/Auth/Login";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import LoginSlice from "../../Store/Auth/LoginSlice";
const mockStore = configureStore({ reducer: { login: LoginSlice } });
test("should load login page", async () => {
  const store = mockStore;
  const mockSetState = jest.fn();
  render(
    <Provider store={store}>
      <Login setState={mockSetState} />
    </Provider>
  );
  const screenInputs = screen.getAllByRole("textbox");
  const loginBtn = screen.getByRole("button",{name:/login/i});
  expect(screenInputs.length).toBeGreaterThanOrEqual(2);
  expect(loginBtn).toBeInTheDocument();
});

import React, { useRef, useState } from "react";
import {
  AuthState,
  LoginData,
  LoginResponse,
} from "../../Utils/Types/Auth/AuthTypes";
import { addToLocalStorage, LoginValidate } from "../../Config/Auth/Auth";
import Button from "@mui/material/Button";
import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const Login: React.FC<AuthState> = ({ setState }) => {
  const userName = useRef<HTMLInputElement>(null);
  const passWord = useRef<HTMLInputElement>(null);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const login = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (userName.current?.value.length === 0) {
      setSnackbarMessage("Enter Username");
      setSnackbarOpen(true);
      return;
    }
    if (passWord.current?.value.length === 0) {
      setSnackbarMessage("Enter Password");
      setSnackbarOpen(true);
      return;
    }
    const loginDetails: LoginData = {
      username: userName.current?.value!,
      password: passWord.current?.value!,
    };
    const loginResponse: LoginResponse = await LoginValidate(loginDetails);
    if (loginResponse.error === "backend is down") {
      alert("backend is down");
      return;
    }

    if (loginResponse.userId === null) {
      setSnackbarMessage("Invalid credentials");
      setSnackbarOpen(true);
      return;
    } else {
      addToLocalStorage(loginResponse);
    }
  };
  //below css styling
  const inputCss =
    "h-[3em] w-[23em] text-center mb-[6%] rounded-lg border border - 4 border-orange-800	";
  const toggleBtn = "text-orange-500 font-normal mt-4 cursor-pointer";
  //above css styling
  return (
    <div className="flex flex-col items-center mt-[5%]">
      <div className="text-3xl font-bold mb-5 text-blue-800 ">Login</div>
      <form onSubmit={login} className="flex flex-col">
        <input placeholder="Username" ref={userName} className={inputCss} />
        <input placeholder="Password" ref={passWord} className={inputCss} />
        <div className="flex flex-col items-center">
          <Button variant="contained" type="submit">
            Login
          </Button>
        </div>
      </form>
      <div
        className={toggleBtn}
        onClick={() => {
          setState("signup");
        }}
      >
        Don't have an account?
      </div>
      <div>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message={snackbarMessage}
          ContentProps={{
            style: { color: "#f7f76d", backgroundColor: "#f54936" }, // Dynamically set the text color
          }}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleSnackbarClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </div>
    </div>
  );
};

export default Login;

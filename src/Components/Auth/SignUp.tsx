import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import {
  AuthState,
  LoginData,
  LoginResponse,
  SignUpData,
  UserExists,
} from "../../Utils/Types/Auth/AuthTypes";
import {
  addToLocalStorage,
  CheckIfUserExists,
  LoginValidate,
  RegisterUser,
} from "../../Config/Auth/Auth";
import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  validateEmail,
  validatePhoneNumber,
} from "../../Utils/Regular-Expression/ValidateRE";

const SignUp: React.FC<AuthState> = ({ setState }) => {
  const userName = useRef<HTMLInputElement>(null);
  const passWord = useRef<HTMLInputElement>(null);
  const phoneNum = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const userExists = () => {
    setSnackbarMessage("User already registered");
    setSnackbarOpen(true);
    return;
  };
  const signUp = async (event: React.SyntheticEvent) => {
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
    if (email.current?.value.length === 0) {
      setSnackbarMessage("Enter email");
      setSnackbarOpen(true);
      return;
    }
    if (phoneNum.current?.value.length === 0) {
      setSnackbarMessage("Enter Phone Num");
      setSnackbarOpen(true);
      return;
    }
    if (email.current?.value.length !== 0) {
      if (validateEmail(email.current?.value!) === false) {
        setSnackbarMessage("Enter valid mail");
        setSnackbarOpen(true);
        return;
      }
    }
    if (phoneNum.current?.value.length !== 0) {
      if (validatePhoneNumber(phoneNum.current?.value!) === false) {
        setSnackbarMessage("Enter valid number");
        setSnackbarOpen(true);
        return;
      }
    }
    const signUpVal: SignUpData = {
      username: userName.current?.value!,
      password: passWord.current?.value!,
      email: email.current?.value!,
      phoneNum: phoneNum.current?.value!,
    };
    const checkIfExits: UserExists = await CheckIfUserExists(signUpVal);
    if (checkIfExits.userRegistercheck === "failed") {
      //User doesn't exists
      const response = await RegisterUser(signUpVal);
      if (response === "User Registration Successful") {
        const loginData: LoginData = {
          username: userName.current?.value!,
          password: passWord.current?.value!,
        };
        const loginResponse: LoginResponse = await LoginValidate(loginData);
        addToLocalStorage(loginResponse);        
      }
    } else if (checkIfExits.userRegistercheck === "backend is down") {
      alert("Backend is down!");
    } else {
      userExists();
    }
  };
  //below css styling
  const inputCss =
    "h-[3em] w-[23em] text-center mb-[6%] rounded-lg border-[1.8px] border-blue-500	";
  const toggleBtn = "text-orange-500 font-normal mt-4 cursor-pointer";
  //above css styling
  return (
    <div className="flex flex-col items-center mt-[5%]">
      <div className="text-3xl font-bold mb-5 text-blue-800 ">SignUp</div>
      <form onSubmit={signUp} className="flex flex-col">
        <input placeholder="Email" ref={email} className={inputCss} />
        <input placeholder="Username" ref={userName} className={inputCss} />
        <input placeholder="Password" ref={passWord} className={inputCss} />
        <input placeholder="Phone" ref={phoneNum} className={inputCss} />
        <div className="flex flex-col items-center">
          <Button variant="contained" type="submit">
            Sign Up
          </Button>
        </div>
      </form>
      <div
        className={toggleBtn}
        onClick={() => {
          setState!("login");
        }}
      >
        Already have an account?
      </div>
      <div>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message={snackbarMessage}
          ContentProps={{
            style: { color: "#f7f76d", backgroundColor: "#f54936" },
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

export default SignUp;

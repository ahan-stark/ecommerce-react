import {  LoginData, LoginResponse, SignUpData, UserExists } from "../../Utils/Types/Auth/AuthTypes";
import { url } from "../GlobalUrl";

export const LoginValidate = async (loginData: LoginData): Promise<LoginResponse> => {
  try {
    const data = await fetch(url + "/api/auth/login", {
      method : 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const json = await data.json();
    return json;
  } catch (error) {
    return {error:"backend is down"}
  }
  
};

export const CheckIfUserExists =async(userData : SignUpData):Promise<UserExists> =>{
  try {
    const data = await fetch(url  + '/api/auth/checkSignUpUser',{
      method :'POST',
      headers: {
        "content-type": "application/json",
      },
      body : JSON.stringify(userData),
    });
    const json = await data.json();
    return json;
  } catch (error) {
    return {userRegistercheck : "backend is down"};
  }
}
export const RegisterUser = async (userData : SignUpData): Promise<string> =>{
  const data = await fetch(url  + '/auth/signup',{
    method :'POST',
    headers: {
      "content-type": "application/json",
    },
    body : JSON.stringify(userData),
  });
  const text = await data.text();
  return text;
}

export const addToLocalStorage = (loginResponse : LoginResponse) =>{
  localStorage.setItem("localItems",JSON.stringify(loginResponse));
}
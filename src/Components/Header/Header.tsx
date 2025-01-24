import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logoImg from "../../Images/Flipkart-Logo.png";
import { addUser } from "../../Store/Auth/LoginSlice";
import { LoginResponse } from "../../Utils/Types/Auth/AuthTypes";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginDetails = useSelector((state: RootState) => state.login);

  useEffect(() => {
    if(loginDetails.userId !== null){
        navigate("/home");
    }
    if (
      loginDetails.userId === null &&
      localStorage.getItem("localItems") === null
    ) {
      navigate("/auth");
    } else if (
      loginDetails.userId === null &&
      localStorage.getItem("localItems") !== null
    ) {
      const val = localStorage.getItem("localItems");
      const userData: LoginResponse = JSON.parse(val!);
      dispatch(
        addUser({
          userId: userData.userId,
          authToken: userData.authenticationToken,
        })
      );
    }
  }, [loginDetails.userId, navigate, dispatch]);

  return (
    <div className="h-[2.2em] flex flex-row pl-[2%] w-screen justify-between">
      <div>
        <img className="h-[1.5em] mt-[22.2%]" src={logoImg} alt="" />
      </div>
      {loginDetails.userId && (
        <div className="mr-[2.5%]">
          <Navigation />
        </div>
      )}
    </div>
  );
};

export default Header;

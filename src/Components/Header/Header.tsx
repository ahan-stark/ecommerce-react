import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logoImg from "../../Images/Flipkart-Logo.png";
import { addUser, LoginState } from "../../Store/Auth/LoginSlice";
import { LoginResponse } from "../../Utils/Types/Auth/AuthTypes";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const routeLoc = useLocation();
  const loginDetails: LoginState = useSelector((state: RootState) => state.login);

  useEffect(() => {
    const localItems = localStorage.getItem("localItems");
    if (loginDetails.userId !== null && ((routeLoc.pathname === "/auth") || (routeLoc.pathname === "/"))) {
      navigate("/home"); 
    }
    if (loginDetails.userId === null) {
      if (!localItems) {
        navigate("/auth"); // Redirect to login if no user data is found
      } else {
        try {
          const userData: LoginResponse = JSON.parse(localItems);
          if (userData?.userId && userData?.authenticationToken) {
            dispatch(addUser({ userId: userData.userId, authToken: userData.authenticationToken }));
          }
        } catch (error) {
          console.error("Error parsing user data:", error);
          localStorage.removeItem("localItems"); // Remove corrupted data
        }
      }
    }
  }, [loginDetails.userId, navigate, dispatch, routeLoc.pathname]);

  return (
    <div className="h-[2.2em] flex flex-row pl-[2%] justify-between">
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

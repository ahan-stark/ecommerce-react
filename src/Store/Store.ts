import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../Store/Auth/LoginSlice"

const store = configureStore({
    reducer :{
        login : LoginSlice
    }
});
export default store;
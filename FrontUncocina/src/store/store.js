import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/auth/authSlice'
import navBarSlice from "./slices/navBar/navBar";
export const store = configureStore({
  reducer:{
    auth: authReducer,
    navBar: navBarSlice
  },
})
import React, { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import "./index.css";
import { HomePage } from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import { Notfound404 } from "./pages/Notfound404/Notfound404";
import { RegisterPage } from "./pages/Register/RegisterPage";
import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import { loadLocationsThunk } from "./redux/thunks/locationsThunk";
import { UserLoginData } from "./types/types";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "./redux/features/userSlice";

function App() {
  const dispatch = useAppDispatch();
  const userStateInfo = useAppSelector((state) => state.user.logged);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(loadLocationsThunk());
      const { emailadress, username }: UserLoginData = jwtDecode(token);
      dispatch(loginActionCreator({ emailadress, username }));
    }
  }, [dispatch, userStateInfo, token]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/*" element={<Notfound404 />} />
    </Routes>
  );
}

export default App;

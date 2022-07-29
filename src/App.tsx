import React, { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import "./index.css";
import { HomePage } from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import { Notfound404 } from "./pages/Notfound404/Notfound404";
import { RegisterPage } from "./pages/Register/RegisterPage";
import { useAppDispatch } from "./redux/store/hooks";
import { UserLoginData } from "./types/types";
import jwtDecode from "jwt-decode";
import LoggedRoute from "./components/LoggedRoute/LoggedRoute";
import UnloggedRoute from "./components/UnloggedRoute/UnloggedRoute";
import { loginThunk } from "./redux/thunks/userThunks";

function App() {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const { emailadress, password, username }: UserLoginData =
        jwtDecode(token);

      dispatch(loginThunk({ emailadress, password, username }));
    }
  }, [dispatch, token]);

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <LoggedRoute>
              <Navigate to={"/home"} />
            </LoggedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <LoggedRoute>
              <HomePage />
            </LoggedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <UnloggedRoute>
              <LoginPage />
            </UnloggedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <UnloggedRoute>
              <RegisterPage />
            </UnloggedRoute>
          }
        />
        <Route path="/*" element={<Notfound404 />} />
      </Routes>
    </div>
  );
}

export default App;

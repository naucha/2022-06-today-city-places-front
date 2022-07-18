import React, { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import "./index.css";
import { HomePage } from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import { Notfound404 } from "./pages/Notfound404/Notfound404";
import { RegisterPage } from "./pages/Register/RegisterPage";
import { useAppDispatch } from "./redux/store/hooks";
import { loadLocationsThunk } from "./redux/thunks/locationsThunk";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadLocationsThunk());
  }, [dispatch]);

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

import React, { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import FormRegister from "./components/Form/FormRegister/FormRegister";
import "./index.css";
import { Home } from "./pages/Home/Home";
import { Notfound404 } from "./pages/Notfound404/Notfound404";
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
      <Route path="/home" element={<Home />} />
      <Route path="/userArea" element={<FormRegister />} />
      <Route path="/*" element={<Notfound404 />} />
    </Routes>
  );
}

export default App;

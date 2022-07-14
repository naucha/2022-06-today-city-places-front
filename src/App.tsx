import React, { useEffect } from "react";

import "./App.css";
import { MapContainer } from "react-leaflet";
import MapLocation from "./components/Map/MapLocation";
import { useAppDispatch } from "./redux/store/hooks";
import { loadLocationsThunk } from "./redux/thunks/locationsThunk";
import UserForm from "./components/Form/FormRegister/FormRegister";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadLocationsThunk());
  }, [dispatch]);

  return (
    <div className="main">
      <UserForm />
      <h1>Today City Places</h1>
      <MapContainer
        center={[41.3879, 2.16992]}
        zoom={12}
        scrollWheelZoom={false}
        className="map"
      >
        <MapLocation />
      </MapContainer>
    </div>
  );
}

export default App;

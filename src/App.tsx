import React from "react";

import "./App.css";
import { MapContainer } from "react-leaflet";
import MapLocation from "./components/Map/MapLocation";

function App() {
  return (
    <div className="main">
      <h1>Today City Parks</h1>
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

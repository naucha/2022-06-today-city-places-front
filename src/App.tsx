import React from "react";

import "./App.css";
import { MapContainer, TileLayer } from "react-leaflet";

function App() {
  return (
    <>
      <h1>ROAD TRIP</h1>
      <MapContainer
        center={[41.3879, 2.16992]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </>
  );
}

export default App;

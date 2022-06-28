import React, { useState } from "react";

import "./App.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { Icon } from "leaflet";
import park from "./data/location-parks";

function App() {
  const [activePark, setActivePark] = useState<any>(null);

  const markerIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/6456/6456238.png",
    iconSize: [35, 35],
  });

  return (
    <>
      <h1>ROAD TRIP</h1>
      <MapContainer
        center={[41.3879, 2.16992]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {park.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            position={[
              park.geometry.coordinates[0],
              park.geometry.coordinates[1],
            ]}
            icon={markerIcon}
            eventHandlers={{
              click: () => {
                setActivePark(park);
              },
            }}
          />
        ))}
        {activePark && (
          <Popup
            position={[
              activePark.geometry.coordinates[0],
              activePark.geometry.coordinates[1],
            ]}
          >
            <div>
              <h2>{activePark.properties.NAME}</h2>
              <p>{activePark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        )}
      </MapContainer>
    </>
  );
}

export default App;

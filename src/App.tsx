import React from "react";

import "./App.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

import L, { Icon } from "leaflet";
import park from "./data/location-parks";

function App() {
  const markerIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/6456/6456238.png",
    iconSize: [35, 35],
  });

  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        L.marker([lat, lng], { icon: markerIcon }).addTo(map);
      },
    });
    return null;
  }

  return (
    <div className="main">
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
          >
            {" "}
            <Popup
              position={[
                park.geometry.coordinates[0],
                park.geometry.coordinates[1],
              ]}
            >
              <div>
                <h2>{park.properties.NAME}</h2>
                <p>{park.properties.DESCRIPTIO}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        <MyComponent />
      </MapContainer>
    </div>
  );
}

export default App;

import { Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import L, { Icon } from "leaflet";
import { useAppSelector } from "../../redux/store/hooks";
import React from "react";

const MapLocation = ({
  setCoordinates,
  setFormAdd,
}: {
  setCoordinates: any;
  setFormAdd: any;
}) => {
  const locationState = useAppSelector((state) => state.locations);

  const markerIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [35, 35],
  });

  const markOnMap = useMapEvents({
    click: (event) => {
      const { lat, lng } = event.latlng;

      L.marker([lat, lng], {
        icon: markerIcon,
      }).addTo(markOnMap);

      setFormAdd(true);
      setCoordinates([lat, lng]);
    },
  });

  const printMarkers = () => {
    if (locationState.length < 1) return null;

    return locationState.map((location) => (
      <Marker
        key={location.properties.name}
        position={[
          location.geometry.coordinates[0],
          location.geometry.coordinates[1],
        ]}
        icon={markerIcon}
      >
        {" "}
        <Popup
          position={[
            location.geometry.coordinates[0],
            location.geometry.coordinates[1],
          ]}
        >
          <div className="info-popup">
            <h2>{location.properties.name}</h2>
            <p>{location.properties.description}</p>
            <a
              href={"https://" + location.properties.media}
              target="_blank"
              rel="noreferrer"
            >
              {location.properties.media}
            </a>
          </div>
        </Popup>
      </Marker>
    ));
  };

  return (
    <>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {printMarkers()}
    </>
  );
};

export default MapLocation;

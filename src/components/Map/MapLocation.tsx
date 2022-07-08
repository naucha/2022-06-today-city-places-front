import { Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { useEffect, useState } from "react";
import { Icon } from "leaflet";
import park from "../../data/location-parks";

const MapLocation = () => {
  const [locations, setLocation] = useState<Array<any>>([]);

  useEffect(() => {
    setTimeout(() => {
      setLocation(park.features);
    }, 5000);
  }, []);

  const markerIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/6456/6456238.png",
    iconSize: [35, 35],
  });

  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      const newLocation = {
        type: "Feature",
        properties: {
          PARK_ID: 1,
          NAME: "Tibidabo Park",
          DESCRIPTIO: "Park del Tibidabo Barcelona",
        },
        geometry: {
          type: "Point",
          coordinates: [lat, lng],
        },
      };
      setLocation([...locations, newLocation]);
    },
  });

  const printMarkers = () => {
    if (locations.length < 1) return null;

    return locations.map((park) => (
      <Marker
        key={park.properties.PARK_ID}
        position={[park.geometry.coordinates[0], park.geometry.coordinates[1]]}
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

import { MapContainer } from "react-leaflet";
import MapLocation from "../../components/Maplocation/MapLocation";

export const HomePage = () => {
  return (
    <div className="main">
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
};

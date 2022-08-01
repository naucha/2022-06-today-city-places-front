import { useState } from "react";
import { MapContainer } from "react-leaflet";
import FormAdd from "../../components/Form/FormAdd/FormAdd";
import MapLocation from "../../components/Maplocation/MapLocation";

export const HomePage = (): JSX.Element => {
  const [coordinates, setCoordinates] = useState<number[]>([0, 0]);

  const [formAdd, setFormAdd] = useState(false);

  return (
    <>
      {formAdd ? <FormAdd coordinates={coordinates} /> : ""}
      <MapContainer
        center={[41.3879, 2.16992]}
        zoom={12}
        scrollWheelZoom={false}
        className="map"
      >
        <MapLocation setCoordinates={setCoordinates} setFormAdd={setFormAdd} />
      </MapContainer>
    </>
  );
};

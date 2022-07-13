export interface LocationData {
  properties: {
    name: string;
    description: string;
  };
  type: string;
  geometry: {
    coordinates: number[];
  };
}

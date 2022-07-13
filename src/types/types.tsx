export interface LocationData {
  properties: {
    name: string;
    description: string;
    media: string;
  };
  type: string;
  geometry: {
    coordinates: number[];
  };
}

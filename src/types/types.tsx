export interface LocationData {
  id: string;
  properties: {
    park_id: string;
    name: string;
    description: string;
  };
  type: string;
  geometry: {
    type: string;
    coordinates: number[];
  };
}

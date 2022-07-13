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

export interface UserRegisterData {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  emailadress: string;
}

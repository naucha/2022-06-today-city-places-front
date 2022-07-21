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
  owner: string;
}

export interface UserRegisterData {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  emailadress: string;
  myplaces: string[];
}

export interface UserLoginData {
  username: string;
  password: string;
  emailadress: string;
}

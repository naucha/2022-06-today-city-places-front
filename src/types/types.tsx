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
  firstname: string | null;
  lastname: string | null;
  username: string | null;
  password: string | null;
  emailadress: string | null;
}

export interface UserLoginData {
  username: string | null;
  password: string | null;
  emailadress: string | null;
}

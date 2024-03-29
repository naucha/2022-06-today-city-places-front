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

export interface LocationResponseData {
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
  id: string;
}

export interface UserRegisterData {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  emailadress: string;
}

export interface UserLoginData {
  username: string;
  password: string;
  emailadress: string;
}

export interface UserResponseData {
  username: string;
  emailadress: string;
  id: string;
}

export interface UiState {
  loading: boolean;
}

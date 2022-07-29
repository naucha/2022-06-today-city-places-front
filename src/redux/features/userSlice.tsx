import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  emailadress: string;
  myplaces: string[];
  id: string;
  logged: boolean;
}

const initialState = {
  username: "",
  emailadress: "",
  myplaces: [],
  id: "",
  logged: false,
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user: UserState, action: PayloadAction<UserState>) => ({
      ...action.payload,
      logged: true,
    }),
    logout: (user) => initialState,
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;

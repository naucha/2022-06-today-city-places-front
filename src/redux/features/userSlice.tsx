import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  emailadress: string;
  password: string;
  logged: boolean;
}

const initialState = {
  username: "",
  emailadress: "",
  password: "",
  logged: false,
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user: UserState, action: PayloadAction<any>) => ({
      ...action.payload,
      logged: true,
    }),
  },
});

export const { login: loginActionCreator } = userSlice.actions;

export default userSlice.reducer;

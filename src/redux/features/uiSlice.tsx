import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "../../types/types";

const initialState: UiState = {
  loading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoadingOn: (ui) => ({
      ...ui,
      loading: true,
    }),
    setLoadingOff: (ui) => ({
      ...ui,
      loading: false,
    }),
  },
});

export const {
  setLoadingOn: setLoadingOnActionCreator,
  setLoadingOff: setLoadingOffActionCreator,
} = uiSlice.actions;

export default uiSlice.reducer;

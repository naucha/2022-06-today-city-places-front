import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationData, LocationResponseData } from "../../types/types";

const initialState: LocationData[] = [];

const locationsSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    loadLocation: (locations, action: PayloadAction<LocationData[]>) => [
      ...action.payload,
    ],
    addLocation: (locations, action: PayloadAction<LocationResponseData>) => [
      ...locations,
      action.payload,
    ],
  },
});

export const {
  loadLocation: loadLocationActionCreator,
  addLocation: addLocationActionCreator,
} = locationsSlice.actions;

export default locationsSlice.reducer;

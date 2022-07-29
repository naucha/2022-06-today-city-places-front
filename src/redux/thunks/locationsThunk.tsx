import axios from "axios";
import { LocationData } from "../../types/types";
import {
  addLocationActionCreator,
  loadLocationActionCreator,
} from "../features/locationsSlice";
import { AppDispatch } from "../store/store";

export const loadLocationsThunk = () => async (dispatch: AppDispatch) => {
  const url: string = `${process.env.REACT_APP_API_URL}locations`;
  const token = localStorage.getItem("token");

  try {
    const { data: locations } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (locations) {
      dispatch(loadLocationActionCreator(locations));
    }
  } catch (error: any) {}
};

export const addLocationThunk =
  (newLocationData: LocationData) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}locations/add`;
    const token = localStorage.getItem("token");
    try {
      const {
        status,
        data: { newLocationRegistered },
      } = await axios.post(url, newLocationData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (status === 201) {
        dispatch(addLocationActionCreator(newLocationRegistered));
      }
    } catch (error: any) {}
  };

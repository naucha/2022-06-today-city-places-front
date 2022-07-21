import axios from "axios";
import { loadLocationActionCreator } from "../features/locationsSlice";
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

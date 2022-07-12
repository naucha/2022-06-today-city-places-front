import axios from "axios";
import { loadLocationActionCreator } from "../features/locationsSlice";
import { AppDispatch } from "../store/store";

export const loadLocationsThunk = () => async (dispatch: AppDispatch) => {
  const url: string = `${process.env.REACT_APP_API_URL}list`;

  try {
    const { data: location } = await axios.get(url);
    if (location) {
      dispatch(loadLocationActionCreator(location));
    }
  } catch (error) {
    console.log("Request doesn't work");
  }
};

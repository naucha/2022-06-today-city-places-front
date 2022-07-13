import axios from "axios";
import { loadLocationActionCreator } from "../features/locationsSlice";
import { AppDispatch } from "../store/store";

export const loadLocationsThunk = () => async (dispatch: AppDispatch) => {
  const url: string = `${process.env.REACT_APP_API_URL}locations/list`;
  try {
    const { data } = await axios.get(url);
    if (data) {
      dispatch(loadLocationActionCreator(data));
    }
  } catch (error) {
    console.log("Request doesn't work");
  }
};

import axios from "axios";
import { UserRegisterData } from "../../types/types";
import { AppDispatch } from "../store/store";

export const registerThunk =
  (formData: UserRegisterData) => async (dispatch: AppDispatch) => {
    try {
      const url: string = `${process.env.REACT_APP_API_URL}user/userArea`;
      await axios.post(url, formData);
    } catch (error) {}
  };

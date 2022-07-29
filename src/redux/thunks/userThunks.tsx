import axios from "axios";
import { UserLoginData, UserRegisterData } from "../../types/types";
import { AppDispatch } from "../store/store";
import { loginActionCreator } from "../features/userSlice";
import { loadLocationsThunk } from "./locationsThunk";

export const registerThunk =
  (formData: UserRegisterData) => async (dispatch: AppDispatch) => {
    try {
      const url: string = `${process.env.REACT_APP_API_URL}user/register`;
      await axios.post(url, formData);
    } catch (error: any) {}
  };

export const loginThunk =
  (loginData: UserLoginData) => async (dispatch: AppDispatch) => {
    try {
      const url: string = `${process.env.REACT_APP_API_URL}user/login`;
      const {
        data: { token, userData },
      } = await axios.post(url, loginData);

      localStorage.setItem("token", token);

      dispatch(loginActionCreator(userData));
      dispatch(loadLocationsThunk());
    } catch (error) {}
  };

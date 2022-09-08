import axios from "axios";
import { UserLoginData, UserRegisterData } from "../../types/types";
import { AppDispatch } from "../store/store";
import { loginActionCreator } from "../features/userSlice";

import {
  setLoadingOffActionCreator,
  setLoadingOnActionCreator,
} from "../features/uiSlice";

export const registerThunk =
  (formData: UserRegisterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingOnActionCreator());
      const url: string = `${process.env.REACT_APP_API_URL}user/register`;
      await axios.post(url, formData);
      dispatch(setLoadingOffActionCreator());
    } catch (error: any) {
      dispatch(setLoadingOffActionCreator());
      return null;
    }
  };

export const loginThunk =
  (loginData: UserLoginData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingOnActionCreator());
      const url: string = `${process.env.REACT_APP_API_URL}user/login`;
      const {
        data: { token, userData },
      } = await axios.post(url, loginData);

      dispatch(setLoadingOffActionCreator());
      localStorage.setItem("token", token);
      dispatch(loginActionCreator(userData));
    } catch (error) {
      dispatch(setLoadingOffActionCreator());
    }
    dispatch(setLoadingOffActionCreator());
  };

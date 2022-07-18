import axios from "axios";
import { UserLoginData, UserRegisterData } from "../../types/types";
import { AppDispatch } from "../store/store";
import jwtDecode from "jwt-decode";

export const registerThunk =
  (formData: UserRegisterData) => async (dispatch: AppDispatch) => {
    try {
      const url: string = `${process.env.REACT_APP_API_URL}user/register`;
      await axios.post(url, formData);
    } catch (error) {}
  };

export const loginThunk =
  (loginData: UserLoginData) => async (dispatch: AppDispatch) => {
    try {
      const url: string = `${process.env.REACT_APP_API_URL}user/login`;
      const {
        data: { token },
      } = await axios.post(url, loginData);

      localStorage.setItem("token", token);
      const userInfo = jwtDecode(token);
    } catch (error) {}
  };

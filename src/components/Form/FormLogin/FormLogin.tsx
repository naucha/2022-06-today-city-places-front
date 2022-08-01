import React, { useState } from "react";
import { useAppDispatch } from "../../../redux/store/hooks";
import { loginThunk } from "../../../redux/thunks/userThunks";
import { UserLoginData } from "../../../types/types";
import { SaveButtonStyled } from "../../Button/SaveButtonStyled/SavePlaceStyled";
import { FormStyled } from "../../../styles/FormStyled";
import { Link } from "react-router-dom";
import HeadingSection from "../../Headings/HeadingSection";

const FormLogin = (): JSX.Element => {
  const blankFields: UserLoginData = {
    username: "",
    emailadress: "",
    password: "",
  };

  const [formData, setFormData] = useState<UserLoginData>(blankFields);
  const changeData = (event: { target: { id: string; value: string } }) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = () => {
    setFormData(blankFields);
  };

  const dispatch = useAppDispatch();

  const submitData = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await dispatch(loginThunk(formData));
    resetForm();
  };

  return (
    <>
      <FormStyled noValidate autoComplete="off" onSubmit={submitData}>
        <HeadingSection className="heading__form" name="LOGIN" />
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={formData.username}
          onChange={changeData}
          placeholder={`Username`}
        />
        <label htmlFor="emailadress">Email Adress</label>
        <input
          id="emailadress"
          value={formData.emailadress}
          onChange={changeData}
          placeholder={`Email Adress`}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={formData.password}
          onChange={changeData}
          placeholder={`Password`}
        />
        <div className="actions__form">
          <SaveButtonStyled type="submit">Send</SaveButtonStyled>
          <Link to="/register">
            <span>Sign Up</span>
          </Link>
        </div>
      </FormStyled>
    </>
  );
};

export default FormLogin;

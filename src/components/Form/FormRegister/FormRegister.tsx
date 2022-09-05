import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux/store/hooks";
import { registerThunk } from "../../../redux/thunks/userThunks";
import { FormStyled } from "../../../styles/FormStyled";
import { UserRegisterData } from "../../../types/types";
import ButtonStyled from "../../Button/ButtonStyled";
import HeadingSection from "../../Headings/HeadingSection";

const FormRegister = (): JSX.Element => {
  const blankFields: UserRegisterData = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    emailadress: "",
  };

  const [formData, setFormData] = useState<UserRegisterData>(blankFields);

  const changeData = (event: { target: { id: string; value: string } }) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetForm = () => {
    setFormData(blankFields);
  };

  const dispatch = useAppDispatch();
  const submitData = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await dispatch(registerThunk(formData));
    resetForm();
  };

  return (
    <>
      <FormStyled noValidate autoComplete="off" onSubmit={submitData}>
        <HeadingSection className="heading__form" name="REGISTER" />
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          value={formData.firstname}
          onChange={changeData}
          placeholder={`First Name`}
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          id="lastname"
          value={formData.lastname}
          onChange={changeData}
          placeholder={`Last Name`}
        />
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={formData.username}
          onChange={changeData}
          placeholder={`Username`}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={formData.password}
          onChange={changeData}
          placeholder={`Password`}
        />
        <label htmlFor="emailadress">Email Adress</label>
        <input
          id="emailadress"
          value={formData.emailadress}
          onChange={changeData}
          placeholder={`Email Adress`}
        />
        <div className="actions__form">
          <ButtonStyled type="submit">Send</ButtonStyled>
          <Link to="/login">
            <span>Login</span>
          </Link>
        </div>
      </FormStyled>
    </>
  );
};

export default FormRegister;

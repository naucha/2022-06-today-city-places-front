import { UserRegisterData } from "../../../types/types";

const FormRegister = (): JSX.Element => {
  const blankFields: UserRegisterData = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    emailadress: "",
  };
  return (
    <>
      <h2>REGISTER NEW ACCOUNT</h2>
      <p></p>
      <form noValidate autoComplete="off" onSubmit={() => {}}>
        <label htmlFor="firstname">First Name</label>
        <input id="firstname" />
        <label htmlFor="lastname">Last Name</label>
        <input id="lastname" />
        <label htmlFor="username">Username</label>
        <input id="username" />
        <label htmlFor="password">Password</label>
        <input id="password" />
        <label htmlFor="emailadress">Email Adress</label>
        <input id="emailadress" />
      </form>
    </>
  );
};

export default FormRegister;

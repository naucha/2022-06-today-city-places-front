import styled from "styled-components";

export const FormStyled = styled.form`
  width: 75vw;
  border-radius: 6px;
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  position: absolute;
  background-color: #dededed4;
  top: 35vh;
  bottom: 10vh;
  z-index: 3;
  gap: 10px;

  input {
    width: 40vw;
    height: 35px;
    font-size: 0.6em;
    padding-left: 10px;
    border: 2px solid var(--bg-primary);
    border-radius: 14px;
  }

  label {
    width: 40vw;
    font-size: 1.2em;
    font-weight: 600;
    padding: 2px;
    color: var(--fc-secondary);
  }

  .actions__form {
    width: 40vw;
    display: flex;
    margin: 0;
    justify-content: space-evenly;
    align-items: center;
  }

  a {
    text-decoration: none;
    font-size: 0.8em;
    font-weight: 600;
    letter-spacing: 2px;
    color: var(--fc-primary);
  }
`;

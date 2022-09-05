import styled from "styled-components";

export const FormStyled = styled.form`
  max-width: 320px;
  width: 100%;
  border-radius: 6px;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: left;
  position: absolute;

  top: 20vh;
  bottom: 10vh;
  z-index: 3;

  label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: var(--fc-primary);
  }

  input {
    display: block;
    width: 100%;
    border: none;
    margin-bottom: 16px;
    margin-top: 4px;
    padding: 0;
    background-color: #fff;
    line-height: 2;
    font-size: 0.6em;
  }

  div {
    line-height: 4;
    display: flex;
    flex-direction: column;
    align-items: center;

    .link {
      display: flex;
      justify-content: center;
      width: 50%;
      :hover {
        text-decoration: underline 4px solid #ff6850;
        font-weight: 800;
      }
    }
    a {
      text-decoration: none;
      font-size: 0.8em;
      font-weight: 600;
      letter-spacing: 2px;
      color: var(--fc-primary);
    }
  }
  .modal-container {
    display: flex;
    flex-direction: row;
  }
`;

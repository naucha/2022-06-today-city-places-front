import styled from "styled-components";

const WelcomeStyled = styled.div`
  display: flex;
  position: absolute;
  top: 40vh;
  width: 80%;

  .welcome__container {
    letter-spacing: 1px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 6px;
    color: var(--fc-primary);
    background: linear-gradient(20deg, var(--red) 60%, var(--bg-primary) 100%);

    div {
      display: flex;
      justify-content: space-around;
    }

    a {
      text-decoration: none;
      color: var(--bg-primary);
      font-weight: bold;
      letter-spacing: 4px;
      font-size: 1em;

      &:hover {
        background-color: white;
      }
    }
  }
`;

export default WelcomeStyled;

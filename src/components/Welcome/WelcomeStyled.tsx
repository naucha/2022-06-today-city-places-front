import styled from "styled-components";

const WelcomeStyled = styled.div`
  display: flex;
  position: absolute;
  padding: 0;
  margin: 0;
  align-items: center;
  top: 30vh;
  width: 80%;

  .welcome__container {
    text-justify: auto;
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    color: var(--fc-primary);

    div {
      display: flex;
      justify-content: space-around;
    }

    a {
      text-decoration: none;
      color: var(--bg-secondary);
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

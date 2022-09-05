import styled from "styled-components";

interface Props {
  primary?: string;
}

const ButtonStyled = styled.button<Props>`
  font-size: 0.6em;
  font-weight: 600;
  width: 100%;
  height: 40px;
  letter-spacing: 0.2em;
  border: 2px solid var(--red);
  border-radius: 12px 12px 12px 12px;
  padding: 5px 16px 5px 18px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "white" : "var(--red)")};
  color: ${(props) => (props.primary ? "var(--red)" : "white")};

  &:hover {
    background-color: var(--fc-primary);
    color: var(--bg-primary);
    font-weight: 800;
    text-decoration: underline 4px solid #ff6850;
  }
`;

export default ButtonStyled;

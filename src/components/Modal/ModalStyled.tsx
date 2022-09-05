import styled from "styled-components";
import ButtonStyled from "../Button/ButtonStyled";

const ModalStyled = styled.div`
  background-color: var(--bg-secondary);
  width: 60vw;
  height: 75%;
  color: inherit;
  font-size: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  position: absolute;
  top: 15%;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

const CloseModal = styled(ButtonStyled)`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    text-decoration: none;
  }
`;

export { ModalStyled, CloseModal, ModalContent };
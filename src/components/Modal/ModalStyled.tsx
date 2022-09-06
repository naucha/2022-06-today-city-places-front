import styled from "styled-components";
import ButtonStyled from "../Button/ButtonStyled";

const ModalStyled = styled.div`
  background-color: var(--bg-secondary);
  width: 100vw;
  height: 100vh;
  color: #fff;
  font-size: 20px;

  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;

  justify-content: center;
  align-items: center;
  align-content: space-around;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: space-around;
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

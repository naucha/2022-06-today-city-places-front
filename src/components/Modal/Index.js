import { CloseModal, ModalContent, ModalStyled } from "./ModalStyled";

const Modal = ({ children, onClose }) => {
  return (
    <ModalStyled>
      <ModalContent className="modal-container">
        <CloseModal bg={"bg"} color={"primary"} onClick={onClose}>
          🆇
        </CloseModal>
        {children}
      </ModalContent>
    </ModalStyled>
  );
};

export default Modal;

import { CloseModal, ModalContent, ModalStyled } from "./ModalStyled";

const Modal = ({ children, onClose, text }) => {
  return (
    <ModalStyled>
      <ModalContent className="modal-container">
        <CloseModal bg={"bg"} color={"primary"} onClick={onClose}>
          🆇
        </CloseModal>
        {text}
        {children}
      </ModalContent>
    </ModalStyled>
  );
};

export default Modal;

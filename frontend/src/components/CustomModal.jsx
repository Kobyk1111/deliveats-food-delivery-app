/* eslint-disable react/prop-types */
import Modal from "react-modal";

Modal.setAppElement("#root"); // This helps with accessibility

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "5px",
          padding: "10px",
          width: "60%",
          maxHeight: "70vh",
        },
      }}
    >
      <button onClick={onClose} style={{ float: "right", padding: "5px" }}>
        x
      </button>
      {children}
    </Modal>
  );
};

export default CustomModal;

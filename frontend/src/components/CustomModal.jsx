import React from "react";
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
          borderRadius: "10px",
          padding: "20px",
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

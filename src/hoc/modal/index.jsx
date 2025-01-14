import React, { useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    throw new Error("No modal-root element found in the DOM");
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-4 w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};


const withModal = (WrappedComponent) => {
  return function WithModal(props) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
      setModalContent(content);
      setModalOpen(true);
    };

    const closeModal = () => {
      setModalOpen(false);
      setModalContent(null);
    };

    return (
      <>
        <WrappedComponent {...props} openModal={openModal} />
        {isModalOpen && (
          <Modal onClose={closeModal}>
            {modalContent}
          </Modal>
        )}
      </>
    );
  };
};

export default withModal;

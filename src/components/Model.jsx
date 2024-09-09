import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, selectedTask, confirmDelete, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="div-modal">
      <div className="shadow-modal">
        <button onClick={onClose} className="close-btn">
          <IoClose className="icons" />
        </button>
        <h2 className="text-lg font-semibold">Confirm Deletion</h2>
        <p>Are you sure you want to delete the task "{selectedTask?.title}"?</p>
        <div className="flex-item gap-4 mt-4">
          <button
            onClick={confirmDelete}
            className="modal-btn bg-red-500 text-white hover:bg-red-600"
          >
            Yes, Delete
          </button>
          <button
            onClick={onClose}
            className="modal-btn bg-gray-300 text-black hover:bg-gray-400"
          >
            No, Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, selectedTask, confirmDelete, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">Confirm Deletion</h2>
        <p>Are you sure you want to delete the task "{selectedTask?.title}"?</p>
        <div className="flex-item">
          <button
            onClick={confirmDelete}
            className="mt-4 bg-red-500 text-white p-2 rounded-md"
          >
            Yes, Delete
          </button>
          <button
            onClick={onClose}
            className="mt-4 ml-4 bg-gray-300 text-black p-2 rounded-md"
          >
            <IoClose className="text-2xl md:text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

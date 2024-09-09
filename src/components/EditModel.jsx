import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const EditModel = ({ isOpen, selectedTask, onClose, onSave }) => {
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    dueDate: "",
    completed: false,
  });

  useEffect(() => {
    if (selectedTask) {
      setTaskDetails({
        title: selectedTask.title || "",
        description: selectedTask.description || "",
        dueDate: selectedTask.dueDate || "",
        completed: selectedTask.completed || false,
      });
    }
  }, [selectedTask]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTaskDetails({
      ...taskDetails,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (new Date(taskDetails.dueDate) < new Date()) {
      console.log("Please select a valid future date!");
      return;
    }
    onSave({
      id: selectedTask.id,
      ...taskDetails,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="div-modal">
      <div className="shadow-modal">
        <button onClick={onClose} className="close-btn">
          <IoClose className="icons" />
        </button>
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-semibold">
            Editing Task
            <span className="underline"> "{selectedTask?.title}"</span>
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              name="title"
              value={taskDetails.title}
              onChange={handleInputChange}
              className="w-full form-input"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description:</label>
            <textarea
              name="description"
              value={taskDetails.description}
              onChange={handleInputChange}
              className="w-full form-input"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Due Date:</label>
            <input
              type="date"
              name="dueDate"
              value={taskDetails.dueDate}
              onChange={handleInputChange}
              className="w-full form-input"
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="text-gray-700 mr-2">Completed:</label>
            <input
              type="checkbox"
              name="completed"
              checked={taskDetails.completed}
              onChange={handleInputChange}
              className="w-5 h-5 cursor-pointer"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="modal-btn bg-gray-300 text-black hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="modal-btn bg-violet-600 text-white hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModel;

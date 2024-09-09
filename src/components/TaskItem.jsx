import React from "react";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { useSelector } from "react-redux";

const TaskItem = ({ task, toggleCheckBox, openDeleteModal, openEditModel }) => {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <div
      className={`p-4 border rounded-md shadow-md w-full md:w-80 ${
        task.completed ? "bg-white" : ""
      } ${theme === "dark" ? "bg-gray-300" : "bg-green-100"}`}
    >
      <h3 className="text-lg font-bold underline">{task.title}</h3>
      <p>{task.description}</p>
      <p className="text-gray-500">Due Date: {task.dueDate}</p>
      <div className="flex justify-between items-center mt-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCheckBox(task.id)}
          className="cursor-pointer"
        />
        <p
          className={`pr-2 ${
            task.completed ? "text-green-600 line-through" : "text-red-600"
          }`}
        >
          {task.completed ? "It's Completed" : "It's Incomplete"}
        </p>
        <button
          onClick={() => openDeleteModal(task)}
          className="text-red-500 ml-4"
        >
          <MdDelete className="icons" />
        </button>
        <button
          onClick={() => openEditModel(task)}
          className="text-green-500 ml-4"
        >
          <MdModeEditOutline className="icons" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

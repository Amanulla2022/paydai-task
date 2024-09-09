import React, { useState } from "react";
import TaskItem from "./TaskItem";
import Model from "./Model";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../redux/taskSlice";

const Tasks = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Incompleted") return !task.completed;
    return true;
  });

  const toggleCheckBox = (taskId) => {
    dispatch(toggleTaskCompletion(taskId));
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const openDeleteModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    if (selectedTask) {
      handleDelete(selectedTask.id);
      closeModal();
    }
  };

  return (
    <div className="flex-item flex-col justify-center w-full md:w-4/5">
      <h1 className="text-center font-semibold text-xl md:text-2xl">
        All Tasks!
      </h1>
      <div className="flex flex-wrap justify-center gap-4 p-4 w-full">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleCheckBox={() => toggleCheckBox(task.id)}
              openDeleteModal={() => openDeleteModal(task)}
            />
          ))
        ) : (
          <p className="text-center w-full font-bold">No tasks found!</p>
        )}
      </div>
      <Model
        isOpen={isModalOpen}
        selectedTask={selectedTask}
        confirmDelete={confirmDelete}
        onClose={closeModal}
      />
    </div>
  );
};

export default Tasks;

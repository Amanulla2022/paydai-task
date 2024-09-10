import React, { useState } from "react";
import TaskItem from "./TaskItem";
import Model from "./Model";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask, toggleTaskCompletion } from "../redux/taskSlice";
import EditModel from "./EditModel";
import Search from "./Search";

const Tasks = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.mode);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "Completed") return task.completed;
      if (filter === "Incompleted") return !task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

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

  const openEditModel = (task) => {
    setSelectedTask(task);
    setIsEditModalOpen(true);
  };

  const closeEditModel = () => {
    setSelectedTask(null);
    setIsEditModalOpen(false);
  };

  const confirmEdit = (updatedTask) => {
    dispatch(editTask(updatedTask));
    closeEditModel();
  };

  return (
    <div className="flex-item flex-col justify-center w-full md:w-4/5">
      <h1
        className={`text-center font-semibold text-xl md:text-2xl  ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        All Tasks!
      </h1>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex flex-wrap justify-center gap-4 p-4 w-full">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleCheckBox={() => toggleCheckBox(task.id)}
              openDeleteModal={() => openDeleteModal(task)}
              openEditModel={() => openEditModel(task)}
            />
          ))
        ) : (
          <p
            className={`text-center w-full font-bold ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            No tasks found!
          </p>
        )}
      </div>
      <Model
        isOpen={isModalOpen}
        selectedTask={selectedTask}
        confirmDelete={confirmDelete}
        onClose={closeModal}
      />
      <EditModel
        isOpen={isEditModalOpen}
        selectedTask={selectedTask}
        onClose={closeEditModel}
        onSave={confirmEdit}
      />
    </div>
  );
};

export default Tasks;

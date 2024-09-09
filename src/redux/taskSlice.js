import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  filter: "All",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    editTask: (state, action) => {
      const { id, title, description, dueDate, completed } = action.payload;
      const task = state.tasks.find((task) => task.id === id);

      if (task) {
        task.title = title || task.title;
        task.description = description || task.description;
        task.dueDate = dueDate || task.dueDate;
        task.completed = completed !== undefined ? completed : task.completed;
      }
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleTaskCompletion,
  setFilter,
  editTask,
} = tasksSlice.actions;
export default tasksSlice.reducer;

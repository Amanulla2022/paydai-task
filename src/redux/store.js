import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./taskSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    theme: themeReducer,
  },
});

export default store;

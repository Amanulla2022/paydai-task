import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/taskSlice";

const AddTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    completed: false,
  });

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!formData.title && !formData.description && !formData.dueDate) {
      console.log("Please fill all the details!");
      return;
    }

    if (!formData.title) {
      console.log("Please enter title of task!");
      return;
    }

    if (!formData.description) {
      console.log("Please enter description of task!");
      return;
    }

    if (!formData.dueDate) {
      console.log("Please enter duedate of task!");
      return;
    }

    if (new Date(formData.dueDate) < new Date()) {
      console.log("Please select a valid future date!");
      return;
    }

    const newTask = {
      id: Date.now(),
      ...formData,
    };

    dispatch(addTask(newTask));
    setFormData({ title: "", description: "", dueDate: "" });
  };

  return (
    <>
      <form
        onSubmit={submitForm}
        className="flex-item flex-col md:flex-row justify-center gap-4 m-4"
      >
        <input
          className="w-full md:w-1/4 form-input p-2 border-2 rounded-md"
          placeholder="Enter Title!"
          type="text"
          name="title"
          onChange={handleInputChange}
          value={formData.title}
        />
        <input
          className="w-full md:w-1/2 form-input p-2 border-2 rounded-md"
          placeholder="Enter Description!"
          type="text"
          name="description"
          onChange={handleInputChange}
          value={formData.description}
        />
        <div className="flex-item flex-col md:flex-row gap-4">
          <input
            className="border-2 py-2 px-4 rounded-md cursor-pointer"
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleInputChange}
          />
          <button
            className={`${
              theme === "light" ? "text-white bg-black" : "text-black bg-white"
            } text-lg rounded-xl p-2 md:ml-4`}
            type="submit"
          >
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTask;

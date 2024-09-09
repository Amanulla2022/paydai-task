import React from "react";
import AddTask from "./../components/AddTask";
import Headding from "../components/Headding";
import Tasks from "../components/Tasks";
import TaskFilter from "./../components/TaskFilter";

const Home = () => {
  return (
    <>
      <Headding />
      <AddTask />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/5">
          <TaskFilter />
        </div>
        <div className="w-full md:w-4/5 p-4">
          <Tasks />
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useState } from "react";
import AddTask from "./../components/AddTask";
import Headding from "../components/Headding";
import Tasks from "../components/Tasks";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <Headding />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} />
    </>
  );
};

export default Home;

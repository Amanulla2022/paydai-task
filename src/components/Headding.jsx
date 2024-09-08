import React, { useState } from "react";
import Logo from "../images/todo.png";
import { FaSun, FaMoon } from "react-icons/fa6";

const Headding = () => {
  const [toggle, setToggle] = useState(false);

  const toggleElement = () => {
    setToggle(!toggle);
  };
  return (
    <div className="flex-item justify-evenly align-middle">
      <img src={Logo} alt="Task Logo" className="h-10 w-10 md:h-16 md:w-16" />
      <h1 className="text-2xl md:text-4xl font-bold uppercase border-b-2 text-center my-8">
        Task Management App!
      </h1>
      <button className="bg-gray-300 p-1 rounded-full" onClick={toggleElement}>
        {!toggle ? (
          <FaSun className="text-2xl md:text-4xl" />
        ) : (
          <FaMoon className="text-2xl md:text-4xl" />
        )}
      </button>
    </div>
  );
};

export default Headding;

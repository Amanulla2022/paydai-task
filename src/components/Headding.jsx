import React from "react";
import Logo from "../images/todo.png";
import { FaSun } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Headding = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="flex-item justify-evenly align-middle">
      <img src={Logo} alt="Task Logo" className="h-10 w-10 md:h-16 md:w-16" />
      <h1
        className={`text-2xl md:text-4xl font-bold uppercase border-b-2 text-center my-8 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Task Management App!
      </h1>
      <button className="" onClick={handleToggleTheme}>
        {theme === "light" ? (
          <FaSun className="text-2xl md:text-4xl text-yellow-400" />
        ) : (
          <BsFillMoonStarsFill className="text-2xl md:text-4xl text-gray-200" />
        )}
      </button>
    </div>
  );
};

export default Headding;

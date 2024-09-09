import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/taskSlice";

const TaskFilter = () => {
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  return (
    <div className="flex-item flex-row md:flex-col justify-center gap-4 p-4 border-r">
      <h5 className="font-semibold text-xl">Filter Option:</h5>
      {["All", "Completed", "Incompleted"].map((f) => (
        <button
          key={f}
          className={`px-4 py-2 rounded-full ${
            filter === f ? "bg-violet-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => dispatch(setFilter(f))}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;

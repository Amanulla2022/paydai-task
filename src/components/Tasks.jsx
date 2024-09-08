import React from "react";

const Tasks = ({ tasks }) => {
  return (
    <>
      <h1 className="text-center font-semibold text-xl md:text-2xl">
        All Tasks!
      </h1>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white p-4 border rounded-xl shadow-xl w-full md:w-2/3 lg:w-1/2 xl:w-1/3"
            >
              <h3 className="text-xl underline font-semibold mb-2">
                {task.title}
              </h3>
              <p className="mb-2">{task.description}</p>
              <p className="text-gray-500">{task.dueDate}</p>
            </div>
          ))
        ) : (
          <p className="text-center w-full">No tasks found!</p>
        )}
      </div>
    </>
  );
};

export default Tasks;

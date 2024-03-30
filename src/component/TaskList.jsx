import React from "react";

function TaskList({
  taskContainer,
  removeTodo,
  setOpenEditTask,
  setEditText,
  setEditIndex,
}) {
  return (
    <>
      <ul
        className=" max-[650px]:px-6 max-[650px]:w-full my-6 flex flex-col gap-3 max-w-[700px] px-6
       ml-[50%] translate-x-[-50%]"
      >
        {taskContainer?.map((task, index) => {
          return (
            <li
              key={index}
              className=" text-white flex items-center gap-6 max-[650px]:items-start  justify-between"
            >
              <span className=" break-all">👉 {task}</span>
              <div className=" flex gap-2 flex-shrink-0">
                <button
                  onClick={() => {
                    setEditText(task);
                    setEditIndex(index);
                    setOpenEditTask(true);
                  }}
                  className=" bg-[#F80E0E] px-2 py-1.5 text-sm rounded-md cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => removeTodo(index)}
                  className=" bg-[#F80E0E] px-2 py-1.5 text-sm rounded-md cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TaskList;

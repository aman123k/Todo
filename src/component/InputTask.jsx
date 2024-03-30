import React from "react";

function InputTask({
  task,
  setTask,
  addTodo,
  openEditTask,
  setEditText,
  editText,
  editTodo,
}) {
  return (
    <section className=" max-w-[700px] ml-[50%] max-[650px]:w-full translate-x-[-50%]">
      <header className=" text-center text-white pt-20 pb-16 text-4xl font-semibold">
        <h1>Todo App</h1>
      </header>
      {openEditTask ? (
        <form action="#" className=" flex gap-2 justify-center mx-6">
          <input
            type="text"
            placeholder="Enter text"
            value={editText}
            onChange={(e) => setEditText(e.currentTarget.value)}
            className=" px-4 max-[650px]:w-full rounded-md outline-none w-full"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              editTodo();
            }}
            className=" bg-[#FFFF00] px-16 flex-shrink-0 py-2 max-[650px]:px-6 rounded-md tracking-wide"
          >
            Update
          </button>
        </form>
      ) : (
        <form action="#" className=" flex gap-2 justify-center mx-6">
          <input
            type="text"
            placeholder="Enter text"
            value={task}
            onChange={(e) => setTask(e.currentTarget.value)}
            className=" px-4 max-[650px]:w-full rounded-md outline-none w-full"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              addTodo();
            }}
            className=" bg-[#1D1DF5] px-16 text-white flex-shrink-0 py-2 max-[650px]:px-6 rounded-md tracking-wide"
          >
            Sumit
          </button>
        </form>
      )}
    </section>
  );
}

export default InputTask;

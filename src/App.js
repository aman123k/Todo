import { useEffect, useState } from "react";
import InputTask from "./component/InputTask";
import TaskList from "./component/TaskList";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const allTask = JSON.parse(localStorage.getItem("allTask"));
  const [task, setTask] = useState("");
  const [taskContainer, setTaskContainer] = useState(allTask);
  const [openEditTask, setOpenEditTask] = useState(false);
  const [editText, setEditText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (task.trim() !== "") {
      setTaskContainer([...taskContainer, task]);
      localStorage.setItem("allTask", JSON.stringify([...taskContainer, task]));
      setTask("");
    } else {
      toast.error("Please enter some text");
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...taskContainer];
    newTodos.splice(index, 1);
    setTaskContainer(newTodos);
    localStorage.setItem("allTask", JSON.stringify(newTodos));
  };
  const editTodo = () => {
    if (editText.trim() !== "") {
      const newTodos = [...taskContainer];
      newTodos[editIndex] = editText;
      setTaskContainer(newTodos);
      localStorage.setItem("allTask", JSON.stringify(newTodos));
      setEditIndex(null);
      setOpenEditTask(false);
    } else {
      toast.error("Please enter some text to update");
    }
  };
  return (
    <>
      <InputTask
        setTask={setTask}
        task={task}
        addTodo={addTodo}
        openEditTask={openEditTask}
        setEditText={setEditText}
        editText={editText}
        editTodo={editTodo}
      />
      <TaskList
        taskContainer={taskContainer}
        removeTodo={removeTodo}
        setOpenEditTask={setOpenEditTask}
        setEditText={setEditText}
        setEditIndex={setEditIndex}
      />
      <Toaster />
    </>
  );
}

export default App;

import { useState } from "react";
import InputTask from "./component/InputTask";
import TaskList from "./component/TaskList";

function App() {
  const [task, setTask] = useState("");
  const [taskContainer, setTaskContainer] = useState([]);
  const [openEditTask, setOpenEditTask] = useState(false);
  const [editText, setEditText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (task.trim() !== "") {
      setTaskContainer([...taskContainer, task]);
      setTask("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...taskContainer];
    newTodos.splice(index, 1);
    setTaskContainer(newTodos);
  };
  const editTodo = () => {
    if (editText.trim() !== "") {
      const newTodos = [...taskContainer];
      newTodos[editIndex] = editText;
      setTaskContainer(newTodos);
      setEditIndex(null);
      setOpenEditTask(false);
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
    </>
  );
}

export default App;

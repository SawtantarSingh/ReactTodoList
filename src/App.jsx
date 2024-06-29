import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useSelector } from "react-redux";
import { getTodo } from "./components/todoSlice";
import Stats from "./components/Stats";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [curTodo, setCurTodo] = useState("");

  const todoLength = useSelector(getTodo).length;

  function handleToggleEdit(todo) {
    setIsEditing(!isEditing);
    setCurTodo(todo);
  }

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskInput
        isEditing={isEditing}
        currentTodo={curTodo}
        setIsEditing={setIsEditing}
      />
      {todoLength > 0 && (
        <TaskList isEditing={isEditing} onToggleEdit={handleToggleEdit} />
      )}
      <Stats />
    </div>
  );
}

export default App;

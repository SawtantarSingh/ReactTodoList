import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, getEditTodo } from "./todoSlice";
function TaskInput({ isEditing, currentTodo, setIsEditing }) {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");
  const [editTodo, setEditTodo] = useState();

  useEffect(
    function () {
      if (isEditing) {
        setEditTodo(currentTodo.task);
      } else {
        setEditTodo("");
      }
    },
    [isEditing, currentTodo.task]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const newObj = {
      id: new Date().getTime(),
      task: todo,
      completed: false,
      editing: false,
    };
    // Add the new todo to the list
    dispatch(addTodo(newObj));
    // Clear the input field
    setTodo("");
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log(editTodo);
    const newObj = {
      id: currentTodo.id,
      task: editTodo,
      completed: currentTodo.completed,
    };
    dispatch(getEditTodo(newObj));
    //
    setEditTodo("");
    setIsEditing(false);
  };

  return isEditing ? (
    // Render the input field for editing a todo
    <form className="add-form" onSubmit={handleEditSubmit}>
      <h3>Edit Item</h3>
      <div>
        <input
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          required
        />
      </div>
      <button>Update</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  ) : (
    // Render the input field for creating a new todo
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add Items</h3>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          required
        />
      </div>
      <button>Add</button>
    </form>
  );
}
export default TaskInput;

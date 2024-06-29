import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getCompletedTodo, toggleTodo } from "./todoSlice";

function TaskListItem({ todo, onToggleEdit, isEditing }) {
  const dispatch = useDispatch();
  const isCompleted = useSelector(getCompletedTodo(todo.id));

  return (
    <li>
      <div className="list-text">
        <input type="checkbox" onClick={() => dispatch(toggleTodo(todo.id))} />
        <span className={isCompleted ? "checked" : ""}> {todo.task} </span>
      </div>
      <div className="list-button">
        <button disabled={isEditing} onClick={() => onToggleEdit(todo)}>
          Edit
        </button>
        <button
          disabled={isEditing}
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskListItem;

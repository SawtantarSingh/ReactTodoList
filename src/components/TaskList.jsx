import { useDispatch, useSelector } from "react-redux";
import { clearTodoList, getTodo } from "./todoSlice";
import TaskListItem from "./TaskListItem";

function TaskList({ onToggleEdit, isEditing }) {
  const todos = useSelector(getTodo);
  //   console.log(todos);
  const dispatch = useDispatch();
  return (
    <div className="list">
      <ul className="listEl">
        {todos.map((todo) => (
          <TaskListItem
            todo={todo}
            key={todo.id}
            onToggleEdit={onToggleEdit}
            isEditing={isEditing}
          />
        ))}
      </ul>
      <div>
        <button onClick={() => dispatch(clearTodoList())}>Clear Cart</button>
      </div>
    </div>
  );
}

export default TaskList;

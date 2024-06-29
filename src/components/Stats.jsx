import { useSelector } from "react-redux";
import { getTodo } from "./todoSlice";

function Stats() {
  const todoLength = useSelector(getTodo).length;
  if (!todoLength)
    return (
      <p className="stats">
        <em>Start Adding some work to your list 🚀</em>
      </p>
    );

  return (
    <footer className="stats">
      <em>Total Todo : {todoLength}</em>
    </footer>
  );
}

export default Stats;

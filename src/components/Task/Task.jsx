import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({ e }) => {
  // NOTE: do not delete `data-testid` key value pair
  console.log(e);
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" checked={e.done} />
      <div data-testid="task-text">{e.text}</div>
      {/* Counter here */}
      <Counter />
      <button data-testid="task-remove-button">Delete</button>
    </li>
  );
};

export default Task;

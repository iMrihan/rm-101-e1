import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({ e, handleDelete, handleStatus }) => {
  // NOTE: do not delete `data-testid` key value pair
  console.log(e);
  return (
    <li data-testid="task" className={styles.task}>
      <input
        type="checkbox"
        onClick={() => {
          handleStatus(e.text);
        }}
        data-testid="task-checkbox"
        defaultChecked={e.done}
      />
      <div
        data-testid="task-text"
        className={e.done ? styles.complete : styles.incomplete}
      >
        {e.text}
      </div>
      {/* Counter here */}
      <Counter value={e.count} />
      <button
        data-testid="task-remove-button"
        onClick={() => {
          handleDelete(e.text);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Task;

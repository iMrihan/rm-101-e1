import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({ data, handleDelete, handleStatus, text }) => {
  // NOTE: do not delete `data-testid` key value pair

  console.log("filter", text);
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {data.map((e, i) => {
          return (
            <Task
              e={e}
              key={i}
              handleDelete={handleDelete}
              handleStatus={handleStatus}
            />
          );
        })}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        {data.length === 0 && (
          <div>
            <h3>Empty List</h3>
            <h4>Add a new task above</h4>
          </div>
        )}
      </div>
    </>
  );
};

export default Tasks;

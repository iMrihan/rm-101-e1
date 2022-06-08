import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";
import data from "../../data/tasks.json";
import { useState } from "react";
const Tasks = () => {
  const [formData, setFormData] = useState([...data]);

  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {formData.map((e) => (
          <Task e={e} />
        ))}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;

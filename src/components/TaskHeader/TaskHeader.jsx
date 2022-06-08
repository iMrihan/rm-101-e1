import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ formData }) => {
  // sample values to be replaced
  let totalTask = formData.length;
  let unCompletedTask = formData.filter((e) => e.done === true).length;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <b data-testid="header-remaining-task">You have {unCompletedTask}</b>
      <b data-testid="header-total-task"> of {totalTask} tasks remaining</b>
    </div>
  );
};

export default TaskHeader;

import React from "react";

import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask";

import { TaskHeader } from "./TaskHeader";
import { Tasks } from "./Tasks";
import data from "../data/tasks.json";
import { useState } from "react";
const TaskApp = () => {
  const [formData, setFormData] = useState([...data]);

  const handleDelete = (id) => {
    setFormData(formData.filter((el) => el.text !== id));
  };

  const handleStatus = (id) => {
    setFormData(
      formData.map((el) => (el.text === id ? { ...el, done: !el.done } : el))
    );
  };

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      <h2>Todo List</h2>
      {/* Header */}
      <TaskHeader formData={formData} />

      {/* Add Task */}
      <AddTask setFormData={setFormData} formData={formData} />
      {/* Tasks */}
      <Tasks
        data={formData}
        handleDelete={handleDelete}
        handleStatus={handleStatus}
      />
    </div>
  );
};

export default TaskApp;

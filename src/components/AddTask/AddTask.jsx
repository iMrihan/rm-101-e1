import React from "react";
import { useState } from "react";
import styles from "./addTask.module.css";
const AddTask = ({ setFormData, formData }) => {
  // console.log("hello", formData, setFormData);
  // NOTE: do not delete `data-testid` key value pair
  const initialState = {
    id: Math.random(),
    text: "",
    done: false,
    count: 1,
  };

  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    setFormData([...formData, form]);
  };

  console.log("id_check", form.id);

  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        name="text"
        onChange={handleChange}
      />
      <button
        data-testid="add-task-button"
        disabled={form.text.length === 0}
        onClick={() => {
          handleSubmit();
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddTask;

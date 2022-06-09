import React from "react";
import { useState } from "react";
import styles from "./addTask.module.css";
const AddTask = ({ setFormData, formData, setText }) => {
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
    setText(e.target.value);
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    const match = formData.filter((e) => e.text === form.text).length;
    if (match) {
      setForm(initialState);
      return;
    } else {
      setFormData([...formData, form]);
      setForm(initialState);
    }
  };

  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        value={form.text}
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

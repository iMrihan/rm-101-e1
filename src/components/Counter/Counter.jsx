import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = ({ value }) => {
  const [counter, setCounter] = useState(0);
  // sample value to be replaced
  let count = value + counter;
  // NOTE: do not delete `data-testid` key value pair

  const handleCounter = (val) => {
    setCounter(val + counter);
  };

  return (
    <div className={styles.counter}>
      <button
        data-testid="task-counter-increment-button"
        onClick={() => {
          handleCounter(+1);
        }}
      >
        +
      </button>
      <span data-testid="task-counter-value">{count}</span>
      <button
        data-testid="task-counter-decrement-button"
        onClick={() => {
          if (count >= 1) {
            handleCounter(-1);
          }
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;

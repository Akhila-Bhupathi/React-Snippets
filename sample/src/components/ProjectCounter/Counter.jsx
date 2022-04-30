import React from "react";

const Counter = ({ counter, increment, deleteC }) => {
  return (
    <div>
      <button onClick={() => deleteC(counter.id)}>Delete</button>
      <span>{counter.value === 0 ? <span>Zero</span> : counter.value}</span>
      <button onClick={() => increment(counter.id)}>Add</button>
    </div>
  );
};

export default Counter;

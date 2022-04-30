import React from "react";

export const List = ({ items, deleteList }) => {
  return (
    <div>
      <ol>
        {items.map((item) => (
          <>
            <li key={item.id}>{item.value}</li>
            <button onClick={() => deleteList(item.id)}>Delete</button>
          </>
        ))}
      </ol>
    </div>
  );
};

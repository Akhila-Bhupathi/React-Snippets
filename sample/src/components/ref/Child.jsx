import React from "react";

const Child = React.forwardRef((props, ref) => {
  React.useImperativeHandle(ref, () => {
    return {
      get() {
        console.log("I am being called");
      },
    };
  });
  return <h1>Hi</h1>;
});

export default Child;

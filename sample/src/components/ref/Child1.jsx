import React from "react";

const Child1 = React.forwardRef((props, ref) => {
  React.useImperativeHandle(ref, () => {
    return {
      get() {
        console.log("I am being called");
      },
    };
  });
  return <h1>hi</h1>;
});

export default Child1;

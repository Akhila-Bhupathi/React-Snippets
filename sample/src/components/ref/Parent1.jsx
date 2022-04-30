import React from "react";
import Child1 from "./Child";

export default class Parent1 extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  render() {
    return (
      <>
        <Child1 ref={this.input} />
        <button onClick={() => this.input.current.get()}>Click</button>
      </>
    );
  }
}

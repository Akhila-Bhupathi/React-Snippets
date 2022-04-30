import React from "react";
import { Context } from "./Context";

class C1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h5>{this.context}</h5>;
  }
}

C1.contextType = Context;

export default C1;

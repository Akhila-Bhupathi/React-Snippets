import React from "react";
import { Context } from "./Context";

export default class C3 extends React.Component {
  render() {
    return (
      <>
        <Context.Consumer>
          {(val) => {
            return <h7>{val}</h7>;
          }}
        </Context.Consumer>
      </>
    );
  }
}

import React from "react";
import Counters from "./Counters";

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <h1>Counter</h1>
        <Counters />
      </>
    );
  }
}

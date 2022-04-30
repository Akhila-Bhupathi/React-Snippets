import React from "react";
import Timer from "./Timer";

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <h1>Tick timer</h1>
        <Timer />
      </>
    );
  }
}

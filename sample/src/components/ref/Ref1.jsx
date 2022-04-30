import React from "react";

export default class Ref extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.input.current.focus();
  }

  render() {
    return (
      <>
        <input type="text" ref={this.input} />
        <button onClick={this.focus}>Focus</button>
      </>
    );
  }
}

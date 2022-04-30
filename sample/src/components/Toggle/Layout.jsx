import React from "react";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
    };
    //this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = () => {
    this.setState({ isToggle: !this.state.isToggle }); //Arrow function to avoid bind in constructor
  };
  render() {
    return (
      <>
        <div>
          <h1>Toggle</h1>
          <button onClick={this.handleToggle}>
            {this.state.isToggle ? "ON" : "OFF"}
          </button>
        </div>
      </>
    );
  }
}

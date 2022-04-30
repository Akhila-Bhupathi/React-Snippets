import React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  tick = () => {
    this.setState({ date: new Date() });
  };

  componentDidMount() {
    console.log("mounted");
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("unmounted");
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <div>
          <p>Hello time is {this.state.date.toLocaleTimeString()}</p>
        </div>
      </>
    );
  }
}

import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticks: 0,
    };
  }
  tick() {
    // this.setState({ tick: this.state.tick + 1 });
    this.setState((state) => ({
      ticks: state.ticks + 1,
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h1>Time : {this.state.ticks}</h1>;
  }
}

// class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { seconds: 0 };
//   }

//   tick() {
//     this.setState((state) => ({
//       seconds: state.seconds + 1,
//     }));
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return <div>Seconds: {this.state.seconds}</div>;
//   }
// }

export default Timer;

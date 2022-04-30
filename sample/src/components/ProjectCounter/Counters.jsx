import React from "react";
import Counter from "./Counter";

export default class Counters extends React.Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { id: 1, value: 0 },
        { id: 2, value: 1 },
        { id: 3, value: 3 },
        { id: 4, value: 6 },
      ],
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.deleteCounter = this.deleteCounter.bind(this);
    this.reset = this.reset.bind(this);
  }

  incrementCounter(id) {
    // let counters = this.state.counters;
    // counters[id].value++;
    // this.setState({ counters: [...counters, counter] });
    const counters = this.state.counters.map((c) => {
      if (c.id === id) {
        c.value++;
        return c;
      }
      return c;
    });
    this.setState({ counters });
  }

  deleteCounter(id) {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  }

  reset() {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.reset()}>Reset</button>
        {this.state.counters.length > 0 ? (
          this.state.counters.map((counter) => {
            return (
              <Counter
                key={counter.id}
                counter={counter}
                increment={this.incrementCounter}
                deleteC={this.deleteCounter}
              />
            );
          })
        ) : (
          <h1>No Counters</h1>
        )}
      </div>
    );
  }
}

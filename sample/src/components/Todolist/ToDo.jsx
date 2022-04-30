import React from "react";
import { List } from "./List";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
      id: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const item = {
      id: this.state.id,
      value: this.state.text,
    };
    this.setState({
      items: [...this.state.items, item],
      id: this.state.id + 1,
      text: "",
    });
    console.log(this.state.items);
  }

  handleDelete(id) {
    this.setState({ items: this.state.items.filter((item) => item.id !== id) });
  }

  render() {
    return (
      <>
        <List items={this.state.items} deleteList={this.handleDelete} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todo">What needs to be done</label>
          <input
            type="text"
            value={this.state.text}
            id="todo"
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </>
    );
  }
}

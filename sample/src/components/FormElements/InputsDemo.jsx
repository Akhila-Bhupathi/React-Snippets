import React from "react";

export default class InputsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      textarea: "",
      select: "banana",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    this.setState({ input: e.target.value });
  }

  handleTextArea(e) {
    this.setState({ textarea: e.target.value });
  }
  handleSelect(e) {
    this.setState({ select: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(
      "Submitted",
      "input",
      this.state.input,
      "textarea",
      this.state.textarea,
      "select",
      this.state.select
    );
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Input</label>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleInput}
          />
          <br />
          <label>Text Area</label>
          <textarea
            value={this.state.textarea}
            onChange={this.handleTextArea}
          />
          <br />
          <label>Select</label>
          <select value={this.state.select} onChange={this.handleSelect}>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

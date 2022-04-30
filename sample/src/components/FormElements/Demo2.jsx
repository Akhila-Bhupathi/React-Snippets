import React from "react";

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      textarea: "",
      select: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }
  render() {
    return (
      <div>
        <form>
          <label>Input</label>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
            name="input"
          />
          <br />
          <label>TextArea</label>
          <textarea
            value={this.state.textarea}
            name="textarea"
            onChange={this.handleChange}
          />
          <br />
          <label>select</label>
          <select
            value={this.state.select}
            onChange={this.handleChange}
            name="select"
          >
            <option value="apple">Apple</option>
            <option value="apple1">Apple1</option>
          </select>
        </form>
      </div>
    );
  }
}

import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isxNext: true,
    };
    this.renderSquare = this.renderSquare.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(i) {
    const s = [...this.state.squares];
    s[i] = this.state.isxNext ? "X" : "O";
    this.setState({ squares: s, isxNext: !this.state.isxNext });
  }

  renderSquare(i) {
    return (
      <Square
        id={i}
        onClick={this.handleOnClick}
        value={this.state.squares[i]}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner is " + winner;
    } else {
      status = "Next player is " + (this.state.isxNext ? "X" : "O");
      console.log(status);
    }
    return (
      <div>
        <h3>{status}</h3>
        <table>
          <tbody>
            <tr>
              <td>{this.renderSquare(0)}</td>
              <td>{this.renderSquare(1)}</td>
              <td>{this.renderSquare(2)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(3)}</td>
              <td>{this.renderSquare(4)}</td>
              <td>{this.renderSquare(5)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(6)}</td>
              <td>{this.renderSquare(7)}</td>
              <td>{this.renderSquare(8)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function calculateWinner(squares) {
  let list = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < list.length; i++) {
    const [a, b, c] = list[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

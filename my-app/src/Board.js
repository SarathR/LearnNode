import Square from './Square';
import React from 'react';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.rows = Array(3).fill(null);
  }
  renderSquare(i) {
    return (<Square
      key={i} 
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />);
  }
  renderRow(row) {
    return (
      <div key={row} className="board-row">
        {this.rows.map((x, col) => this.renderSquare(3*row+col))}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.rows.map((x, rowIndex) => this.renderRow(rowIndex))}
      </div>
    );
  }
}
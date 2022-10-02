import { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <>
        <button
          className='plusButton'
          onClick={this.props.handleIncreament}
          disabled={this.props.count + 1 > this.props.max}
        >
          +
        </button>
        <button
          className='minusButton'
          onClick={this.props.handleDecreament}
          disabled={this.props.count - 1 < this.props.min}
        >
          -
        </button>
        <p className='showCount'>Count {this.props.count}</p>
      </>
    );
  }
}

export default Counter;

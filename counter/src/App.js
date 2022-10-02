import "./App.css";
import { Component } from "react";
import Counter from "./components/counter";
import CountSettings from "./components/countSetting";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max: 0,
      min: 0,
      count: 0,
    };
  }

  setRange = (max, min, count) => {
    this.setState({
      max: Number(max),
      min: Number(min),
      count: Number(count),
    });
  };

  handleIncreament = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecreament = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  resetCount = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <>
        <Counter
          max={this.state.max}
          min={this.state.min}
          count={this.state.count}
          handleIncreament={this.handleIncreament}
          handleDecreament={this.handleDecreament}
        />
        <CountSettings setRange={this.setRange} resetCount={this.resetCount} />
      </>
    );
  }
}

export default App;

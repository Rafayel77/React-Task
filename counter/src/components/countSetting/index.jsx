import { Component } from "react";
import "../../App.css";
class CountSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      max: 0,
      min: 0,
      count: 0,
    };
  }

  handleMax = (e) => {
    this.setState({
      max: e.target.value,
    });
  };

  handleMin = (e) => {
    this.setState({
      min: e.target.value,
    });
  };

  handleCount = (e) => {
    this.setState({
      count: e.target.value,
    });
  };

  render() {
    return (
      <>
        <input
          className='inputMax'
          type='text'
          onChange={(e) => this.handleMax(e)}
        />
        <input
          className='inputMin'
          type='text'
          onChange={(e) => this.handleMin(e)}
        />
        <input
          className='inputCount'
          type='text'
          onChange={(e) => this.handleCount(e)}
        />
        <button
          className='okButton'
          onClick={() =>
            this.props.setRange(
              this.state.max,
              this.state.min,
              this.state.count
            )
          }
        >
          Ok
        </button>
        <button className='resetButton' onClick={this.props.resetCount}>
          Reset
        </button>
      </>
    );
  }
}

export default CountSettings;

import React, { Component } from "react";

class Cardinner extends Component {
  componentWillUnmount() {
    this.props.handleClose(this.props.item);
  }
  render() {
    return <h1>{this.props.item}</h1>;
  }
}

export default Cardinner;

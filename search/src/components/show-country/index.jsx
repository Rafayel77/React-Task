import React, { Component } from "react";

class ShowCountry extends Component {
  render() {
    return (
      <>
        <h4 className='show'>{this.props.country}</h4>
      </>
    );
  }
}

export default ShowCountry;

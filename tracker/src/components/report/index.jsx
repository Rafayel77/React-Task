import { Component } from "react";

class Report extends Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <p>
          Card number {item[0]} unmounted {item[1]} times
        </p>
      </div>
    );
  }
}

export default Report;

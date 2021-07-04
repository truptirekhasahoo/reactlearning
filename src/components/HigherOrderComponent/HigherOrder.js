import React, { Component } from "react";

const HigherOrder = (MyComponent,data) => {
  class HigherOrder extends Component {
    constructor(props) {
      super(props);
      this.state = {
          count:data.CountNumber
      };
    }

    updateState = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    render() {
      return (
        <MyComponent name={data.name} count={this.state.count} updateState={this.updateState} />
      );
    }
  }
  return HigherOrder;
};

export default HigherOrder;

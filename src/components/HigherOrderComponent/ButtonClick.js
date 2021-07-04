import React, { Component } from "react";
import HOC from './HigherOrder'

class ButtonClick extends Component {
  constructor() {
    super();
    // this.state = {
    //   count: 0,
    // };
  }
//   updateState = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3>Click the Button</h3>
            <button className="btn btn-primary" onClick={this.props.updateState}>{this.props.name}
              Clicked me {this.props.count} times
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HOC(ButtonClick,{
    CountNumber:100,
    name:"Button"
});

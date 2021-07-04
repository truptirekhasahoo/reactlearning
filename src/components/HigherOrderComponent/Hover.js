import React, { Component } from "react";
import HOC from './HigherOrder'

class Hover extends Component {
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
      <div className="container mt-5">
        <div className="row mt-3">
          <div className="col-sm-12">
            <h3>Hover on Text</h3>
            <h5 className="mt-3" onMouseOver={this.props.updateState}>{this.props.name}
              Hovered me {this.props.count} times
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default HOC(Hover,{
    CountNumber:10,
    name:"Text"
});

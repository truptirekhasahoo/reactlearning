import React, { Component } from "react";
import reactjs from "../../images/reactjs.jpg";

class ReactImage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <img src={reactjs} className="h-100" />
          </div>
          <div className="col-9 mt-5">
            <p>
              ReactJS is JavaScript library used for building reusable UI
              components. According to React official documentation, following
              is the definition − React is a library for building composable
              user interfaces. It encourages the creation of reusable UI
              components, which present data that changes over time.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactImage;

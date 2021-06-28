import React from "react";
import myContext from './Context'

class E extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h3>E component</h3>
        <myContext.Consumer>
          {(contextData) => {
            return (
              <div>
                <h5>Name:{contextData.name}</h5>
                <h5>city:{contextData.city}</h5>
              </div>
            );
          }}
        </myContext.Consumer>
      </div>
    );
  }
}
export default E;

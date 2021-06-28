import React from "react";

import B from "./B";
import myContext from './Context'

class A extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = {
      name: "A2n Academy",
      city: "Bangalore",
    };
  }
  render() {
    return (
      <div>
        <h3>A component</h3>
        <myContext.Provider value={this.state}>
          <B />
        </myContext.Provider>
      </div>
    );
  }
}
export default A;

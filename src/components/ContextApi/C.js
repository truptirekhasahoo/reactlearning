import React from "react";
import D from "./D";
import myContext from "./Context";
class C extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h3>C component</h3>
        <D />
      </div>
    );
  }
}
export default C;

import React from "react";
import E from "./E";
import myContext from "./Context";
class D extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h3>D component</h3>
        <E />
      </div>
    );
  }
}
export default D;

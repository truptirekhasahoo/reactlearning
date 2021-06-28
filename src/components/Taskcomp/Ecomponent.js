import React from "react";
import Acomponent from "./Acomponent";

class Ecomponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h2>Ecomponent</h2>
        <h4>name:{this.props.name}</h4>
        <h4>phone:{this.props.phone}</h4>
        <h4>email:{this.props.email}</h4>
      </div>
    );
  }
}
export default Ecomponent;

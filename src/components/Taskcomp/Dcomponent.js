import React from "react";
import Acomponent from "./Acomponent";
import Ecomponent from "./Ecomponent";

class Dcomponent extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   Nation: "India",
    // };
  }
  render() {
    return (
      <div>
        <h2>Dcomponent</h2>
        <h4>Name:{this.props.name}</h4>
        <h4>phone:{this.props.phone}</h4>
        <h4>email:{this.props.email}</h4>
        <Ecomponent {...this.props} />
      </div>
    );
  }
}
export default Dcomponent;

import React from "react";
import Ccomponent from "./Ccomponent";

class Bcomponent extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   city: "Bangalore",
    //   state: "karnataka"
    // };
  }
  render() {
    return (
      <div>
        <h2>Bcomponent</h2>
        
        <h4>name:{this.props.name}</h4>
        <h4>phone:{this.props.phone}</h4>
        <h4>email:{this.props.email}</h4>
        
        <Ccomponent {...this.props}/>
      </div>
    );
  }
}
export default Bcomponent;

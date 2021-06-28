import React from "react";
import Dcomponent from "./Dcomponent";
import Acomponent from "./Acomponent";

class Ccomponent extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   mobile: 444444,
    //   Location: "Sai baba temple",
    //   name: "Trupti",
    // };
  }
  render() {
    return (
      <div>
        <h2>Ccomponent</h2>
       
        <h4>Name:{this.props.name}</h4>
        <h4>phone:{this.props.phone}</h4>
        <h4>email:{this.props.email}</h4>

        <Dcomponent
          {...this.props}
        />
      </div>
    );
  }
}
export default Ccomponent;

import React from "react";
import Bcomponent from "./Bcomponent";

class Acomponent extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        name: "Trupti",
        phone: 55555,
        email: "trupti@gmail.com",
      },
    };
  }
  render() {
    return (
      <div>
        <h2>AComponent</h2>
        {/* <Bcomponent person={this.state}
          n={this.state.name}
          p={this.state.phone}
          e={this.state.email}
        /> */}

        <Bcomponent {...this.state.person} />
        {/* <Bcomponent name={this.state.nam /> */}
      </div>
    );
  }
}
export default Acomponent;

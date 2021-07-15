import React, { Component } from "react";
import myAction from "../../Action/action";

class Location extends Component {
  constructor() {
    super();
    this.state = {};
  }

  submitOnClick = () => {
    myAction(document.getElementById("location").value, "location");
  };

  render() {
    return (
      <div>
        Location:
        <select name="location" id="location">
          <option value="Bangalore">Bangalore</option>
          <option value="Delhi">Delhi</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Chennai">Chennai</option>
        </select>
        <button type="submit" onClick={this.submitOnClick}>
          Submit
        </button>
      </div>
    );
  }
}

export default Location;

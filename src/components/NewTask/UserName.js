import React, { Component } from "react";
import myAction from "../../Action/action";

class UserName extends Component {
  constructor() {
      super();
    this.state = {};
  }

  submitOnClick = () => {
    myAction(document.getElementById('textUserName').value, "username");
  };

  render() {
    return (
      <div>
        Name: <input type="text" id="textUserName" />
        <button type="submit" onClick={this.submitOnClick}>
          Submit
        </button>
      </div>
    );
  }
}

export default UserName;

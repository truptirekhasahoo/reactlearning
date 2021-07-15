import React, { Component } from "react";
import UserName from "./UserName";
import Location from "./Location";
import mystore from "../../Store/store";

class UserNameLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      location: "",
    };
  }
  componentDidMount() {
    mystore.subscribe(() => {
      this.setState({
        username: mystore.getState().myReducer.username,
      });
      this.setState({
        location: mystore.getState().myReducer.location,
      });
    });
  }
  render() {
    console.log(this.state.username);
    return (
      <div>
        <UserName />
        <Location />

        <div>
          User Name: {this.state.username}
          Location: {this.state.location}
        </div>
      </div>
    );
  }
}

export default UserNameLocation;

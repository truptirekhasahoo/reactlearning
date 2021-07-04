import React, { Component } from "react";
import MyContext from "../ContextApi/Context";
import Address from "./Address";
import Company from "./Company";

class UserDetails extends Component {
  render() {
    return (
      <div class="p-3 bg-light">
        <MyContext.Consumer>
          {(userData) => {
            return (
              <div class="p-3 bg-light">
                <h4>User Details</h4>
                <p>ID: {userData.id}</p>
                <p>Name: {userData.name}</p>
                <p>User Name: {userData.id}</p>
                <p>ID: {userData.id}</p>
              </div>
            );
          }}
        </MyContext.Consumer>
        <Address />
        <Company />
      </div>
    );
  }
}

export default UserDetails;

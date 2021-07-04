import React, { Component } from "react";
import MyContext from "../ContextApi/Context";

class Address extends Component {
  render() {
    return (
      // <div class="container">
      //   <div class="row mx-md-n5">
      //     <h4>Address</h4>
      //     <div class="col px-md-5">
      //       <div class="p-3 border bg-light">
      //         <MyContext.Consumer>
      //           {(userData) => {
      //             return (
      //               <div>
      //                 <p>{userData.address.street}</p>
      //                 <p>{userData.address.suite}</p>
      //                 <p>{userData.address.city}</p>
      //                 <p>{userData.address.zipcode}</p>
      //               </div>
      //             );
      //           }}
      //         </MyContext.Consumer>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div class="p-3 bg-light">
        <h4>Address</h4>
        <MyContext.Consumer>
          {(userData) => {
            return (
              <div>
                <p>{userData.address.street}</p>
                <p>{userData.address.suite}</p>
                <p>{userData.address.city}</p>
                <p>{userData.address.zipcode}</p>
              </div>
            );
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Address;

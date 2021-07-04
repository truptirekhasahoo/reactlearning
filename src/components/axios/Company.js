import React, { Component } from "react";
import MyContext from "../ContextApi/Context";

class Company extends Component {
  render() {
    return (
      //   <div class="container">
      //     <div class="row mx-md-n5">
      //       <h4>Company</h4>
      //       <div class="col px-md-5">
      //         <div class="p-3 border bg-light">
      //           <MyContext.Consumer>
      //             {(userData) => {
      //               return (
      //                 <div>
      //                   <p>{userData.company.name}</p>
      //                   <p>{userData.company.catchPhrase}</p>
      //                   <p>{userData.company.bs}</p>
      //                 </div>
      //               );
      //             }}
      //           </MyContext.Consumer>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      <div class="p-3 bg-light">
        <h4>Company</h4>
        <MyContext.Consumer>
          {(userData) => {
            return (
              <div>
                <p>{userData.company.name}</p>
                <p>{userData.company.catchPhrase}</p>
                <p>{userData.company.bs}</p>
              </div>
            );
          }}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Company;

import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
// import info  from './PersonInformation'
import information from "./PersonInformation";

class PersonComp extends React.Component {
    constructor() {
      super()
      this.state ={ info: information} 
    }
    // changeColor = () => {
    //   this.setState({id: 2});
    // }
  
    render() {
      return (
        <div>
          <h1>Information</h1>
           {/* <p>{this.state.name}<br /></p> 
          {this.state.phone}<br />
          {this.state.email}<br /> */}
          {this.state.info.name}<br />
          {this.state.info.email}<br />
          {this.state.info.contactDetail.mobile}<br />
          {this.state.info.contactDetail.phone}<br />
          {this.state.info.address.Hno}<br />
          {this.state.info.address.city}<br />
          {this.state.info.address.state}<br />
          {this.state.info.Dob}<br />

           {/* <p>
             My name {this.state.name}<br />
            
            {this.state.phone}<br />
            Email {this.state.email}
          </p>  */}
          {/* <button
            type="button" className="btn btn-primary"
            onClick={this.changeColor}
          >Change color</button> */}
        </div>
      );
    }
  }
  export default PersonComp
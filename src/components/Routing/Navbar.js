import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-dark bg-dark">
            <a href="" className="navbar-brand">React Routing Application</a> 

            <ul className="nav">
              <li className="nav-item"><Link to="/" className="nav-link text-white" > Home</Link></li>
              <li className="nav-item"><Link to="/React" className="nav-link text-white">React</Link></li>
              <li className="nav-item"><Link to="/Angular" className="nav-link text-white">Angular</Link> </li>
              <li className="nav-item"><Link to="/Bootstrap" className="nav-link text-white">Bootstrap</Link> </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default Navbar;
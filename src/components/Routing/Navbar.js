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
              <li className="nav-item"><Link to="/" className="nav-link text-white" >Home</Link></li>
              {/* <li className="nav-item"><Link to="/React" className="nav-link text-white">React</Link></li> */}
              <li className="nav-item"><Link to="/lcm" className="nav-link text-white">Lifecyclemethod</Link></li>
              <li className="nav-item"><Link to="/User" className="nav-link text-white">User</Link> </li>
              {/* <li className="nav-item"><Link to="/Angular" className="nav-link text-white">Angular</Link> </li> */}
              {/* <li className="nav-item"><Link to="/Bootstrap" className="nav-link text-white">Bootstrap</Link> </li> */}
              <li className="nav-item"><Link to="/Post" className="nav-link text-white">Post</Link> </li>
              <li className="nav-item"><Link to="/HigherOrder" className="nav-link text-white">Higher Order Component</Link> </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default Navbar;

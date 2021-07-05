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
            <a href="" className="navbar-brand">
              React Redux Application
            </a>

            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/LoginForm" className="nav-link text-white">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/RegisterForm" className="nav-link text-white">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/User" className="nav-link text-white">
                  User
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link to="/Post" className="nav-link text-white">
                  Post
                </Link>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default Navbar;

import React from "react";

export default class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    };
  }
  printData = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h3>Registion Form</h3>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  onChange={(event) => {
                    this.setState({
                      name: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Id"
                  onChange={(event) => {
                    this.setState({
                      email: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="form-group mt-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => {
                    this.setState({
                      password: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="form-group mt-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  onChange={(event) => {
                    this.setState({
                      confirmPassword: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  onChange={(event) => {
                    this.setState({
                      phone: event.target.value,
                    });
                  }}
                />
              </div>

              <div className="form-group">
                <input
                  type="button"
                  className="btn mt-3 px-5"
                  value="Register"
                  onClick={this.printData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

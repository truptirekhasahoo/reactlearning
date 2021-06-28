import React from "react";

export default class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
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
                <h3>Login Form</h3>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="EnterName"
                  onChange={(event) => {
                    this.setState({
                      name: event.target.value,
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
              <div className="form-group">
                <input
                  type="button"
                  className="btn mt-3 px-5"
                  value="Login"
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

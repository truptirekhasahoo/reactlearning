import React from "react";

import axios from "axios";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        this.setState({
          userData: response.data,
        })
      )
      .catch((error) => {
        // alert("something went wrong");
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 className="text-warning">User Data</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>city</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userData.map((data, index) => (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.address.city}</td>
                  <td>{data.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default User;

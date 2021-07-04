import React from "react";
import UserDetails from './UserDetails'
import MyContext from '../ContextApi/Context'

import axios from "axios";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      userSelected: -1
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
  userSelected = (selectionIndex) => {
    this.setState({ userSelected: selectionIndex });
  };
  render() {
    return (
      <div>
        {!this.state.userSelected ||
          this.state.userSelected < 0 &&
            // show all users
            <div className="container">
              <div className="row">
                <h3 className="text-warning">User Data</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">City</th>
                      <th scope="col">Company</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.userData.map((data, index) => (
                      <tr scope="row">
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.address.city}</td>
                        <td>{data.company.name}</td>
                        <td>
                          <button onClick={() => this.userSelected(index)}>
                            Detail
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          }

          {this.state.userSelected >= 0 &&
            <MyContext.Provider value={this.state.userData[this.state.userSelected]}>
              <UserDetails />
            </MyContext.Provider>
          }
      </div>
    );
  }
}

export default User;

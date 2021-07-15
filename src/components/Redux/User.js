import React, { Component } from "react";
import mystore from "../../Store/store";
import { connect } from "react-redux";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    this.setState({
      users: mystore.getState().myReducer.user,
    });
  }
  render() {
    console.log(this.state.users);
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {this.state.users.length > 0 ? (
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((element, index) => {
                    return (
                      <tr>
                        <td>{element.username}</td>
                        <td>{element.email}</td>
                        <td>{element.address.city}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <h3 className="text-warning">Data is not Avaliable</h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = (storeData) => {
//   return {
//     user: storeData.myReducer.user,
//   };
// };
// export default connect(mapStateToProps, null)(User);
export default User;
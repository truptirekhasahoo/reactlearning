import React, { Component } from "react";
import axios from "axios";
import myAction from "../../Action/action";

class Home extends Component {
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (res) => {
        this.setState({
          users: res.data,
        });
        myAction(res.data);
      },
      (error) => {
        alert("something went wrong");
      }
    );
    axios.get("https://jsonplaceholder.typicode.com/posts").then(
      (res) => {
        this.setState({
          posts: res.data,
        });
        myAction(res.data);
      },
      (error) => {
        alert("something went wrong");
      }
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  render() {
    return (
      <div>
        <h2>Home component</h2>
      </div>
    );
  }
}
export default Home;

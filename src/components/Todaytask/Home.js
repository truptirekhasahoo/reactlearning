import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./HomePage";
import RegisterForm from "./RegisterForm";
import User from "./User";
import Post from "./Post";
import LoginForm from "./LoginForm";

import axios from "axios";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({
          users: response.data,
        });
        console.log(this.state);
      })
      .catch((error) => {
        // alert("something went wrong");
        console.log(error);
      });
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          posts: response.data,
        });
        console.log(this.state);
      })
      .catch((error) => {
        // alert("something went wrong");
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/LoginForm" component={LoginForm} />
            <Route path="/RegisterForm" component={RegisterForm} />
            <Route path="/User" component={User} />
            <Route path="/Post" component={Post} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default Home;

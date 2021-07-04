import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
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
      <div class="container">
        {this.state.userData.map((data, index) => {
          return <div class="card">
            <div class="card-card bg-light">
              <h4 class="card-title">{data.id}</h4>
              <p class="card-text">{data.body}</p>
            </div>
          </div>;
        })}
      </div>
    );
  }
}

export default Post;

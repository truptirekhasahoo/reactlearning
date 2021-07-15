import React, { component, Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.setState({
      posts: this.props.post,
    });
  }
  render() {
    console.log(this.state.posts);
    return (
      <div>
        <h3>Post Data</h3>
        {this.state.posts.map((data, index) => {
          return <div class="card col-sm-3">
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
const mapStateToProps = (storeData) => {
  return {
    post: storeData.myReducer.post,
  };
};
export default connect(mapStateToProps, null)(Post);

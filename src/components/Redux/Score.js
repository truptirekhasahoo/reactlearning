import React, { Component } from "react";
import { connect } from "react-redux";
import mystore from "../../Store/store";
import myAction from "../../Action/action";

class Score extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { scorevalue: "" }
  }

  handleChange({ target }) {
    myAction(document.getElementById("scorevalue").value, "scorevalue");
  }
  componentDidMount() {
    mystore.subscribe(() => {
      this.setState({
        scorevalue: mystore.getState().myReducer.scorevalue,
      });
     
    });
  }

  render() {
    return (
      <div>
        <h1>Score:</h1>{" "}
        <input
          type="text"
          id="scorevalue"
          onChange={this.handleChange}
        />
        <p>{this.state.scorevalue}</p>
      </div>
    );
  }
}

export default Score;

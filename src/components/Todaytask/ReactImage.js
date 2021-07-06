import React, { Component } from "react";
import reactjs from "../../images/reactjs.png";

class ReactImage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 mt-1">
            <img src={reactjs} className="img-thumbnail" />
          </div>
          <div className="col-9 mt-1">
            <p>
              React (also known as React.js or ReactJS) is a free and
              open-source front-end JavaScript library[3] for building user
              interfaces or UI components. It is maintained by Facebook and a
              community of individual developers and companies.[4][5][6] React
              can be used as a base in the development of single-page or mobile
              applications. However, React is only concerned with state
              management and rendering that state to the DOM, so creating React
              applications usually requires the use of additional libraries for
              routing, as well as certain client-side functionality.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactImage;

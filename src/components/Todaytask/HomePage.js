import React from "react";
import { BrowserRouter } from "react-router-dom";
import MyCarousel from "./MyCarousel";
import ReactImage from "./ReactImage";
import AngularImage from './AngularImage'
import JavascriptImage from './JavascriptImage'
import MyCard from "./MyCard";
import MyFooter from "./Footer";

class Homepage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 mt-3">
            <MyCarousel />
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row">
          <div>
            <ReactImage />
          </div>
        </div>
        <div className="row">
          <div>
            <AngularImage />
          </div>
        </div>
        <div className="row">
          <div>
            <JavascriptImage />
          </div>
        </div>
        <div className="row">
          <div>
            <MyCard />
          </div>
        </div>
        <div className="row">
          <div>
            <MyFooter />
          </div>
        </div>
      </div>
    );
  }
}
export default Homepage;

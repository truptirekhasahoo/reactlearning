import React, { Component } from "react";
import angularjs from "../../images/AngularJS.png";

class AngularImage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-9 mt-1">
            <p>
              AngularJS is a JavaScript-based open-source front-end web
              framework for developing single-page applications. It is
              maintained mainly by Google and a community of individuals and
              corporations. It aims to simplify both the development and the
              testing of such applications by providing a framework for
              client-side model–view–controller (MVC) and model–view–viewmodel
              (MVVM) architectures, along with components commonly used in web
              applications and progressive web applications. AngularJS is used
              as the frontend of the MEAN stack, consisting of MongoDB database,
              Express.js web application server framework, AngularJS itself (or
              Angular), and Node.js server runtime environment. The AngularJS
              framework is on Long Term Support ("LTS") until December 31,
              2021. After that date Google will no longer update AngularJS
              to fix security, browser compatibility, or jQuery issues.
              The Angular team recommends upgrading to Angular (v2+) as the best
              path forward, but they also provided some other options.
            </p>
          </div>
          <div className="col-3">
            <img src={angularjs} className="img-thumbnail" />
          </div>
        </div>
      </div>
    );
  }
}

export default AngularImage;

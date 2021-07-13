import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import mystore from "./Store/store";
//import MyFirstcomp from './components/MyFirstcomp';
//import ClassComp from './components/ClassComp'

//ReactDOM.render(<MyFirstcomp />,document.getElementById('h1'));
//ReactDOM.render(<ClassComp />,document.getElementById('h1'));
ReactDOM.render(
  <Provider store={mystore}>
    <App />
  </Provider>,
  // <App />
  document.getElementById("root")
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import {provider} from 'react-redux'

// import mystore from './Store/store';
//import MyFirstcomp from './components/MyFirstcomp';
//import ClassComp from './components/ClassComp'


//ReactDOM.render(<MyFirstcomp />,document.getElementById('h1'));
//ReactDOM.render(<ClassComp />,document.getElementById('h1'));
ReactDOM.render(
    // <provider myStore={mystore}>
    //  <App />
    // </provider>
    <App />
,document.getElementById('root'))

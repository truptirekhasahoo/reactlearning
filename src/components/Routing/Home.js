import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter,Switch,Route} from "react-router-dom";
import Homepage from './Homepage'
// import Reactjs from './React'
import Post from '../axios/Post'

import Angular from "./Angular";
import Bootstrap from "./Bootstrap"
import Lifecyclemethod from "../Lifecyclemethod/Lifecyclemethod";
import User from '../Redux/User'
import post from '../Redux/Post'
// import HigherOrder from '../HigherOrderComponent/HigherOrder'
// import ButtonClick from '../HigherOrderComponent/ButtonClick'
import HigherOrder from '../HigherOrderComponent/Home'
import HomeRedux from '../Redux/Home'



class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <BrowserRouter> 
          <Navbar />
          <Switch>
            {/* <Route exact path="/" component={Homepage} /> */}
            <Route exact path="/" component={HomeRedux} />
            {/* <Route path="/react" component={Reactjs}/> */}
            <Route path="/lcm" component={Lifecyclemethod}/>
            {/* <Route path="/Angular" component={Angular}/> */}
            <Route path="/User" component={User}/>
            <Route path="/Post" component={Post}/>
            <Route path="/HigherOrder" component={HigherOrder}/>
            {/* <Route path="/Bootstrap" component={Bootstrap}/> */}
          </Switch>
        </BrowserRouter>


        </div>
      
    );
  }
}
export default Home;

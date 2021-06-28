import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter,Switch,Route} from "react-router-dom";
import Homepage from './Homepage'
import Reactjs from './React'
import Angular from "./Angular";
import Bootstrap from "./Bootstrap"


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
            <Route exact path="/" component={Homepage} />
            <Route path="/react" component={Reactjs}/>
            <Route path="/Angular" component={Angular}/>
            <Route path="/Bootstrap" component={Bootstrap}/>
          </Switch>
        </BrowserRouter>


        </div>
      
    );
  }
}
export default Home;

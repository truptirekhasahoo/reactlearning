import React from 'react'
import "./FooterComp/node_modules/bootstrap/dist/css/bootstrap.min.css";
import card1 from "../images/card.png";
import "./MainComp.css";

class MainComp extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div class="row myBody">
          <div class="card myCard">
            <img src={card1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Card 1
              </p>
            </div>
          </div>
          <div class="card myCard">
          <img src={card1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Card 2
              </p>
            </div>
          </div>
          <div class="card myCard">
          <img src={card1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Card 3
              </p>
            </div>
          </div>
        </div>

        )
    }
}
export default MainComp
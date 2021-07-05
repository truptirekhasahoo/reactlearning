import React, { Component } from "react";
import chicago from "../../images/chicago.jpg";
import ny from "../../images/ny.jpg";
import la from "../../images/la.jpg";
import { Carousel } from "react-bootstrap";

class MyCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={chicago} alt="Chikago" />
          {/* <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ny} alt="New York" />
          {/* <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={la} alt="Los Angels" />
          {/* <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p>
  </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default MyCarousel;

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImg_01 from "../../assets/image/carousel/background-carousel.jpg";
import CarouselImg_02 from "../../assets/image/carousel/background-carousel.jpg";
import CarouselImg_03 from "../../assets/image/carousel/background-carousel.jpg";

import "./home.css"

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={CarouselImg_01} alt="First slide" width="100%"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={CarouselImg_02} alt="Second slide" width="100%" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={CarouselImg_03} alt="Thirst slide" width="100%" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;

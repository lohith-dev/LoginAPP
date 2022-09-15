import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import c3 from './images/c3.jpg'
import Net from './images/Net.jpg'
function Carsol() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c3}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Net}
          alt="Second slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carsol;
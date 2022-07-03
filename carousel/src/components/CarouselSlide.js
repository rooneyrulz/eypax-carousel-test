import React from "react";
import { Carousel } from "react-bootstrap";
import * as UUID from "uuid";

const CarouselSlide = (props) => (
  <Carousel fade className='my-4' interval={props?.infinite ? 4000 : null}>
    {props.data?.map((slide) => (
      <Carousel.Item key={UUID.v4()}>
        <img className='d-block w-100' src={slide?.image} alt='First slide' />
        <Carousel.Caption>
          <h3>{slide?.title}</h3>
          <p>{slide?.subTitle}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default CarouselSlide;

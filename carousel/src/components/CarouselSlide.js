import React from "react";
import axios from "axios";
import { Carousel, Button } from "react-bootstrap";
import { postSlides } from "../services"

const CarouselSlide = (props) => {
  const [message, setMessage] = React.useState(null);

  const onHandleSave = async () => {
    try {
      const res = await postSlides(props.data);
      if (res?.status) {
        setMessage(res?.message);
      }
    } catch (error) {
      setMessage(error?.response?.data ?? "try again!");
    }

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  return (
    <div>
      <Carousel fade className='my-4' interval={props?.infinite ? 4000 : null}>
        {props.data?.map((slide) => (
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide?.image}
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>{slide?.title}</h3>
              <p>{slide?.subTitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      {message ? <p style={{ color: "green" }}>{message}</p> : null}
      <Button size='lg' onClick={(e) => onHandleSave()}>
        Save Slides
      </Button>
    </div>
  );
};

export default CarouselSlide;

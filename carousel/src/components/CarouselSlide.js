import React from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";

const BASE_URI = "http://localhost:3600";

const CarouselSlide = (props) => {
  const [message, setMessage] = React.useState(null);

  const onHandleSave = async () => {
    try {
      const { data } = await axios.post(`${BASE_URI}/api/carousel`, props.data);
      if (data?.status) {
        setMessage(data?.message);
      }
    } catch (error) {
      setMessage(error?.response?.data ?? "try again!");
    }

    setTimeout(() => {
      setMessage(null)
    }, 3000)
  };

  return (
    <div>
      <Carousel autoPlay infiniteLoop={props?.infinite}>
        {props?.data?.map((c) => (
          <div key={c.uuid}>
            <img src={c?.image} alt="carousel" />
            <h1>{c.title}</h1>
            <p>{c.subTitle}</p>
          </div>
        ))}
      </Carousel>
      {message ? <p style={{ color: 'green' }}>{message}</p> : null}
      <button onClick={(e) => onHandleSave()}>Save Slides</button>
    </div>
  );
};

export default CarouselSlide;

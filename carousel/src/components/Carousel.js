import React from "react";
import CarouselSlide from "./CarouselSlide";
import { fetchSlides } from "../services";

const Carousel = (props) => {
  const [slides, setSlides] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchSlides(props.slides)
      .then((res) => {
        setSlides([...res?.data]);
        setError(null);
      })
      .catch((err) => {
        setError(err?.response?.data ?? "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [props.slides]);

  
  return (
    <div className='my-4'>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <CarouselSlide
          slides={props.slides}
          infinite={props.infinite}
          data={slides}
        />
      )}
    </div>
  );
};

export default Carousel;

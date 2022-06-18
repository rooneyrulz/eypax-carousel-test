import React from "react";
import axios from "axios";
import CarouselSlide from "./CarouselSlide";

const BASE_URI = "http://localhost:3600";

const Carousel = (props) => {
  const [slides, setSlides] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const fetchSlides = React.useCallback(() => {
    return axios
      .get(`${BASE_URI}/api/carousel?slides=${props?.slides}`)
      .then((res) => {
        setSlides([...res?.data?.data]);
        setError(null);
      })
      .catch((err) => {
        setError(err?.response?.data ?? "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [props?.slides]);

  React.useEffect(() => {
    fetchSlides();
  }, [fetchSlides]);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <CarouselSlide slides={props.slides} infinite={props.infinite} data={slides} />
      )}
    </div>
  );
};

export default Carousel;

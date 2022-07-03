import React from "react";
import { Form, Button } from "react-bootstrap";
import CarouselSlide from "./CarouselSlide";
import { fetchSlides, postSlides } from "../services";

const Carousel = (props) => {
  const [loading, setLoading] = React.useState(true);
  const [slides, setSlides] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const [count, setCount] = React.useState(props?.slides ?? 1);

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

  const onHandleChange = e => {
    setCount(e.target.value)
  }

  React.useEffect(() => {
    fetchSlides(count)
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
  }, [count]);

  return (
    <div className='my-4'>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          <CarouselSlide
            slides={props.slides}
            infinite={props.infinite}
            data={slides}
          />
          {message ? <p style={{ color: "green" }}>{message}</p> : null}
            <Button className="mr-4" onClick={(e) => onHandleSave()}>
              Save Slides
            </Button>
            <Form.Select className="w-20 d-inline-block" value={count} aria-label='Default select example' onChange={e => onHandleChange(e)}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </Form.Select>
        </>
      )}
    </div>
  );
};

export default Carousel;

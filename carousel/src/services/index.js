import axios from "axios";

const BASE_URI = "http://localhost:3600";

export const fetchSlides = (slides) => {
  return axios
    .get(`${BASE_URI}/api/carousel?slides=${slides}`)
    .then((res) => res.data)
    .catch((err) => err?.response?.data || "Something went wrong!");
};

export const postSlides = (payload) => {
  return axios
    .post(`${BASE_URI}/api/carousel`, payload)
    .then((res) => res.data)
    .catch((err) => err?.response?.data || "Something went wrong!");
};

const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const cors = require("cors");
const uuid = require("uuid");

const Carousel = require("./models/carousel");

const app = express();

dotenv.config({ path: "./config/config.env" });
require("./config/db")();

if (process.env.NODE_ENV === "development") app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const carousels = [
  {
    uuid: uuid.v4(),
    image: "https://source.unsplash.com/600x300/?city",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    uuid: uuid.v4(),
    image: "https://source.unsplash.com/600x300/?fruit",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    uuid: uuid.v4(),
    image: "https://source.unsplash.com/600x300/?night",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    uuid: uuid.v4(),
    image: "https://source.unsplash.com/600x300/?water",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    uuid: uuid.v4(),
    image: "https://source.unsplash.com/600x300/?people",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    uuid: uuid.v4(),
    image: "https://source.unsplash.com/600x300/?nature",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    uuid: uuid.v4(),
    image: "https://source.unsplash.com/600x300/?sports",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    uuid: uuid.v4(),
    image: "https://source.unsplash.com/600x300",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    uuid: uuid.v4(),
    image: "https://source.unsplash.com/600x300",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    uuid: uuid.v4(),
    image: "https://source.unsplash.com/600x300",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
];

app.get("/api/carousel", (req, res, next) => {
  try {
    if (req.query?.slides) {
      return res.status(200).json({
        status: true,
        data: carousels?.slice(0, req.query.slides),
      });
    }
    return res.status(200).json({
      status: true,
      data: carousels,
    });
  } catch (error) {
    return res.status().json({
      status: false,
      message: error?.message ?? "Something went wrong!",
    });
  }
});

app.post("/api/carousel", async (req, res, next) => {
  try {
    req.body?.forEach(async (carousel) => {
      let newCarousel = await Carousel.create({ ...carousel });
    });
    return res.status(201).json({
      status: true,
      message: "data saved!"
    });
  } catch (error) {
    return res.status().json({
      status: false,
      message: error?.message ?? "Something went wrong!",
    });
  }
});

app.listen(process.env.PORT || 3600, () =>
  console.log(`server running on port ${process.env.PORT || 3600}!`)
);

const router = require("express").Router();
const Carousel = require("../models/carousel");

const carousels = [
  {
    image: "https://source.unsplash.com/600x300/?city",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    image: "https://source.unsplash.com/600x300/?fruit",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    image: "https://source.unsplash.com/600x300/?night",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    image: "https://source.unsplash.com/600x300/?water",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    image: "https://source.unsplash.com/600x300/?people",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    image: "https://source.unsplash.com/600x300/?nature",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    image: "https://source.unsplash.com/600x300/?sports",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    image: "https://source.unsplash.com/600x300",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    image: "https://source.unsplash.com/600x300",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
  {
    image: "https://source.unsplash.com/600x300",
    title: "Carousel Title",
    subTitle: "carousel sub title",
  },
];

router
  .route("")
  .get((req, res, next) => {
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
  })
  .post("", async (req, res, next) => {
    try {
      req.body?.forEach(async (carousel) => {
        await Carousel.create({ ...carousel });
      });
      return res.status(201).json({
        status: true,
        message: "data saved!",
      });
    } catch (error) {
      return res.status().json({
        status: false,
        message: error?.message ?? "Something went wrong!",
      });
    }
  });

module.exports = router;

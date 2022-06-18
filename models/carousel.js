const mongoose = require("mongoose");

const carouselSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, { timestamps: { createAt: "created_at", updatedAt: "updated_at" } });

module.exports = mongoose.model("Carousel", carouselSchema)
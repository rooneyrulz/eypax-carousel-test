const mongoose = require("mongoose");

module.exports = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("mongo connection successful..!");
  } catch (error) {
    console.log("mongo connection failed..!");
    process.exit(1);
  }
};

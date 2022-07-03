const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const cors = require("cors");
require("./config/db")();

const app = express();

dotenv.config({ path: "./config/config.env" });

if (process.env.NODE_ENV === "development") app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/carousel", require("./routes/carousel"));

app.listen(process.env.PORT || 3600, () =>
  console.log(`server running on port ${process.env.PORT || 3600}!`)
);

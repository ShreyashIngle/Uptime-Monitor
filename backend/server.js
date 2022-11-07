const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cron = require("node-cron");
const app = express();
const connectDB = require("./config/db");

connectDB(process.env.MONGO_URI);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

//CONNECTING TO THE DATABASE
mongoose.connection.once("open", () => {
  console.log("connected to MongoDB");
  app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

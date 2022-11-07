const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cron = require("node-cron");
const app = express();
const connectDB = require("./config/db");
const https = require("https");
const History = require("./models/historyModel");
connectDB(process.env.MONGO_URI);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

const makeTheRequest = () => {
  https.get("https://chathuraperera.netlify.app/", async (res) => {
    console.log("res statusCode", res.statusCode);
    await History.create({
      statusCode: res.statusCode,
    });
  });
};

//Schedule tasks to be run on the server.
cron.schedule("* * * * *", function () {
  console.log("running a task every minute");
  makeTheRequest();
});

//CONNECTING TO THE DATABASE
mongoose.connection.once("open", () => {
  console.log("connected to MongoDB");
  app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

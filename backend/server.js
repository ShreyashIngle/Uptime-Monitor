const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cron = require("node-cron");
const path = require("path");
const app = express();
const connectDB = require("./config/db");
const https = require("https");
const History = require("./models/historyModel");
connectDB(process.env.MONGO_URI);
const axios = require("axios");
const monitorRoutes = require("./routes/monitorRoutes");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

const makeTheRequest = async () => {
  await axios
    .get("https://chathuraperera.netlify.app/")
    .then(async (res) => {
      console.log("res.status", res.status);
      await History.create({
        statusCode: res.statusCode,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

// Schedule tasks to be run on the server.
// cron.schedule("* * * * *", function () {
//   console.log("running a task every minute");
//   makeTheRequest();
// });

// Routes
app.get("/api/v1/monitor", monitorRoutes);

app.get("/", (req, res) => {
  res.send("<div>Hello world</div>");
});

app.get("/uptime-check", async (req, res) => {
  await makeTheRequest();
  console.log("uptime-check success");
  res.send("<div>Request Made</div>");
});

//CONNECTING TO THE DATABASE
mongoose.connection.once("open", () => {
  console.log("connected to MongoDB");
  app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

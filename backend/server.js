const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const connectDB = require("./config/db");
connectDB(process.env.MONGO_URI);
const cors = require("cors");

//Imported routes
const monitorRoutes = require("./routes/monitorRoutes");
const authRoutes = require("./routes/authRoutes");
const incidentRoutes = require("./routes/incidentRoutes");
const checkRoutes = require("./routes/checkRoutes");
const memberRoutes = require("./routes/memberRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

//Middleware
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

//Cors Configurations
app.use(cors({ origin: ["http://127.0.0.1:5173", "http://localhost:5173"], credentials: true }));
app.use(cookieParser());

// Routes
app.use("/api/v1", authRoutes);
app.use("/api/v1/monitor", monitorRoutes);
app.use("/api/v1/incident", incidentRoutes);
app.use("/api/v1/check", checkRoutes);
app.use("/api/v1/member", memberRoutes);
app.use("/api/v1/notification", notificationRoutes);

app.get("/", (req, res) => {
  res.send("<div>Hello world</div>");
});

//CONNECTING TO THE DATABASE
mongoose.connection.once("open", () => {
  console.log("connected to MongoDB");
  app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

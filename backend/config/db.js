const mongoose = require("mongoose");

const connectDB = (URI) => {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};


module.exports = connectDB
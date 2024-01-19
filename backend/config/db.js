const mongoose = require("mongoose");

const connectDB = (URI) => {
  mongoose.connect('mongodb+srv://pratham:pratham902@pratham.s4wuhkp.mongodb.net/shreyash', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};


module.exports = connectDB
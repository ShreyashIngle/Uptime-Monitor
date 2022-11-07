const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
  {
    statusCode: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("History", historySchema);

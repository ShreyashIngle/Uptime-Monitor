const mongoose = require("mongoose");
const { Schema } = mongoose;

const outageSchema = new Schema(
  {
    monitorId: {
      type: Schema.Types.ObjectId,
      ref: "Monitor",
      required: true,
    },
    statusCode: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("History", outageSchema);

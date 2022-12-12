const mongoose = require("mongoose");
const { Schema } = mongoose;

const incidentSchema = new Schema(
  {
    monitorId: {
      type: Schema.Types.ObjectId,
      ref: "Monitor",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    statusCode: {
      type: Number,
    },
    //How long incident had been activated
    length: {
      type: String,
    },
    acknowledged: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Incident", incidentSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const MonitorSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    monitored: {
      type: Boolean,
      default: true,
    },
    alerts: {
      emails: {
        type: Array,
      },
      telegram: {
        type: Array,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Monitor", MonitorSchema);

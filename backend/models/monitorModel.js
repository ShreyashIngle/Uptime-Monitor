const mongoose = require("mongoose");
const { Schema } = mongoose;

const MonitorSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    team: {
      type: Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    monitored: {
      type: Boolean,
      default: true,
    },
    lastIncidentDate: {
      type: String,
      default: Date.now(),
    },
    alertsTriggeredOn: {
      type: String,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Monitor", MonitorSchema);
/*
Alert triggers
1 = Becomes unavailable 
2 = SSL Expires
3 = Doesn't contain a keyword
*/

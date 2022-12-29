const mongoose = require("mongoose");
const { Schema } = mongoose;

const TeamSchema = new mongoose.Schema(
  {
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    members: [
      {
        email: String,
        accepted: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Team", TeamSchema);

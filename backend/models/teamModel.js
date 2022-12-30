const mongoose = require("mongoose");
const { Schema } = mongoose;

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "Your Team",
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    members: [
      {
        email: {
          type: String,
          unique: true,
        },
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

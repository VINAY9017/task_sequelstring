const mongoose = require("mongoose");
const collection = require("../Config/Collection");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model(collection.user, userSchema);

module.exports = userModel;

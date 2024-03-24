const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema;
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  {
    timestamp: true, //timestamp every time something is saved
  }
);

module.exports = mongoose.model("User", userSchema);

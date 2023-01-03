const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    rquired: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  avatar: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
  },
  gender: {
    type: String,
    default: "male",
  },
});

module.exports = mongoose.model("user", User);

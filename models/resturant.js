const mongoose = require("mongoose");

const resturantScheme = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String, 
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("resturants", resturantScheme);

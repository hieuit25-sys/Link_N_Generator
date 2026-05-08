const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },

  clicks: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Link", linkSchema);
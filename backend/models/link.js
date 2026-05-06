const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  url: String,
  clicks: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Link", linkSchema);
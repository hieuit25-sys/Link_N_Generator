const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  ip: String,
  count: Number,
  date: String // yyyy-mm-dd (VN time)
});

module.exports = mongoose.model("Log", logSchema);
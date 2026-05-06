const Log = require("../models/Log");

const getVNDate = () => {
  const now = new Date();
  return now.toLocaleDateString("en-CA", { timeZone: "Asia/Ho_Chi_Minh" });
};

module.exports = async (req, res, next) => {
  const ip = req.ip;
  const today = getVNDate();

  let log = await Log.findOne({ ip, date: today });

  if (!log) {
    log = await Log.create({ ip, date: today, count: 1 });
    return next();
  }

  if (log.count >= 3) {
    return res.json({ success: false, message: "Ban da het luot hom nay" });
  }

  log.count++;
  await log.save();
  next();
};
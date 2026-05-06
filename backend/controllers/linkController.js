const Link = require("../models/Link");

let currentIndex = 0;

// === USER ===
exports.getLink = async (req, res) => {
  const links = await Link.find();

  if (links.length === 0) {
    return res.json({ success: false, message: "Het link" });
  }

  const link = links[currentIndex];

  // tăng click
  link.clicks++;
  await link.save();

  // tăng index
  currentIndex = (currentIndex + 1) % links.length;

  res.json({
    success: true,
    url: link.url
  });
};

// === ADMIN ===
// thêm link
exports.addLink = async (req, res) => {
  const { url } = req.body;

  const newLink = await Link.create({
    url,
    clicks: 0
  });

  res.json(newLink);
};

// LẤY DANH SÁCH
exports.getAllLinks = async (req, res) => {
  const links = await Link.find().sort({ createdAt: -1 });
  res.json(links);
};

// XOÁ LINK
exports.deleteLink = async (req, res) => {
  await Link.findByIdAndDelete(req.params.id);
  res.json({ message: "Da xoa" });
};
const Link = require("../models/Link");

exports.getLink = async (req, res) => {
  const links = await Link.find();

  if (links.length === 0) {
    return res.json({
      success: false,
      message: "Het link"
    });
  }

  const randomIndex = Math.floor(Math.random() * links.length);

  const link = links[randomIndex];

  link.clicks += 1;

  await link.save();

  res.json({
    success: true,
    url: link.url
  });
};

exports.getAllLinks = async (req, res) => {
  const links = await Link.find();

  res.json(links);
};

exports.addLink = async (req, res) => {
  const { url } = req.body;

  const newLink = new Link({
    url
  });

  await newLink.save();

  res.json({
    message: "Them link thanh cong"
  });
};

exports.deleteLink = async (req, res) => {
  await Link.findByIdAndDelete(req.params.id);

  res.json({
    message: "Xoa thanh cong"
  });
};
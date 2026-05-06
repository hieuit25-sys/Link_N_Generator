const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "thanhhieu") {
    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET);
    return res.json({ token });
  }

  res.status(401).json({ message: "Sai tai khoan" });
};
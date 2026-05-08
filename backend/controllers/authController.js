const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (
    username === "admin" &&
    password === " "
  ) {
    const token = jwt.sign(
      {
        username
      },
      process.env.JWT_SECRET
    );

    return res.json({
      token
    });
  }

  res.status(401).json({
    message: "Sai tai khoan"
  });
};
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Khong co token"
    });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (error) {
    res.status(401).json({
      message: "Token khong hop le"
    });
  }
};

module.exports = authMiddleware;
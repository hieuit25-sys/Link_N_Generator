require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const linkRoutes = require("./routes/linkRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend dang chay");
});

app.use("/api/links", linkRoutes);
app.use("/api/auth", authRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
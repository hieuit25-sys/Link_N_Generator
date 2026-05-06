require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/links", require("./routes/linkRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

app.listen(3000, () => {
  console.log("Server running http://localhost:3000");
});
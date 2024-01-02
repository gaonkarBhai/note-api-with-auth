// 1.6.2023

require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const noteroute = require("./routes/noteRoute");
const authroute = require("./routes/authRouts");
const connDB = require("./config/conn");

connDB(); // database config

// Middleware
app.use(express.json());
app.use("/api/v1/note", noteroute);
app.use("/api/v1/auth", authroute);

// comman route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Happy Coding!" });
});
app.get("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(PORT, () => {
  console.log("Server Connected");
});

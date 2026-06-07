require("dotenv").config();

console.log("ENV CHECK:", process.env.MONGO_URI);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));


// test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// import routes (if you created them)
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);

// server start
const authMiddleware = require("./middleware/authMiddleware");

app.get(
  "/api/profile",
  authMiddleware,
  (req, res) => {
    res.json({
      message: "Protected Route Accessed",
      user: req.user
    });
  }
);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});

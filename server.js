const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api/notes", require("./routes/noteRoutes"));

app.get("/", (req, res) => {
  res.send("Notes API Working");
});

app.use("/api/auth", require("./routes/authRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
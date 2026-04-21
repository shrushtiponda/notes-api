const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use("/api/notes", require("./routes/noteRoutes"));

app.get("/", (req, res) => {
  res.send("Notes API Working");
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
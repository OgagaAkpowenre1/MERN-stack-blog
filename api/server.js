const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

app.use("/", (req, res) => {
  console.log("This is the main route");
});

mongoose
.connect(process.env.MONGO_URI)
.then(console.log("Connected to MongoDB!"))
.catch((err) => console.log(err));

console.log("hello!");

app.listen("5000", () => {
  console.log("Connected to MongoDB!");
});

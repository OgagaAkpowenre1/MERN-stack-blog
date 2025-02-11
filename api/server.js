const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")

dotenv.config();
app.use(express.json())

app.get("/", async (req, res) => {
  console.log("This is the main route");
});
 
mongoose 
.connect(process.env.MONGO_URI)
.then(console.log("Connected to MongoDB!"))
.catch((err) => console.log(err));

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)

app.listen("5000", () => {
  console.log("Connected to MongoDB!"); 
});

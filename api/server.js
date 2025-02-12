const express = require("express");
const app = express();
const dotenv = require("dotenv");
const multer = require("multer")
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const cors = require("cors");



dotenv.config();

app.use(express.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Change "*" to your frontend URL if needed
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


app.use(cors({
  // origin: "https://5173-ogagaakpowe-mernstackbl-96nf2ga4bi6.ws-eu117.gitpod.io/", // Allows requests from any Gitpod subdomain
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoryRoute)


app.get("/", async (req, res) => {
  console.log("This is the main route");
  res.json("reached")
});
 
mongoose 
.connect(process.env.MONGO_URI)
.then(console.log("Connected to MongoDB!"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")
  }, filename: (req, file, cb) => {
    cb(null, req.body.name)
  }
})

const upload = multer({storage: storage})

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded")
})



app.listen("5000", () => {
  console.log("Backend is running!"); 
});

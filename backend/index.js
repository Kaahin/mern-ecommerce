import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Creating an instance of dotenv
dotenv.config();

// Connecting to MongoDB

// users db
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, UseNewUrlParser: true },
  () => {
    console.log("Connected to database!");
  }
);




const db = mongoose.connection;
db.on("error", console.log);

//Middlewares
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

// Route Middlewares

import addrRoute from "./routes/address/addr.js"; // User AddressList
import authRoute from "./routes/user/auth.js"; // Authentication
import authAdminRoute from "./routes/admin/auth.js"; // Admin Authentication
import prodRoute from "./routes/products/prod.js"; // Commercial ProductsList
import regRoute from "./routes/user/reg.js"; // Registration
import verRoute from "./routes/user/ver.js"; // Verification and User Data

app.use("/", addrRoute);
app.use("/", authRoute);
app.use("/", authAdminRoute);
app.use("/", prodRoute);
app.use("/", regRoute);
app.use("/", verRoute);

// Routes
app.get("/", (req, res) => {
  res.send("ok"); // Creates a page with text 'ok'
});

// Server pages
// const pages = require("./routes/pages");
// app.use(express.static("public"));
// app.use("/", pages);

// Port to listen
app.listen(4000, () => {
  console.log("Server running");
});

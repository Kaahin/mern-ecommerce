import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Creating an instance of dotenv
dotenv.config(); 

// Connecting to MongoDB
await mongoose.connect(
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

// Security and Verification ?? 
// const secureRoute = require("./routes/secure"); // används för säkring av sidan.
// app.use("/api/secure", secureRoute);
//
import authRoute from "./routes/auth.js"; // Authentication
import regRoute from "./routes/reg.js"; // Registration
import verRoute from "./routes/ver.js"; // User data

app.use("/", authRoute);
app.use("/", regRoute);
app.use("/", verRoute);

// Routes

app.get("/", (req, res) => {
  res.send("ok");     // Creates a page with text 'ok' 
});

// Server pages
// const pages = require("./routes/pages");
// app.use(express.static("public"));
// app.use("/", pages);


// Port to listen
app.listen(4000, () => {
  console.log("Server running");
});

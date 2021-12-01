const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv"); // att vi kan läsa .env filer
const pages = require("./routes/pages");
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config(); // skapar en instans av dotenv

// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, UseNewUrlParser: true },
  () => {
    console.log("Connected to database!");
  }
);

const authRoute = require("./routes/auth"); // För att logga in och sign up för user.
const secureRoute = require("./routes/secure"); // används för säkring av sidan.

//Middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000/sign-up",
  })
);
app.use(cookieParser())

// Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/secure", secureRoute);
app.use("/", pages);

app.listen(3001, () => {
  console.log("Server running");
});

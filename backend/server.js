import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import User from "./models/User.js";
import bcrypt from "bcrypt";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

// connect to db
await mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to database!");
  }
);
const db = mongoose.connection;
db.on("error", console.log);

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

// Routes

app.get("/", (req, res) => {
  res.send("ok");
});

app.get("/user", (req, res) => {
  if (!req.cookies.token) {
    return res.json({});
  }
  const payload = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET);
  User.findById(payload.id).then((userInfo) => {
    !userInfo ? res.json({}) : res.json(userInfo);
  });
});

app.post("/register", async (req, res) => {
  // if existing user
  const emailExist = await User.findOne({ email: req.body.email });

  if (emailExist) {
    return res.status(403).json({ error: true });
  }

  const { first, last, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({ first, last, email, password: hashedPassword });

  await user.save().then((userInfo) => {
    jwt.sign(
      { id: userInfo._id, email: userInfo.email },
      process.env.TOKEN_SECRET,
      (err, token) => {
        err
          ? (console.log(err), res.sendStatus(500))
          : res
              .cookie("token", token)
              .json({ id: userInfo._id, email: userInfo.email });
      }
    );
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  await User.findOne({ email }).then((userInfo) => {
    const passOk = bcrypt.compareSync(password, userInfo.password);
    if (passOk) {
      jwt.sign({ id: userInfo._id }, process.env.TOKEN_SECRET, (err, token) => {
        err
          ? (console.log(err), res.sendStatus(500))
          : res
              .cookie("token", token)
              .json({ id: userInfo._id, email: userInfo.email });
      });
    } else {
      res.sendStatus(401);
    }
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").send();
});

// Port to listen
app.listen(4000, () => {
  console.log("Server running");
});

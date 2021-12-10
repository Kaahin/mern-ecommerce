import express from "express";
import User from "../../models/User.js";
import jwt from "jsonwebtoken";

const verRoute = express.Router();

verRoute.get("/user", (req, res) => {
  if (!req.cookies.token) {
    return res.json({});
  }
  const payload = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET);
  User.findById(payload.id).then((userInfo) => {
    if (!userInfo) {
      res.json({});
    } else {
      const pair = { auth: true };

      res.json({ userInfo, pair });
    }
  });
});

export default verRoute;

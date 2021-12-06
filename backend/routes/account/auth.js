import express from "express";
import User from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authRoute = express.Router();

authRoute.post("/login", async (req, res) => {
  const emailExist = await User.findOne({ email: req.body.email });
  if (!emailExist) {
    return res.status(403).json({ error: true });
  }
  const { email, password } = req.body;
  await User.findOne({ email }).then((userInfo) => {
    const passOk = bcrypt.compareSync(password, userInfo.password);
    if (passOk) {
      jwt.sign({ id: userInfo._id }, process.env.TOKEN_SECRET, (err, token) => {
        err
          ? (console.log(err), res.sendStatus(500))
          : res
              .cookie("token", token)
              .json({
                id: userInfo._id,
                email: userInfo.email,
              });
      });
    } else {
      res.sendStatus(401);
    }
  });
});

authRoute.post("/logout", (req, res) => {
  res.cookie("token", "").send();
});

export default authRoute;

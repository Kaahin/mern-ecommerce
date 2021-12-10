import express from "express";
import User from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const regRoute = express.Router();

regRoute.post("/register", async (req, res) => {
  // Check if user already exist on the db via email adress
  const emailExist = await User.findOne({ email: req.body.email });

  if (emailExist) {
    return res.status(403).json({ error: true });
  }

  // Create new user
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
              .json({ id: userInfo._id, email: userInfo.email, auth: true });
      }
    );
  });
});

export default regRoute;

import express from "express";
import Admin from "../../models/Admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authAdminRoute = express.Router();

authAdminRoute.post("/login/admin", async (req, res) => {
  const emailExist = await Admin.findOne({ email: req.body.email });
  if (!emailExist) {
    return res.status(403).json({ error: true });
  }
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  await Admin.findOne({ email }).then((userInfo) => {
    const passOk = bcrypt.compareSync(password, userInfo.password);
    if (passOk) {
      jwt.sign({ id: userInfo._id }, process.env.TOKEN_SECRET, (err, token) => {
        err
          ? (console.log(err), res.sendStatus(500))
          : res.cookie("token", token).json({
              id: userInfo._id,
              email: userInfo.email,
              auth: true,
              admin: userInfo.admin,
            });
      });
    } else {
      res.sendStatus(401);
    }
  });
});

authAdminRoute.post("/logout/admin", (req, res) => {
  res.cookie("token", "").send();
});

export default authAdminRoute;

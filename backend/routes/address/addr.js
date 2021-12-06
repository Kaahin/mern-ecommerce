import express from "express";
import Address from "../../models/Address.js";
// import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const addrRoute = express.Router();

addrRoute.post("/address", async (req, res) => {
  // Create new address
  console.log(req.body);
  const { first, last, address, care_of, city, country, postal_code, phone } =
    req.body;

  const addressObj = new Address({
    first,
    last,
    address,
    care_of,
    city,
    country,
    postal_code,
    phone,
  });
  await addressObj.save().then((addressInfo) => {
    jwt.sign(
      { id: addressInfo._id },
      process.env.TOKEN_SECRET,
      (err, token) => {
        err
          ? (consol.log(err), res.sendStatus(500))
          : res.cookie("token", token).json({ id: addressInfo._id });
      }
    );
  });
});

addrRoute.get("/address", (req, res) => {
  if (!req.cookies.token) {
    return res.json({});
  }

  if (jwt.verify(req.cookies.token, process.env.TOKEN_SECRET)) {
    Address.find({}).then((addressInfo) => {
      !addressInfo ? res.json({}) : res.json(addressInfo);
    });
  }
});

addrRoute.post("/deleteADR", (req, res) => {
  console.log(req.body);
  Address.findByIdAndDelete(req.body._id).then((addressInfo) => {
    res.json(addressInfo);
  });
});

addrRoute.post("/updateADR", (req, res) => {
  const { first, last, address, care_of, city, country, postal_code, phone } =
    req.body;
  Address.findByIdAndUpdate(req.body._id, {
    first,
    last,
    address,
    care_of,
    city,
    country,
    postal_code,
    phone,
  }).then((error, addressInfo) => {
    err ? console.log(error) : res.json(addressInfo);
  });
});

export default addrRoute;

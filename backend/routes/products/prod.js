import express from "express";
import Product from "../../models/Product.js";
// import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prodRoute = express.Router();

prodRoute.post("/product", async (req, res) => {
  // Create new product
  console.log(req.body);
  const { item, price } = req.body;

  const productObj = new Product({
    item,
    price,
  });
  await productObj.save().then((productInfo) => {
    jwt.sign(
      { id: productInfo._id },
      process.env.TOKEN_SECRET,
      (err, token) => {
        err
          ? (consol.log(err), res.sendStatus(500))
          : res.cookie("token", token).json({ id: productInfo._id });
      }
    );
  });
});

prodRoute.get("/product", (req, res) => {
  if (!req.cookies.token) {
    return res.json({});
  }

  if (jwt.verify(req.cookies.token, process.env.TOKEN_SECRET)) {
    Product.find({}).then((productInfo) => {
      !productInfo ? res.json({}) : res.json(productInfo);
    });
  }
});

prodRoute.post("/deletePDT", (req, res) => {
  console.log(req.body);
  Product.findByIdAndDelete(req.body._id).then((productInfo) => {
    res.json(productInfo);
  });
});

prodRoute.post("/updateADR", (req, res) => {
  const { item, price } = req.body;
  Product.findByIdAndUpdate(req.body._id, {
    item,
    price,
  }).then((error, productInfo) => {
    err ? console.log(error) : res.json(productInfo);
  });
});

export default prodRoute;

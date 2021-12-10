import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    item: { type: String },
    price : { type: String },
  },
  { autoIndex: true, timestamps: true }
);

const Address = mongoose.model("Product", ProductSchema);

export default Address;
import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
  {
    first: { type: String },
    last: { type: String },
    address: { type: String },
    care_of: { type: String },
    city: { type: String },
    country: { type: String },
    postal_code: { type: String },
    phone: { type: String },
  },
  { autoIndex: true, timestamps: true }
);

const Address = mongoose.model("Address", AddressSchema);

export default Address;

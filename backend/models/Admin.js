import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    admin: { type: Boolean, default: true },
  },
  { autoIndex: true, timestamps: true }
);
const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;

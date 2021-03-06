import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
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
    admin: { type: Boolean, default: false },
  },
  { autoIndex: true, timestamps: true }
);
const User = mongoose.model("User", UserSchema);

export default User;

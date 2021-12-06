import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  first: { type: String },
  last: { type: String },
  email: {
    type: String,
    unique: true,
  },
  password: { type: String },
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("User", UserSchema);

export default User;

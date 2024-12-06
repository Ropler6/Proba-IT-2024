import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  passwordHash: String,
  salt: String,
  email: String,
  telephone: String,
});

const User = mongoose.model("User", userSchema);

export default User;

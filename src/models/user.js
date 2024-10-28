import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
  ///
});

const Users = mongoose.model("user", userSchema);

export default Users;

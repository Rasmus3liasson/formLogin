import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const AccountSchema = new Schema({
  username: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  mail: { type: String },
  password: { type: String },
  phone: { type: Number },
});

const Account = mongoose.model("accountDetails", AccountSchema);

export default Account;

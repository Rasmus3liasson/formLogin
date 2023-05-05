import express from "express";
import mongoose from "mongoose";
import Account from "./schema";
import dotenv from "dotenv";

dotenv.config();

const accountInfo = express.Router();

accountInfo.get("/", async (req, res) => {
  const conn = await mongoose.connect(process.env.accountForm as string);
  //sort by fastest time
  const AccountData = await Account.find();
  conn.disconnect();

  res.status(200).json({
    account: AccountData,
  });
});

accountInfo.post("/", async (req, res) => {
  const conn = await mongoose.connect(process.env.accountForm as string);

  const { username, password } = req.body;

  const accountData = new Account({
    username,
    password,
  });
  await accountData.save();
  conn.disconnect();

  res.status(200).json({
    message: "request went through",
  });
});

export default accountInfo;

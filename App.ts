import express from "express";

import dotenv from "dotenv";
import accountInfo from "./server/account";

const app = express();

app.use("/api/hej", accountInfo);

app.listen(5081);

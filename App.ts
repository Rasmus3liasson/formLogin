import express from "express";
import fs from "fs";

import accountInfo from "./server/account";

const app = express();

app.use("/api/hej", accountInfo);
app.use("/dist", express.static("./dist"));
app.use("/img", express.static("./src/img"));

app.get("/", (req, res) => {
  fs.readFile("./index.html", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send("Couldn't read file");
    } else {
      res.send(data);
    }
  });
});
app.get("/createAccount", (req, res) => {
  fs.readFile("./createAccount.html", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send("Couldn't read file");
    } else {
      res.send(data);
    }
  });
});

app.listen(process.env.PORT || 5081, () => {
  console.log(`Server listening on port ${process.env.PORT || 5081}`);
});

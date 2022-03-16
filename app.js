const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const saltRound = 5;
const jwt = require("jsonwebtoken");
const SECRETKEY = "qweewq";
const password = "m@097";

app.post("/reqister", (req, res) => {
  console.log(req.query);
  bcrypt.genSalt(saltRound, (err, salt) => {
    if (err) console.log(err);
    else {
      console.log("salt", salt);
      bcrypt.hash(password, salt, (err, hashpassword) => {
        console.log("hashpwd", hashpassword);
      });
    }
  });
  res.status(200).send({ status: "Sucess" });
});

app.post("/login", (req, res) => {
  const value = jwt.sign(req.query, SECRETKEY);
  res.send({ jwt: value });
});

app.listen(4004, () => {
  console.log("Application Started");
});

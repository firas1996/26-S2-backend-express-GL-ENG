const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Connection Ok !!!");
  })
  .catch((ali) => {
    console.log("Error: " + ali);
  });

const app = express();

const port = 1234;

app.listen(port, () => {
  console.log("The server is running on port: " + port);
});

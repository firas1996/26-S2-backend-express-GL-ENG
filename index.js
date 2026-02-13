const express = require("express");
const { connect } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

connect(process.env.DATABASE)
  .then(() => {
    console.log("Connection Ok !!!");
  })
  .catch((e) => {
    console.log("Error: " + e);
  });

const app = express();

const port = 1234;

app.listen(port, () => {
  console.log("The server is running on port: " + port);
});

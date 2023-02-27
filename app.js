const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

require("dotenv").config();

app.listen(port, function () {
  console.log("Server is listening on port " + port);
});

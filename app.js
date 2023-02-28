const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.set("view engine", "ejs"); // allows for the use of ejs

require("dotenv").config();

app.get("/", function (req, res) {
  res.render("index", { aVariable: "Ismael" });
});

app.listen(port, function () {
  console.log("Server is listening on port " + port);
});

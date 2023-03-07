// jshint esversion:6

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;

app.set("view engine", "ejs"); // allows for the use of ejs
require("dotenv").config(); // allows for use of .env to hide information. This is then added to the .gitignore

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index", { aVariable: "Ismael" });
});

app.listen(port, function () {
    console.log("Server is listening on port " + port);
});

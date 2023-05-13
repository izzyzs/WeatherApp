// jshint esversion:6

const express = require("express");
const https = require("https");
const { send } = require("process");
const app = express();
const port = process.env.PORT || 4000;

app.set("view engine", "ejs"); // allows for the use of ejs
require("dotenv").config(); // allows for use of .env to hide information. This is then added to the .gitignore

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

const { userLat, userLon, output } = require("./public/js/getLocation.js");
const key = process.env.API_KEY;

app.get("/", function (req, res) {
    res.render("index", { aVariable: "Ismael" });
});

app.post("/", function (req, res) {
    let lat = userLat;
    let lon = userLon;
    let url = "api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + key;
    https.get(url, function (response) {
        response.on("data", function (data) {
            res.render("index", { dayOne: response });
        });
    });
});

app.post("/by-city", function (req, res) {
    let cityName = req.body.city;
    let url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + key;
});

app.listen(port, function () {
    console.log("Server is listening on port " + port);
});

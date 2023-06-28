// jshint esversion:6

const express = require("express");
const https = require("https");
const { send } = require("process");
const axios = require("axios");
const { log } = require("console");
const app = express();

const port = process.env.PORT || 4000;
app.set("view engine", "ejs"); // allows for the use of ejs
require("dotenv").config(); // allows for use of .env to hide information. This is then added to the .gitignore

const getPublicIP = require("./controllers/ipUtils");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

// ipinfo.io/67.84.10.48?token=fb29c5778c241
// https://ipinfo.io/${ipAddress}?token=${ipinfoToken}

app.get("/", async function (req, res) {
    var lat;
    var lon;
    let ipAddress;

    try {
        const ipAddress = await getPublicIP();

        const response = await axios.get(`https://ipinfo.io/json?${ipAddress}?token=${process.env.IP_INFO_KEY}`);

        const { loc } = response.data;
        const locationDetails = loc.split(",");
        lat = locationDetails[0];
        lon = locationDetails[1];
    } catch (error) {
        console.error("Error:", error);
    }

    // console.log(lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`;
    console.log(url);

    https.get(url, function (response) {
        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            // const city = weatherData.city.name;
            // res.render("index", { dayOne: data });
            // console.log(weatherData);
        });
    });
});

// app.post("/", function (req, res) {});

// app.post("/by-city", function (req, res) {
//     let cityName = req.body.city;
//     let url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + key;
// });

app.listen(port, function () {
    console.log("Server is listening on port " + port);
});

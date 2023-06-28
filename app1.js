// jshint esversion:6

const express = require("express");
const https = require("https");
const { send } = require("process");
const axios = require("axios");
const { log } = require("console");
const app = express();

const port = process.env.PORT || 4000;
// const clientIP =
app.set("view engine", "ejs"); // allows for the use of ejs
require("dotenv").config(); // allows for use of .env to hide information. This is then added to the .gitignore

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

// ipinfo.io/67.84.10.48?token=fb29c5778c241
// https://ipinfo.io/${ipAddress}?token=${ipinfoToken}

app.get("/", async function (req, res) {
    var userLat;
    var userLon;
    var ipAddress;
    var ipInfoToken = process.env.IP_INFO_KEY;
    axios
        .get("https://api.ipify.org?format=json")
        .then(function (response) {
            const { ip } = response.data;
            console.log(ip);
            axios
                .get(`https://ipinfo.io/${ip}?token=${ipInfoToken}`)
                .then(function (response) {
                    const { loc } = response.data;
                    const locationDetails = loc.split(",");
                    userLat = locationDetails[0];
                    userLon = locationDetails[1];
                })
                .catch(function (error) {
                    console.error("Error retrieving location\n", error);
                });
        })
        .catch(function (error) {
            console.error("Error retrieving public IP: ", error);
        });

    // console.log(userLat, userLon);
    const lat = userLat;
    const lon = userLon;
    // const url = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`;

    // https.get(url, function (response) {
    //     console.log(response.statusCode);
    //     response.on("data", function (data) {
    //         const weatherData = JSON.parse(data);
    //         // res.render("index", { dayOne: data });
    //         console.log(weatherData);
    //     });
    // });

    // axios
    //     .get(`https://ipinfo.io/json?${ipAddress}?token=${process.env.IP_INFO_KEY}`)
    //     .then(function (response) {
    //         const { loc } = response.data;
    //         const locationDetails = loc.split(",");
    //         userLat = locationDetails[0];
    //         userLon = locationDetails[1];
    //         console.log(userLat, userLon);
    //     })
    //     .catch(function (error) {
    //         console.error("Error retrieving location\n", error);
    //     });
});

// app.post("/", function (req, res) {});

// app.post("/by-city", function (req, res) {
//     let cityName = req.body.city;
//     let url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + key;
// });

app.listen(port, function () {
    console.log("Server is listening on port " + port);
});

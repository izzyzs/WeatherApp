// jshint esversion:6

const express = require("express");
const https = require("https");
const { send } = require("process");
const axios = require("axios");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 4000;
app.set("view engine", "ejs"); // allows for the use of ejs
require("dotenv").config(); // allows for use of .env to hide information. This is then added to the .gitignore

const getPublicIP = require("./controllers/ipUtils");
const DateClass = require("./models/DateClass");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/api/weather", async function (req, res) {
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

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=imperial`;
    console.log(url);

    https.get(url, function (response) {
        let data = "";
        response.on("data", function (chunk) {
            // const city = weatherData.city.name;

            data += chunk;
        });
        response.on("end", function () {
            try {
                const weatherData = JSON.parse(data);
                const weatherDataListLength = weatherData.list.length;

                // Handle the parsed JSON data
                let weatherDataHash = {};
                let weatherDataList = [];
                for (let i = 0; i < weatherDataListLength; i++) {
                    let currentObjDate = new DateClass(weatherData.list[i].dt);
                    longDate = currentObjDate.getLongDate;
                    weatherData.list[i]["longDate"] = longDate;

                    let dateInfo = {
                        date: currentObjDate.theDate,
                        day: currentObjDate.day,
                        hour: currentObjDate.hour,
                        month: currentObjDate.month,
                        year: currentObjDate.year,
                    };
                    weatherData.list[i]["dateInfo"] = dateInfo;

                    const description = weatherData.list[i].weather[0].description;
                    const descriptionUppercase = description.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
                    weatherData.list[i].weather[0].description = descriptionUppercase;

                    if (!weatherDataHash.hasOwnProperty(longDate)) {
                        weatherDataHash[longDate] = [weatherData.list[i]];
                    } else {
                        weatherDataHash[longDate].push(weatherData.list[i]);
                    }

                    // weatherDataList.push(weatherData.list[i].dt);
                    // weatherDataList.push(longDate);
                    // weatherDataList.push(weatherDataListLength);
                }
                // res.json(weatherDataHash);
                // weatherDataList = weatherData.list;
                // const weatherDataJson = weatherData.list;
                weatherDataList = Object.values(weatherDataHash);
                const weatherDataJson = { list: weatherDataList };
                res.json(weatherDataJson);
            } catch (error) {
                console.error("Error parsing JSON:", error);
                // Handle the error appropriately
            }
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

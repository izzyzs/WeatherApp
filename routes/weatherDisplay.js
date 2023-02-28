const express = require("express");
const router = express.Router(); // use the router module

const { latitude, longitude } = require("../public/script");
const { postLatAndLong } = require("../controllers/weatherDisplay");

router.use(express.urlencoded({ extended: true }));

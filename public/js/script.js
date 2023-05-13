const { getLocation } = require("./getLocation");

let button = document.getElementById("activate");
button.addEventListener("click", function () {
    getLocation();
});

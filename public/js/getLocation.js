let userLat;
let userLon;
let output;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            userLat = position.coords.latitude;
            userLon = position.coords.longitude;
        });
    }
}

module.exports = { getLocation, userLat, userLon, output };

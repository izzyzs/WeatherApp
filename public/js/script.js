import "../../node_modules/bootstrap/dist/js/bootstrap";

var x = document.getElementById("demo");
var latitude = "";
var longitude = "";
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
}

getLocation();

module.exports = { latitude, longitude };

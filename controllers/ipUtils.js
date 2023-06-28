const axios = require("axios");

function getPublicIP() {
    return new Promise(function (resolve, reject) {
        axios
            .get("https://api.ipify.org?format=json")
            .then(function (response) {
                const { ip } = response.data;
                resolve(ip);
            })
            .catch(function (error) {
                reject(error);
            });
    });
}

module.exports = getPublicIP;

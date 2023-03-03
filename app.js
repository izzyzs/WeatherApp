const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;

app.set("view engine", "ejs"); // allows for the use of ejs

require("dotenv").config(); // allows for use of .env to hide information. This is then added to the .gitignore

app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));

app.get("/", function (req, res) {
    res.render("index", { aVariable: "Ismael" });
});

app.listen(port, function () {
    console.log("Server is listening on port " + port);
});

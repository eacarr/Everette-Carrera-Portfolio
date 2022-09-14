const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

// View engine configuration
app.engine("handlerbars", exphbs);
app.set("view engine", "handlebars");

app.use("/css", express.static(path.join(__dirname, "css")));

// Body parser middleware configuration
app.use(bodyParser.urlencoded({ extended: fauls }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(3000, () => console.log("Server started...")); //

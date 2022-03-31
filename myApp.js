var express = require("express");
var app = express();
console.log("Hello World");
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));
app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
});
if (process.env.MESSAGE_STYLE === "uppercase") {
  response = "Hello Json".toUpperCase();
} else {
  response = "Hello Json";
}

module.exports = app;

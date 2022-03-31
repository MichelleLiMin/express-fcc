require("dotenv").config();
var express = require("express");
var app = express();
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
    //console.log(req.time);
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);
app.use((req, res, next) => {
  // console.log(req.method + " " + req.path + " - " + req.ip )
  next();
});

//console.log("Hello World");
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
  // console.log(__dirname)
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  //console.log(process.env.MESSAGE_STYLE);
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "Hello json".toUpperCase() });
  } else {
    res.json({ message: "Hello json" });
  }
});
app.get("/:word/echo", (req, res)=>{
  const { word } = req.params;
  res.json({echo: word})
  console.log(req.params.word);
})
module.exports = app;

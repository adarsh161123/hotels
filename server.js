var fs = require("fs");
var os = require("os");
var notes = require("./note.js");
var _ = require("lodash");
var db = require("./db.js");
const Person = require("./models/person.js");
const Hotel = require("./models/hotel.js");
const routes = require("./routes/personroute.js");
const hotelRoutes = require("./routes/hotelroute.js");
const passport = require("./auth.js");
const cors = require("cors");
require("dotenv").config();
var express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.Port || 5000;
app.use(bodyParser.json());
app.use(cors());

const middleware = (req, res, next) => {
  console.log("Middleware executed");
  console.log( `[${new Date().toISOString()}]  "Request URL:", ${req.url}`);
  next();
};
app.use(middleware);



app.use(passport.initialize());

const localauthenticatemiddlewaer = passport.authenticate("local", { session: false });

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hello World");
});

//routes for person
app.use("/person", routes);
app.use("/hotel",localauthenticatemiddlewaer, hotelRoutes);

app.listen(port, () => {
  console.log("Server is running on http://localhost:3000");
});

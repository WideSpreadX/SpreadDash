const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const chalk = require("chalk");
const log = console.log;
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
var logger = require("morgan");
const user = require("./users");


const COVIDmarker = require("../models/COVID");
const Message = require("../models/Message");
const Article = require("../models/Article");
const Note = require("../models/Note");
const bodyParser = require('body-parser');
// DB Config
const db = require("../config/keys").MongoURI;
/* const app = express(); */
const app = require('express')();
const http = require('http').createServer(app);


require("./apiRoutes")(app);
require("./academyRoutes")(app);


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


// Welcome Page
router.get("/", (req, res) => res.render("welcome"));

// Dashboard Page
router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard");



  log(chalk.blue("Hello world!"));
});

// Help Page
router.get("/help", ensureAuthenticated, (req, res) => {
  res.render("help");
  log(chalk.red("Hello Help!"));
});

// SpreadShield
router.get("/spreadshield", ensureAuthenticated, (req, res) => {
  res.render("spreadshield")
});
// SpreadShield Contol
router.get("/spreadshield-control", ensureAuthenticated, (req, res) => {
  res.render("spreadshield-control")
});
// Academy
router.get("/academy", ensureAuthenticated, (req, res) => {
  res.render("academy")
});
// Academy - Programming
router.get("/programming", ensureAuthenticated, (req, res) => {
  res.render("programming")
});

// Academy - Programming - HTML
router.get("/html", ensureAuthenticated, (req, res) => {
  res.render("html")
});
// Academy - Programming - CSS
router.get("/css", ensureAuthenticated, (req, res) => {
  res.render("css")
});
// Academy - Programming - JS
router.get("/javascript", ensureAuthenticated, (req, res) => {
  res.render("javascript")
});
// Academy - Programming - SQL
router.get("/sql", ensureAuthenticated, (req, res) => {
  res.render("sql")
});
// Academy - Programming - AJAX
router.get("/ajax", ensureAuthenticated, (req, res) => {
  res.render("ajax")
});
// Academy - Programming - JSON
router.get("/json", ensureAuthenticated, (req, res) => {
  res.render("json")
});
// Academy - Programming - MongoDB
router.get("/mongodb", ensureAuthenticated, (req, res) => {
  res.render("mongodb")
});
// Academy - Programming - API Libraries
router.get("/api-libraries", ensureAuthenticated, (req, res) => {
  res.render("api-libraries")
});
// Academy - Programming - C#
router.get("/c-sharp", ensureAuthenticated, (req, res) => {
  res.render("c-sharp")
});
// Academy - Programming - C++
router.get("/cpp", ensureAuthenticated, (req, res) => {
  res.render("cpp")
});


// Academy - Math
router.get("/math", ensureAuthenticated, (req, res) => {
  res.render("math")
});
// Academy - Math - Numbers
router.get("/numbers", ensureAuthenticated, (req, res) => {
  res.render("numbers")
});
// Academy - Math - Addition
router.get("/addition", ensureAuthenticated, (req, res) => {
  res.render("addition")
});
// Academy - Math - Subtraction
router.get("/subtraction", ensureAuthenticated, (req, res) => {
  res.render("subtraction")
});
// Academy - Math - Multiplication
router.get("/multiplication", ensureAuthenticated, (req, res) => {
  res.render("multiplication")
});
// Academy - Math - Division
router.get("/division", ensureAuthenticated, (req, res) => {
  res.render("division")
});

// Academy - Science
router.get("/science", ensureAuthenticated, (req, res) => {
  res.render("science")
});

// Academy - History
router.get("/history", ensureAuthenticated, (req, res) => {
  res.render("history")
});

// Academy - Art
router.get("/art", ensureAuthenticated, (req, res) => {
  res.render("art")
});

// Business
router.get("/business", ensureAuthenticated, (req, res) => {
  res.render("business")
});

// Shopping
router.get("/shopping", ensureAuthenticated, (req, res) => {
  res.render("shopping")
});

// Leisure
router.get("/leisure", ensureAuthenticated, (req, res) => {
  res.render("leisure")
});
// Medical
router.get("/medical", ensureAuthenticated, (req, res) => {
  res.render("medical")
});
// Financial
router.get("/financial", ensureAuthenticated, (req, res) => {
  res.render("financial")
});
// Creation
router.get("/creation", ensureAuthenticated, (req, res) => {
  res.render("creation")
});
// Storage
router.get("/storage", ensureAuthenticated, (req, res) => {
  res.render("storage")
});
// SocialSpread
router.get("/socialspread", ensureAuthenticated, (req, res) => {
  res.render("socialspread")
});
// COVID-AR
router.get("/covid-ar", ensureAuthenticated, (req, res) => {
  res.render("covid-ar")
});
router.post("/covid-ar", ensureAuthenticated, (req, res) => {
  const {confirmed, lat, lng, threat_level, site_contamination_date, last_updated, placed_by} = req.body;
  let errors = [];

  const newCOVIDMarker = new COVIDmarker({
      confirmed,
      lat,
      lng,
      threat_level,
      site_contamination_date,
      last_updated,
      placed_by
  });

  newCOVIDMarker.save();
  res.redirect("/covid-ar/map");

});
router.get("/covid-ar/map", ensureAuthenticated, (req, res) => {
  res.render("covid-map");
});

app.get('/covid-ar', function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
});

// Events
router.get("/event", ensureAuthenticated, (req, res) => {
  res.render("event")
});

// News
router.get("/news", ensureAuthenticated, (req, res) => {
  res.render("news")
  
});

// SpreadSpace
router.get("/spreadspace", ensureAuthenticated, (req, res) => {
  res.render("spreadspace")
});


module.exports = router;

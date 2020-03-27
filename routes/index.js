const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const chalk = require("chalk");
const log = console.log;
const user = require("./users");
const COVIDmarker = require("../models/COVID");
const Message = require("../models/Message");

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

// Academy
router.get("/academy", ensureAuthenticated, (req, res) => {
  res.render("academy")
});

// 
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

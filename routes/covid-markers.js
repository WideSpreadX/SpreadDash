const express = require("express");
const router = express.Router();
const CovidMarker = require("../models/COVID");

var app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/covid-markers', function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
});
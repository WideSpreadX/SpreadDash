const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const chalk = require("chalk");
const log = console.log;
/* const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
var logger = require("morgan");
const classes = require("./classes"); */


const user = require("./users");
const COVIDmarker = require("../models/COVID");
const Message = require("../models/Message");
const Article = require("../models/Article");
const Note = require("../models/Note");
const Classes = require("../models/Class");
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
  log(chalk.blue("Hello Dashboard Home!"));
});


/* 

                    FlexFloor

*/

// FlexFloor Home
router.get("/flexfloor", ensureAuthenticated, (req, res) => {
  res.render("flexfloor");
  log(chalk.blue("Hello FlexFloor Home!"));
});


/* 
      Celebration of Life
*/

// Celebration of Life - Home
router.get("/celebration-life", ensureAuthenticated, (req, res) => {
  res.render("celebration-life");
  log(chalk.blue("Hello Celebration of Life - Home!"));
});

// Celebration of Life - LeAnn
router.get("/celebration-of-life/leann", ensureAuthenticated, (req, res) => {
  res.render("celebration-of-life-leann");
  log(chalk.blue("Hello Celebration of Life - LeAnn!"));
});

// Celebration of Life - Junior
router.get("/celebration-of-life/jonny", ensureAuthenticated, (req, res) => {
  res.render("celebration-of-life-jonny");
  log(chalk.blue("Hello Celebration of Life - Jonny!"));
});

// Celebration of Life - Tommy
router.get("/celebration-of-life/tommy", ensureAuthenticated, (req, res) => {
  res.render("celebration-of-life-tommy");
  log(chalk.blue("Hello Celebration of Life - Home!"));
});

// Celebration of Life - Fran
router.get("/celebration-of-life/fran", ensureAuthenticated, (req, res) => {
  res.render("celebration-of-life-fran");
  log(chalk.blue("Hello Celebration of Life - Fran!"));
});

// Celebration of Life - 9 & Dine
router.get("/celebration-of-life/nine-and-dine", ensureAuthenticated, (req, res) => {
  res.render("celebration-of-life-nine-and-dine");
  log(chalk.blue("Hello Celebration of Life - 9 & Dine!"));
});

router.get("/event/golf/dvo-classic", ensureAuthenticated, (req, res) => {
  res.render("dvo-classic");
  log(chalk.blue("Hello D.V.O. Classic!!!"));
});


router.get("/event/golf", ensureAuthenticated, (req, res) => {
  res.render("golf");
  log(chalk.blue("Hello Golf"));
});






/* 

Special Event Routes - URGENT!!!

*/

// Cromwell High School - Graduation - Class of 2020 - 360 VR Livestream smartEvent (AutoDistancing AI)

// Graduation - Home
router.get("/graduation", ensureAuthenticated, (req, res) => {
  res.render("graduation");
  log(chalk.blue("Hello Graduation Home!"));
});

// Graduation - Class
router.get("/graduation/class", ensureAuthenticated, (req, res) => {
  res.render("class2020");
  log(chalk.blue("Hello Graduation class2020!"));
});

// Graduation - Class Screen
router.get("/graduation/class-screen", ensureAuthenticated, (req, res) => {
  res.render("class-screen");
  log(chalk.blue("Hello Graduation class Screen!"));
});

// Graduation - Class VR
router.get("/graduation/class-vr", ensureAuthenticated, (req, res) => {
  res.render("class-vr");
  log(chalk.blue("Hello Graduation class VR!"));
});

// Prom - Home
router.get("/prom", ensureAuthenticated, (req, res) => {
  res.render("prom");
  log(chalk.blue("Hello Prom Home!"));
});

// Music Page - Home
router.get("/music", ensureAuthenticated, (req, res) => {
  res.render("music");
  log(chalk.blue("Hello Music Home!"));
});


/* 

Main System Routes

*/

// Help Page
router.get("/help", ensureAuthenticated, (req, res) => {
  res.render("help");
  log(chalk.red("Hello Help!"));
});


/* 

          SpreadShield

*/

// SpreadShield
router.get("/spreadshield", ensureAuthenticated, (req, res) => {
  res.render("spreadshield")
});
// SpreadShield Contol
router.get("/spreadshield-control", ensureAuthenticated, (req, res) => {
  res.render("spreadshield-control")
});


/* 

          Academy

*/


// Academy
router.get("/academy", ensureAuthenticated, (req, res) => {
  res.render("academy")
});
// Academy - Programming
router.get("/academy/programming", ensureAuthenticated, (req, res) => {
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
// Academy - Classes
router.get('/academy/classes', ensureAuthenticated, (req, res) => {
  res.render('classes');
});

// Academy - Register New Class GET
router.get('/academy/register-class', ensureAuthenticated, (req, res) => {
  res.render('register-class');
});
// Academy - Register New Class POST
router.post('/academy/register-class', (req, res) => {
  const { name, subject, skill_level, lessons, cert_name, teacher, teacher_aide } = req.body;
    let errors = [];
  
    // Check required fields
    if (!name || !subject || !skill_level || !lessons || !cert_name || !teacher || !teacher_aide ) {
      errors.push({ msg: "Please fill in all fields" });
    }


    if (errors.length > 0) {
      res.render("register-class", {
        errors,
        name,
        subject,
        skill_level,
        lessons,
        cert_name,
        teacher,
        teacher_aide
      });
    } else {
      // Validation Pass
      Classes.findOne({ name: name }).then(classes => {
        if (classes) {
          // User Exists
          errors.push({ msg: "This is already a registered class" });
          res.render("register-class", {
            errors,
            name,
            subject,
            skill_level,
            lessons,
            cert_name,
            teacher,
            teacher_aide
          });
        } else {
          const newClass = new Classes({
            name,
            subject,
            skill_level,
            lessons,
            cert_name,
            teacher,
            teacher_aide
          });

          newClass.save();
          res.redirect("/academy/classes");
        }
    });
  }
});
// Academy - Math
router.get("/academy/math", ensureAuthenticated, (req, res) => {
  res.render("math")
});
// Academy - Math - Trigonometry
router.get("/academy/math/trigonometry", ensureAuthenticated, (req, res) => {
  res.render("trigonometry")
});
// Academy - Math - Trigonometry
router.get("/academy/math/trigonometry/sin-cos-tan", ensureAuthenticated, (req, res) => {
  res.render("sin-cos-tan")
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
// Academy - Math - Algebra
router.get("/algebra", ensureAuthenticated, (req, res) => {
  res.render("algebra")
});

// Academy - Science
router.get("/academy/science", ensureAuthenticated, (req, res) => {
  res.render("science")
});

// Academy - History
router.get("/academy/history", ensureAuthenticated, (req, res) => {
  res.render("history")
});

// Academy - Art
router.get("/academy/art", ensureAuthenticated, (req, res) => {
  res.render("art")
});

// Business
router.get("/business", ensureAuthenticated, (req, res) => {
  res.render("business")
});



/* 

          Shopping

*/


// Shopping - Home
router.get("/shopping", ensureAuthenticated, (req, res) => {
  res.render("shopping")
});

// Shopping - Real Estate
router.get("/shopping/real-estate", ensureAuthenticated, (req, res) => {
  res.render("real-estate")
});

// Shopping - Clothing
router.get("/shopping/clothing", ensureAuthenticated, (req, res) => {
  res.render("clothing")
});

// Shopping - Clothing - Men
router.get("/shopping/clothing/men", ensureAuthenticated, (req, res) => {
  res.render("men")
});

// Shopping - Clothing - Men - T-Shirts
router.get("/shopping/clothing/men/t-shirts", ensureAuthenticated, (req, res) => {
  res.render("t-shirts")
});

// Shopping - Home Goods
router.get("/shopping/home-goods", ensureAuthenticated, (req, res) => {
  res.render("home-goods")
});

// Shopping - Electronics
router.get("/shopping/electronics", ensureAuthenticated, (req, res) => {
  res.render("electronics")
});

// Shopping - Grocery
router.get("/shopping/grocery", ensureAuthenticated, (req, res) => {
  res.render("grocery")
});

// Shopping - Pharmacy
router.get("/shopping/pharmacy", ensureAuthenticated, (req, res) => {
  res.render("pharmacy")
});



/* 

          Leisure

*/

// Leisure - Home
router.get("/leisure", ensureAuthenticated, (req, res) => {
  res.render("leisure")
});


/* 

          Medical

*/

// Medical
router.get("/medical", ensureAuthenticated, (req, res) => {
  res.render("medical")
});


/* 

          Finacnial

*/

// Financial
router.get("/financial", ensureAuthenticated, (req, res) => {
  res.render("financial")
});

/* 

          Creation

*/

// Creation
router.get("/creation", ensureAuthenticated, (req, res) => {
  res.render("creation")
});

/* 

          Storage

*/
// Storage
router.get("/storage", ensureAuthenticated, (req, res) => {
  res.render("storage")
});

/* 

          SocialSpread

*/

// SocialSpread
router.get("/socialspread", ensureAuthenticated, (req, res) => {
  res.render("socialspread")
});


/* 

          COVID-AR

*/

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


/* 

          SpreadSpace

*/


// SpreadSpace
router.get("/spreadspace", ensureAuthenticated, (req, res) => {
  res.render("spreadspace")
});


module.exports = router;

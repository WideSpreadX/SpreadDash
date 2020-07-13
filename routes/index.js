const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");
const chalk = require("chalk");
const log = console.log;
const mongoose = require("mongoose");
/* 
const axios = require("axios");
const cheerio = require("cheerio");
var logger = require("morgan");
const classes = require("./classes"); */


const User = require("../models/User");
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
const Product = require("../models/Product");

require("./apiRoutes")(app);
require("./academyRoutes")(app);


/* Middleware */

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

// Init gfs


// Welcome Page
router.get("/", (req, res) => res.render("welcome"));

// Dashboard Page

  
  router.get("/dashboard", ensureAuthenticated, (req, res) => {
    res.render("dashboard")
    log(chalk.blue("Hello Dashboard Home!"));
  });

// Messaging Page
router.get("/messaging", ensureAuthenticated, (req, res) => {
  res.render("messages.ejs");
  log(chalk.blue("Hello Messages Home!"));
});




/* 

Contacts Pages

*/

// Contact Page
router.get("/user/contacts", ensureAuthenticated, (req, res) => {
  res.render("contacts-list.ejs");
  log(chalk.red("Hello Contacts Home!"));
});

// Personal Spread Page
router.get("/user/profile", ensureAuthenticated, (req, res) => {
  res.render("user-profile-page.ejs");
  log(chalk.red("Hello Profile Home!"));
});


// Personal Spread Page - Jonny O
router.get("/user/profile/jonny-o", ensureAuthenticated, (req, res) => {
  res.render("user-profile-page-jonny-o.ejs");
  log(chalk.red("Hello Jonny O Profile Home!"));
});




// Personal Spread Page - Trell
router.get("/user/profile/trell", ensureAuthenticated, (req, res) => {
  res.render("user-profile-page-trell.ejs");
  log(chalk.red("Hello Trell Profile Home!"));
});



// Personal Spread Page - Hope
router.get("/user/profile/hope", ensureAuthenticated, (req, res) => {
  res.render("user-profile-page-hope.ejs");
  log(chalk.red("Hello Hope Profile Home!"));
});


/* 

Camera Pages

*/

// Media Page
router.get("/media", ensureAuthenticated, (req, res) => {
  res.render("media.ejs");
  log(chalk.red("Hello Media Home!"));
});


// Media Page - Camera 1
router.get("/media/camera-1", ensureAuthenticated, (req, res) => {
  res.render("camera-1.ejs");
  log(chalk.blue("Hello Camera 1!"));
});



/* 

File Upload

*/





// Get upload form
router.get("/file/upload", ensureAuthenticated, (req, res) => {
  res.render("file-upload");
  log(chalk.blueBright("Hello File Upload Page!"));
});

// Uploads File to DB
/* app.post('/file/upload', upload.single('file'), (req, res) => {
  res.json({file: req.file});
}); */

/* 

Music

*/

router.post("/music/add", ensureAuthenticated, (req, res) => {
  res.render("add-music")
  log(chalk.blue("Hello Add Music Home!"));
});


// Music - Trell
router.get("/music/trell", ensureAuthenticated, (req, res) => {
  res.render("music-trell")
  log(chalk.greenBright("Trell!"));
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



                  Celebrations



                  */
                 
// Celebrations - Home
router.get("/celebrations", ensureAuthenticated, (req, res) => {
  res.render("celebrations");
  log(chalk.blue("Hello Celebration of Life - Home!"));
});

                 
// Celebrations - Holidays
router.get("/celebrations/holidays", ensureAuthenticated, (req, res) => {
  res.render("celebrations-holidays");
  log(chalk.blue("Hello Birthday Home!"));
});


                 
// Celebrations - Birthday
router.get("/celebrations/birthday", ensureAuthenticated, (req, res) => {
  res.render("celebrations-birthday");
  log(chalk.blue("Hello Birthday Home!"));
});


                 
// Celebrations - Prom
router.get("/celebrations/prom", ensureAuthenticated, (req, res) => {
  res.render("celebrations-prom");
  log(chalk.blue("Hello Prom Home!"));
});


                 
// Celebrations - Graduation
router.get("/celebrations/graduation", ensureAuthenticated, (req, res) => {
  res.render("celebrations-graduation");
  log(chalk.blue("Hello Graduation Home!"));
});


                 
// Celebrations - Wedding
router.get("/celebrations/wedding", ensureAuthenticated, (req, res) => {
  res.render("celebrations-wedding");
  log(chalk.blue("Hello Wedding Home!"));
});


                 
// Celebrations - Anniversary
router.get("/celebrations/anniversary", ensureAuthenticated, (req, res) => {
  res.render("celebrations-anniversary");
  log(chalk.blue("Hello Anniversary Home!"));
});


                 
// Celebrations - Newborn
router.get("/celebrations/newborn", ensureAuthenticated, (req, res) => {
  res.render("celebrations-newborn");
  log(chalk.blue("Hello Newborn Home!"));
});


// Celebrations - Celebration of Life - Home
router.get("/celebrations/celebration-life", ensureAuthenticated, (req, res) => {
  res.render("celebrations-celebration-life");
  log(chalk.blue("Hello Celebration of Life Home!"));
});



/* 
      Celebration of Life
*/

// Celebration of Life - Dave
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

// Celebration of Life - Friends
router.get("/celebration-of-life/friends", ensureAuthenticated, (req, res) => {
  res.render("celebration-of-life-friends");
  log(chalk.blue("Hello Celebration of Life - Friends!"));
});

// Celebration of Life - Tommy
router.get("/celebration-of-life/tommy", ensureAuthenticated, (req, res) => {
  res.render("celebration-of-life-tommy");
  log(chalk.blue("Hello Celebration of Life - Tommy!"));
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


// ArtistSpread
router.get("/artistspread", ensureAuthenticated, (req, res) => {
  res.render("artistspread");
  log(chalk.blue("Hello ArtistSpread!"));
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


// Shopping - Cart
router.get("/shopping/cart", ensureAuthenticated, (req, res) => {
  res.render("cart")
});


// Shopping - Cart - Checkout
router.get("/shopping/cart/checkout", ensureAuthenticated, (req, res) => {
  res.render("checkout")
});



// Get All Products
router.get('/shopping/all-products', function(req, res, next) {
  Product.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
 });

 router.get('/shopping/product/:id', function(req, res, next) {
  Product.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
 });

// Save a Product
router.post('/shopping/product', function(req, res, next) {
  Product.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
 });

 
/* UPDATE PRODUCT */
router.put('/shopping/product/:id', function(req, res, next) {
  Product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
 });
 
 
 /* DELETE PRODUCT */
router.delete('/shopping/product/:id', function(req, res, next) {
  Product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
 });
 
// Shopping - Home
router.get("/shopping", ensureAuthenticated, (req, res) => {
  res.render("shopping")
});

// Shopping - Real Estate
router.get("/shopping/real-estate", ensureAuthenticated, (req, res) => {
  res.render("real-estate")
});

// Shopping - Automotive
router.get("/shopping/automotive", ensureAuthenticated, (req, res) => {
  res.render("automotive")
});

// Shopping - Clothing
router.get("/shopping/clothing", ensureAuthenticated, (req, res) => {
  res.render("clothing")
});

// Shopping - Clothing - Women
router.get("/shopping/clothing/women", ensureAuthenticated, (req, res) => {
  res.render("women-clothing")
});

// Shopping - Clothing - Women - T-Shirts
router.get("/shopping/clothing/women/t-shirts", ensureAuthenticated, (req, res) => {
  res.render("women-t-shirts")
});

// Shopping - Clothing - Men
router.get("/shopping/clothing/men", ensureAuthenticated, (req, res) => {
  res.render("men")
});

// Shopping - Clothing - Men - T-Shirts
router.get("/shopping/clothing/men/t-shirts", ensureAuthenticated, (req, res) => {
  res.render("t-shirts")
});

// Shopping - Clothing - Men - Shorts
router.get("/shopping/clothing/men/shorts", ensureAuthenticated, (req, res) => {
  res.render("shorts-m")
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

/* Demolition Ranch */

// Leisure - Games
router.get("/leisure/games", ensureAuthenticated, (req, res) => {
  res.render("games")
});

// Leisure - Games - Demolition Ranch
router.get("/leisure/games/demolition-ranch", ensureAuthenticated, (req, res) => {
  res.render("demolition-ranch")
});








/* 

          Wellness/Medical

*/

// Wellness
router.get("/wellness", ensureAuthenticated, (req, res) => {
  res.render("wellness")
});




// Medical
router.get("/wellness/medical", ensureAuthenticated, (req, res) => {
  res.render("medical")
});



// Yoga
router.get("/wellness/yoga", ensureAuthenticated, (req, res) => {
  res.render("yoga")
});


// Yoga - Classes
router.get("/wellness/yoga/classes", ensureAuthenticated, (req, res) => {
  res.render("yoga-classes")
});


// Yoga - Instructors
router.get("/wellness/yoga/instructors", ensureAuthenticated, (req, res) => {
  res.render("yoga-instructors")
});


// Yoga - Instructors - Purnama
router.get("/wellness/yoga/instructors/purnama", ensureAuthenticated, (req, res) => {
  res.render("yoga-purnama")
});


// Yoga - Instructors - Purnama - About Us
router.get("/wellness/yoga/instructors/purnama/about-us", ensureAuthenticated, (req, res) => {
  res.render("yoga-purnama-about-us")
});


// Yoga - Instructors - Purnama - Mission Statement
router.get("/wellness/yoga/instructors/purnama/mission-statement", ensureAuthenticated, (req, res) => {
  res.render("yoga-purnama-mission-statement")
});


// Yoga - Instructors - Purnama - Classes
router.get("/wellness/yoga/instructors/purnama/classes", ensureAuthenticated, (req, res) => {
  res.render("yoga-purnama-classes")
});


// Yoga - Instructors - Purnama - Schedule
router.get("/wellness/yoga/instructors/purnama/schedule", ensureAuthenticated, (req, res) => {
  res.render("yoga-purnama-schedule")
});


// Yoga - Instructors - Purnama - Live
router.get("/wellness/yoga/instructors/purnama/live", ensureAuthenticated, (req, res) => {
  res.render("yoga-purnama-live")
});


// Yoga - Instructors - Purnama - Clarice Wilson
router.get("/wellness/yoga/instructors/purnama/clarice-wilson", ensureAuthenticated, (req, res) => {
  res.render("yoga-clariceWilson")
});


// Yoga - Classroom
router.get("/wellness/yoga/classroom", ensureAuthenticated, (req, res) => {
  res.render("yoga-classroom")
});


/*
                                    Fitness
*/

// Fitness
router.get("/wellness/fitness", ensureAuthenticated, (req, res) => {
  res.render("fitness")
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


/* 

          Aether

*/


// SpreadSpace
router.get("/aether", ensureAuthenticated, (req, res) => {
  res.render("aether")
});


module.exports = router;

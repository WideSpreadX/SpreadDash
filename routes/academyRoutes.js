const express = require("express");
const router = express.Router();


const classData = require("../data/classData");
const waitListData = require("../data/waitinglistData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
 
  // academy GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------


    router.get("/classes",  (req, res) => {
        res.render("classes");
        
        res.json(classData);
      
      
        log(chalk.blue("Hello classes!"));
      });


  router.get("/academy/waitlist", function(req, res) {
    res.json(waitListData);
  });

  // academy POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the routerropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the classData array)
  // ---------------------------------------------------------------------------

  router.post("/academy/classes", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (classData.length < 10) {
      classData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  router.post("/academy/clear", function(req, res) {
    // Empty out the arrays of data
    classData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};

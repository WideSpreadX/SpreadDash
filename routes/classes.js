const express = require("express");
const router = express.Router();
const Classes = require("../models/Class");

// Register Handle
router.get("/register-class", (req, res) => {
    res.render('register-class')
});
app.post("/register-class", (req, res) => {
    const { name, subject, skill_level, lessons, completion_cert, cert_name, teacher, teacher_aide } = req.body;
    let errors = [];
  
    // Check required fields
    if (!name || !subject || !skill_level || !lessons || !completion_cert || !cert_name || !teacher || !teacher_aide ) {
      errors.push({ msg: "Please fill in all fields" });
    }


    if (errors.length > 0) {
      res.render("register-class", {
        errors,
        name,
        subject,
        skill_level,
        lessons,
        completion_cert,
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
            completion_cert,
            cert_name,
            teacher,
            teacher_aide
          });
        } else {
          const newClass = new Class({
            name,
            subject,
            skill_level,
            lessons,
            completion_cert,
            cert_name,
            teacher,
            teacher_aide
          });

          newClass.save();
          res.redirect("/classes");
        }
    });
  }
});
module.exports = router;
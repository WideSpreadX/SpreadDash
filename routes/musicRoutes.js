const express = require("express");
const router = express.Router();
const Song = require("../models/Song");



// Add Song Handle
router.post("/music/add", (req, res) => {
  const { artist, single, albumn } = req.body;
  let errors = [];

  // Check required fields
  if (!artist || !single || !albumn ) {
    errors.push({ msg: "Please fill in all fields" });
  }
  if (!errors) {
    const newSong = new Song({
        artist,
        single,
        albumn
    });
    newSong.save().then(song => {
        req.flash(
            "success_msg",
            "You have successfully uploaded your song."
        )
    });
}
  
});

// Login Handle

/* router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/users/login"
  })(req, res, next);
});
 */

module.exports = router;

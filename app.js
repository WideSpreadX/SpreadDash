const express = require("express");
const path = require('path');
const ejsLint = require('ejs-lint');
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
/* 
File Uploading
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
 */

const app = express();
// Passport Config
require("./config/passport")(passport);
// DB Config
const db = require("./config/keys").MongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

// Middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("public"));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}





// Routes

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/music", require("./routes/musicRoutes"));
/* app.use("/academy", require("./routes/academyRoutes")); */
app.use("/api", require("./routes/apiRoutes"));



// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, console.log(`Server started on port ${PORT}`));

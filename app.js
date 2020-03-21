const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");

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

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, console.log(`Server started on port ${PORT}`));

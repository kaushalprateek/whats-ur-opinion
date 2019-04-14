let express = require("express");
let router = express.Router();

let jwt = require("jsonwebtoken");

let passport = require("passport");

let contactController = require("../controllers/contact");

function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}

var bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/addquestion", (req, res) => {});

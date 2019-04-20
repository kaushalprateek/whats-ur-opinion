let express = require("express");
let router = express.Router();
let jwt = require("jsonwebtoken");

// create a reference to the db schema
let QuesModel = require("../models/question");
let answerModel = require("../models/surveyapp");

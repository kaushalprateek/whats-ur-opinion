let express = require("express");
let router = express.Router();
let jwt = require("jsonwebtoken");

// create a reference to the db schema
let QuesModel = require("../models/question");

module.exports.displayQuesList = (req, res, next) => {
  let id = req.params.id;
  // console.log("id" , id)
  QuesModel.find({ user_id: id }, (err, SurveyList) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        success: true,
        msg: "Question List Displayed Successfully",
        SurveyList: SurveyList
      });
    }
  });
};

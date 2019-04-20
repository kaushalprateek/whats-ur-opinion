let mongoose = require("mongoose");

let AnswerSchema = mongoose.Schema(
  {
    title: String,

    questions: [
      {
        question1: String,
        a1: String
      },
      {
        question2: String,
        a1: String
      },
      {
        question3: String,
        a1: String
      },
      {
        question4: String,
        a1: String
      },
      {
        question5: String,
        a1: String
      }
    ]
  },
  {
    collection: "SurveyAnswer"
  }
);

module.exports = mongoose.model("surveyapp", AnswerSchema);

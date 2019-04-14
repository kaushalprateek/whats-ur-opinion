let mongoose = require("mongoose");

// create a model class
let questionSchema = mongoose.Schema(
  {
    question: String,
    answer1: String,
    answer2: String,
    answer3: String,
    answer4: String
  },
  {
    collection: "Survey"
  }
);

module.exports = mongoose.model("question", questionSchema);

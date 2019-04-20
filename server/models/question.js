let mongoose = require("mongoose");

// create a model class
let questionSchema = mongoose.Schema(
  {
    user_id: String,
    title: String,
    desc: String,
    questions: [
      {
        question: String,
        a1: String,
        a2: String,
        a3: String,
        a4: String
      },
      {
        question: String,
        a1: String,
        a2: String,
        a3: String,
        a4: String
      },
      {
        question: String,
        a1: String,
        a2: String,
        a3: String,
        a4: String
      }
    ],
    status: Boolean
  },
  {
    collection: "Survey"
  }
);

module.exports = mongoose.model("question", questionSchema);

let express = require("express");
let router = express.Router();

let jwt = require("jsonwebtoken");

let passport = require("passport");

let contactController = require("../controllers/contact");
let QuesController = require("../controllers/question");

function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}
/* GET Contact List page - READ Operation */
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  QuesController.displayToDoList
);

/* GET Route for the Add page 
   this will display the Add page */
router.get(
  "/add",
  passport.authenticate("jwt", { session: false }),
  QuesController.displayAddPage
);

/* POST Route for processing the Add page */
router.post(
  "/add/:id",
  passport.authenticate("jwt", { session: false }),
  QuesController.processAddPage
);

/* GET request - display the Edit page */
router.get(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  QuesController.displayEditPage
);

// /* POST request - Update the database with data from the Edit Page */
router.post(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  QuesController.processEditPage
);

// /* GET request to perform the delete action */
router.get(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  QuesController.performDelete
);

var bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/addquestion", (req, res) => {});

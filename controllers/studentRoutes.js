const express = require("express");
const User = require("../models/student.model");

var router = express.Router();

router.get("/", (req, res) => {
  res.render("student/addStudent", { viewTitle: "Add New Student" });
});
router.post("/add", (req, res) => {
  newUser = User({
    name: req.body.name,
    mobile: req.body.wmail,
    city: req.body.wmail
  });
  newUser.save;

  res.json(newUser);
});

module.exports = router;

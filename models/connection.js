const mongoose = require("mongoose");
require("./student.model");

mongoose.connect(
  "mongodb://localhost:27017/StudentDB",
  { useNewUrlParser: true },
  err => {
    if (!err) {
      console.log("Database Connection Established");
    } else {
      console.log(err);
    }
  }
);

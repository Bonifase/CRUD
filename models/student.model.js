const mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
  name: { type: String },
  mobile: { type: String },
  city: { type: String }
});

mongoose.model("Student", studentSchema);

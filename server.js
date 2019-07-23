const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const studentRoutes = require("./controllers/studentRoutes");
require("./models/connection");

var app = express();

// replaces the body-parser
app.use(express.json());

//set views directory for the application
app.set("views", path.join(__dirname, "/views/"));

//configur express engine for handle bars
app.engine("hbs", exphbs({ extname: "hbs", defaultLayout: "mainLayout", layoutsDir: __dirname + "/views/layout" }));
app.set("view engine", "hbs");

// routes
app.use("/students", studentRoutes);

app.listen(3000, () => console.log("Server started on port 3000"));

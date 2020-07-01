var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

app.get('/', function(req, res) {
    res.render("home");
})

app.get('/about', function(req, res) {
  res.render("about")
})

app.get('/team', function(req, res) {
  res.render("team")
})


var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Works");
});
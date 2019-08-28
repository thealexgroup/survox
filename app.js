//dependancies - what does that mean? Broadly, a term used to describe
//a software that another software relies on to work.
var express = require('express');
var bodyParser = require('body-parser');

//write the express function to a variable for use later
var app = express();
var PORT = process.env.port || 8080;

//this is all the body parser stuff, required to work with
//json info passed to and fro.  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.text()); 
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//hey, where is my static files?  
//I think ./ is more explicit than just public
app.use(express.static("./public"));

//require routes.js and pass (app) to routes.js for use later! 
require("./routes/routes.js")(app);

//start listening on whatever port (either environment port or 
//what I set above) and tell us what port we are listening on.
app.listen(PORT, function() {
	console.log("App listening on port: " + PORT);
});

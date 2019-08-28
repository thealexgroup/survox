//Require mysql, we need it for the database
var mysql = require('mysql');

//create a connection to the database, passing the following to the mysql server and 
//holding the connection info in a variable called connection
var connection = mysql.createConnection({
	port: 3306,
	host: localhost,
	user: "root",
	password: "Crat@pEE",
	database: "commands"
});

//we created the mysql conection in the variable called connection
//use the mysql method connect() contained now in connection to 
// actually connect, let us know if we have errors, or show the 
//threadID if we do get connected.  
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as ID: " + connection.threadID);
});

//we need to export the connection variable to use other places
module.exports = connection;


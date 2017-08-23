const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// Serve files from public folder. That's where all of our HTML, CSS and Angular JS are.
app.use(express.static('public'));
// This allows us to accept JSON bodies in POSTs and PUTs.
app.use(bodyParser.json());

// TODO Set up access to the database via a connection pool. You will then use
// the pool for the tasks below.


var pool = require("./pg-connection-pool");

//pool queries here

app.get("/api/total", function(req, res) {
	pool.query("SELECT * FROM nutrientlog").then(function(result) {
		res.send(result.rows);
	}).catch(function(err) {
		console.log(err);
		res.status(500);
		res.send("Server Error");
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('JSON Server is running on ' + port);
});
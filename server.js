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
	pool.query("SELECT * FROM nutrientlog WHERE logday IS NULL").then(function(result) {
		res.send(result.rows);
	}).catch(function(err) {
		console.log(err);
		res.status(500);
		res.send("Server Error");
	});
});

app.get("/api/total/new", function(req, res) {
	pool.query("SELECT * FROM nutrientlog WHERE logday IS NULL").then(function(result) {
		res.send(result.rows);
	}).catch(function(err) {
		console.log(err);
		res.status(500);
		res.send("Server Error");
	});
});

app.get("/api/total/:day", function(req, res) {
	pool.query("SELECT * FROM nutrientlog WHERE logday ='" + req.params.day + "'").then(function(result) {
		res.send(result.rows);
	}).catch(function(err) {
		console.log(err);
		res.status(500);
		res.send("Server Error");
	});
});

app.post("/api/item", function(req, res){
	var sql = "INSERT INTO nutrientlog (name, servings, servsize, foodgroup, cal, carbs, protein, fat, image) VALUES ($1::text, $2::int, $3::text, $4::text, $5::float, $6::float, $7::float, $8::float, $9::text)";
	var values = [req.body.name, req.body.servings, req.body.servSize, req.body.group, req.body.cal, req.body.carbs, req.body.protein, req.body.fat, req.body.img]; 
	pool.query(sql, values).then(function(result){
		res.status(201).send("added item.");
	}).catch(function(err){
		console.log(err);
		res.status(500);
		res.send("Server Error");
	});
});

app.delete("/api/total", function(req, res){
	pool.query("DELETE FROM nutrientlog WHERE logday IS NULL").then(function(result){
		res.send("Deleted current log.");
	}).catch(function(err){
		console.log(err);
		res.status(500);
		res.send("Server Error");
	});
});

app.put("/api/total/save/:day", function(req, res) {
	pool.query("UPDATE nutrientlog SET logday='" + req.params.day + "' WHERE logday IS NULL").then(function(result) {
		res.send("Updated logged day");
	}).catch(function(err){
		console.log(err);
		res.status(500);
		res.send("Server Error");
	});
});


var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('JSON Server is running on ' + port);
});
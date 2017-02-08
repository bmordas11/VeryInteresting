// routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');

var express	= require('express');

module.exports = function(app) {
	// server routes, handle things like api calls
	// and authentication routes

	// get an instance of the express router
	var router = express.Router();

	// sample api route
	app.get('/api/nerds', function(req, res) {
		// use mongoose to get all nerds in database
		Nerd.find(function(err, nerds) {
			// if there is error retrieving, send error.
				// nothing after res.send(err) will execute
			if (err)
				res.send(err);

			res.json(nerds); // return all nerds in JSON format
		});
	});
	
	// test route to make sure everything working
	router.get('/', function(req, res) {
		res.json({ message: 'hooray! welcome to our api!' });
	});

	// more routes for our API will be here

	// Register our routes -----------------------------------------
	// all of our routes will be prefixed with /api
	app.use('/api', router);

	// route to handle creating goes here (app.post)
	// route to handle delete goes here (app.delete)
	
	// frontend routes
	
	// route to handle all angular requests
	app.get('*', function(req, res) {
		// load our public/index.html file
		res.sendfile('./public/index.html');
	});
};

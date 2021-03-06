var spaces = require('./../server/controllers/spaces.js');
var users = require('./../server/controllers/users.js');

module.exports = function (app) {
	app.post('/addUser', function (req, res){
		users.addUser(req, res);
	})
	app.get('/getUser/:username/:password', function (req, res){
		users.getUser(req, res);
	})
	app.post('/setSession', function (req, res){
		users.getSingleUser(req, res);
		// console.log(req.body);
		req.session.save(function (err){
			req.session.value = req.body;
		});
	})
	app.get('/getSpaces', function (req, res){
		spaces.getSpaces(req, res);
	})
	app.get('/username', function (req, res){
		spaces.username(req, res);
	})
	app.post('/addSpace/:id', function (req, res){
		spaces.addSpace(req, res)
	})
	app.get('/hostSpace/:id', function (req, res){
		users.hostSpace(req, res);
	})
	app.post('/logout', function (req, res){
		users.getSingleUser(req, res);
		req.session.destroy();
	})
	app.post('/searchResults', function (req,res){
		spaces.showResults (req,res);
	})
	app.get('/singleSpace/:id', function (req, res){
		spaces.getThisSpace(req, res);
	})
	app.post('/setSearchSession', function (req, res){
		spaces.searchSession(req, res);
	})
	app.get('/searchSession', function (req, res){
		spaces.getSearchSession(req, res);
	})
}
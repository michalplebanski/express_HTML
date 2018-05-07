var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
	res.render('main');
});

app.get('/auth/google', function(req, res) {
	res.render('first-template', {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	});
});

var server = app.listen(3000, 'localhost', function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Aplikacja nasłuchuje na http://' + host + ':' + port);
});

app.use(function(req, res, exit) {
	res.status(404).send('Niestety, zły adres!');
});
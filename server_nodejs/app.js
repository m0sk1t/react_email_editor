const port = 8888;
const path = require('path');
const e = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const compression = require('compression');
const serveStatic = require('serve-static');
const serveFavicon = require('serve-favicon');
const cookieParser = require('cookie-parser');

e.use(compression());
e.use(cookieParser());
e.use(bodyParser.json({
	'limit': '5mb'
}));
e.use(bodyParser.urlencoded({
	'limit': '5mb',
	'extended': true
}));
e.use(serveStatic(path.join(__dirname, '/build')));
e.use(serveStatic(path.join(__dirname, '/uploads'))); // bad? maybe yes...
e.use(serveFavicon(path.join(__dirname, '/build/favicon.ico')));

e.use(require(path.join(__dirname, '/app/Router.js')));
e.listen(port, () => {
	mongoose.Promise = global.Promise;

	console.log(`Server started at: ${new Date()}, path: http://localhost:${port}/`);

	mongoose.connect('mongodb://localhost:27017/email_editor');

	mongoose.connection.on('connected', () => {
		console.log('MongoDB connection established');
	});

	mongoose.connection.on('error', () => {
		console.error('MongoDB connection error. Please make sure MongoDB is running.');
		process.exit();
	});
});

function exitHandler(options, err) {
	if (err) console.log(err.stack);
	if (options.exit) {
		mongoose.connection.close();
		process.exit();
	}
}

process.on('exit', exitHandler.bind(null, {
	exit: true
}));

process.on('SIGINT', exitHandler.bind(null, {
	exit: true
}));

process.on('uncaughtException', exitHandler.bind(null, {
	exit: false
}));

process.stdin.resume();

module.exports = e;

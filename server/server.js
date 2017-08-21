'use strict';

// NPM dependencies.
var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    sequelize = require('sequelize'),
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    path = require('path'),
    cors = require('cors');

// App related modules.
var hookJWTStrategy = require('./services/passportStrategy');

// Initializations.
var app = express();

// Parse as urlencoded and json.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Run the app by serving the static files
// in the dist directory

app.use(cors());

app.use(express.static(__dirname + '/../dist'));

// Hook up the HTTP logger.
app.use(morgan('dev'));

// Hook up Passport.
app.use(passport.initialize());

// Hook the passport JWT strategy.
hookJWTStrategy(passport);


// Bundle API routes.
app.use('/api', require('./routes/api')(passport));

// Catch all route.
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

// Start the server.
app.listen('8080', function() {
    console.log('http://localhost:8080/');
});

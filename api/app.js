/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('../config/environment');
const path = require('path');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
console.log('config.mongo.uri', config.mongo.uri);

// var mongoosePromise = mongoose.connect(config.mongo.uri, config.mongo.options, function(err, conn){
//   console.log('err', err);
// });
let MongoosePromise = new Promise(function(resolve, reject){
  mongoose.connect(config.mongo.uri, function(err, db) {
      if (err) {
          console.log('Unable to connect to the server. Please start the server. Error:', err);
          reject(err);
      } else {
          console.log('Connected to Server successfully!');
          resolve();
      }
  });
})

// Setup server
const app = express();
const server = require('http').createServer(app);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
require('../config/express')(app);
require('./routes')(app); 

MongoosePromise.then(function() {
    server.listen(config.port, config.ip, function () {
      console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
    });
});

// Expose app
exports = module.exports = app;

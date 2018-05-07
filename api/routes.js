/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function(app) {

    //Utility Routes
    app.use('/auth', require('./auth'));
    
    // API Routes
    app.use('/api/dashboards', require('./services/dashboard'));
    app.use('/api/users', require('./services/user'));

    //Static Routes
    app.get('/app', function(req, res){
      res.render('app');
    })

    app.use('/', require('./services/landing-page'));

};

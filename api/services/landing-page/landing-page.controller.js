'use strict';

const _ = require('lodash');
const uuid = require('uuid');

exports.index = function(req, res) {
    return res.status(200).render('landing-page');
};
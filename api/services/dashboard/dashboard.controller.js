'use strict';

var passport = require('passport');
var config = require('../../../config/environment');
var jwt = require('jsonwebtoken');
const _ = require('lodash');

exports.index = function(req, res) {
    // We're just going to return a bunch of stats. 
    // I really don't know another way to do it.
    return res.status(200).json({
        news: [
            {
                "_id":"12345",
                "headline":"New Feature",
                "story":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis tortor a tellus elementum rutrum. Etiam ac mauris nec velit maximus pretium. Vivamus tempor sem magna, sed bibendum enim lobortis eget. Phasellus at viverra sapien, ut accumsan odio. Vestibulum quis convallis odio.",
                "link": "http://thisisthelink.com"
            }
        ]
    })
};
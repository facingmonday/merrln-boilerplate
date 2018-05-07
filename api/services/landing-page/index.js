var express = require('express');
var controller = require('./landing-page.controller');

var router = express.Router();

router.get('/', controller.index);

module.exports = router;
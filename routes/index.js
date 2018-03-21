var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function (req, res, next) {
  res.sendFile('index.html', { root: path.join(__dirname, '../dist') });
});

module.exports = router;
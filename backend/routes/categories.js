const express = require('express');
const categories = express.Router();

//access all candidates
categories.get('/', function(req, res, next) {
  res.json({})
});
categories.get('/:category_id', function(req, res, next) {
  res.json({})
});

module.exports = categories;

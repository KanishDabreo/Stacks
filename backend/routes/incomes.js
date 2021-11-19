const express = require('express');
const incomes = express.Router();

//access all income streams
incomes.get('/', function(req, res, next) {
  res.json({})
});
incomes.get('/:income_id', function(req, res, next) {
  res.json({})
});

module.exports = incomes;

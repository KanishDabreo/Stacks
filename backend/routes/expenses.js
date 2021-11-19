const express = require('express');
const expenses = express.Router();

//access all expenses
expenses.get('/', function(req, res, next) {
  res.json({})
});
expenses.get('/:expense_id', function(req, res, next) {
  res.json({})
});
module.exports = expenses;

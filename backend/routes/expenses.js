const express = require('express');
const expenses = express.Router();

//access all expenses
// expenses.get('/', function(req, res, next) {
//   res.json({})
// });
// expenses.get('/:expense_id', function(req, res, next) {
//   res.json({})
// });
// module.exports = expenses;

module.exports = (db) => {
  router.get("/:expense_id", (req, res) => {
    db.query(`SELECT * FROM expenses;`)
    .then(data => {
      const expenses = data.rows;
      res.json({ expenses });
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });
  return router;
  }
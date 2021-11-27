const express = require('express');
const incomes = express.Router();

//access all income streams
module.exports = (db) => {

  incomes.get('/', (req, res) => {
    const user_id = req.body;
    console.log(req.body);
    db.query(`SELECT * FROM income;`)
    .then(data => {
      const incomes = data.rows;
      res.json({ incomes })
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  incomes.get('/:user_id', (req, res) => {
    const user_id = req.params.user_id;
    db.query(`SELECT *, income.income_desc AS income_desc, income_type.income_desc AS income_type FROM income JOIN income_type ON income_type.id = income.income_type_id WHERE user_id = $1 ORDER BY date_created DESC;`, [user_id])
    .then(data => {
      const incomes = data.rows;
      res.json({ incomes })
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  incomes.get('/:income_id', function(req, res, next) {
    res.json({})
  });

  return incomes;
}

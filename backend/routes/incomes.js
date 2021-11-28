const express = require('express');
const incomes = express.Router();

module.exports = (db) => {
  
  //access all income streams
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

  incomes.get('/transactions/:user_id', (req, res) => {
    const user_id = req.params.user_id;
    db.query(`SELECT *, income.income_desc AS income_type FROM income JOIN income_type ON income_type.id = income.income_type_id WHERE user_id = $1 ORDER BY date_created DESC;`, [user_id])
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

  incomes.post('/', async (req, res) => {
    const {user_id, incomeAmt, incomeType, incomeDate} = req.body;
    console.log('hello')
    console.log("++++++++income+++++++++",user_id, incomeAmt, incomeType, incomeDate);
      // income (date_created, income_type_id, income_desc, income_amt, user_id)
    let queryString = `INSERT INTO income (date_created, income_amt, user_id, income_type_id, income_desc) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    let queryParams = [incomeDate, incomeAmt, user_id, incomeType, ''];
    db.query(queryString, queryParams)
      .then(() => {
        res.status(200).json({success: true});
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      })
  });

  incomes.get('/:income_id', function(req, res) {
    res.json({})
  });

  incomes.get("/add/:user_id", (req, res) => {
    let queryString2 = `SELECT SUM(income_amt) FROM income WHERE user_id=$1;`;
    let queryParams2 = [req.params.user_id];
    db.query(queryString2, queryParams2)
      .then(data => {
        console.log("data:", data);
        res.json({ total: data.rows[0].sum });
      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return incomes;
}

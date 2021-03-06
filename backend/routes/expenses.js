const express = require('express');
const expenses = express.Router();

module.exports = (db) => {

  //access all expenses
  expenses.get('/', (req, res) => {
    const user_id = req.body;
    console.log(req.body);
    db.query(`SELECT * FROM expenses;`)
    .then(data => {
      const expenses = data.rows;
      res.json({ expenses })
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });
  
  expenses.get('/transactions/:user_id', (req, res) => {
    const user_id = req.params.user_id;
    db.query(`SELECT *, expenses_type.expense_desc AS expenses_name FROM expenses JOIN expenses_type ON expenses_type.id = expenses.expenses_type WHERE user_id = $1 ORDER BY expense_date DESC;`, [user_id])
    .then(data => {
      const expenses = data.rows;
      res.json({ expenses })
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  expenses.post('/', async (req, res) => {
    const {user_id, expAmt, expType, expDate} = req.body;
    console.log("jsgjhskgh/*/*/*/*/*/*/*", user_id, expAmt, expType, expDate);

    let queryString = `INSERT INTO expenses (expense_date, expense_amt, user_id, expenses_type) VALUES ($1, $2, $3, $4) RETURNING *`;
    let queryParams = [expDate, expAmt, user_id, expType];
    db.query(queryString, queryParams)
      .then(() => {
        res.status(200).json({success: true});
      })
      .catch((err) => {
        res.send(err);
      })
  });

  expenses.get("/add/:user_id", (req, res) => {
    let queryString2 = `SELECT SUM(expense_amt) FROM expenses WHERE user_id=$1;`;
    let queryParams2 = [req.params.user_id];
    console.log('***/*/*/*/*/*/*/*/*/*//*', queryParams2)
    db.query(queryString2, queryParams2)
      .then(data => {
        const total = data.rows[0].sum;
        res.json({ total });
      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  expenses.get("/type/:user_id", (req, res) => {
    let queryString = `SELECT expenses_type.expense_desc AS expenses_name, SUM(expense_amt) FROM expenses JOIN expenses_type ON expenses_type.id = expenses.expenses_type WHERE user_id=$1 GROUP BY expenses_name;`;
    db.query(queryString, [req.params.user_id])
      .then(data => {
        const expenses = data.rows;
        res.json({ expenses })
      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return expenses;
}
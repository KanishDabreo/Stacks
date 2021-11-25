const express = require('express');
const router = express.Router();

module.exports = (db) => {

  //access all expenses
  router.post('/', async (req, res) => {
    const {expAmt, expType, expDate} = req.body;
    console.log(expAmt, expType, expDate);

    let queryString = `INSERT INTO expenses (expense_amt, expenses_type, expense_date) VALUES ($1, $2, $3) RETURNING *`;
    let queryParams = [expAmt, expType, expDate];
    db.query(queryString, queryParams)
      .then(() => {
        res.status(200).json({success: true});
      })
      .catch((err) => {
        res.send(err);
      })
  });
  return router;

}
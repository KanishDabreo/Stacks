const express = require('express');
const router = express.Router();

module.exports = (db) => {

  //access all expenses
  router.post('/', async (req, res) => {
    const {userid, expAmt, expType, expDate} = req.body;
    console.log(userid, expAmt, expType, expDate);

    let queryString = `INSERT INTO expenses (expense_date, expense_amt, user_id, expenses_type) VALUES ($1, $2, $3, $4) RETURNING *`;
    let queryParams = [expDate, expAmt, userid, expType];
    db.query(queryString, queryParams)
      .then(() => {
        res.status(200).json({success: true});
      })
      .catch((err) => {
        res.send(err);
      })
  });

  router.get("/:userid", (req, res) => {
    let queryString2 = `SELECT SUM(expense_amt) FROM expenses WHERE user_id=$1;`;
    let queryParams2 = [req.params.userid];
    db.query(queryString2, queryParams2)
      .then(data => {
        console.log("data:", data);
        res.json({ pizza: data.rows[0].sum });
      })
      .catch(err => {
        console.log(err)
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;

}
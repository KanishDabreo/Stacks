// const express = require('express');
// const incomes = express.Router();

// //access all income streams
// // incomes.get('/', function(req, res, next) {
// //   res.json({})
// // });
// // incomes.get('/:income_id', function(req, res, next) {
// //   res.json({})
// // });

// module.exports = incomes;

// router.get("/:user_id", (req, res) => {
//   db.query(`SELECT income.income_type_id, income.income_desc, income.income_amt
//   WHERE users_id = {user_id};`)
//   .then(data => {
//     const users = data.rows;
//     res.json({ users });
//   })
//   .catch(err => {
//     res
//     .status(500)
//     .json({ error: err.message });
//   });
// });
// return router;
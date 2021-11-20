const express = require('express');
const users = express.Router();

//user dashboard
// users.get('/', function (req, res, next) {
//   const users = [
//     { name: "exampleUser", email: "exampleUser@gmail.com" }, { name: "user2", email: "user2@gmail.com" }
//   ]

//   res.json({})

module.exports = (db) => {
router.get("/", (req, res) => {
  db.query(`SELECT * FROM users;`)
  .then(data => {
    const users = data.rows;
    res.json({ users });
  })
  .catch(err => {
    res
    .status(500)
    .json({ error: err.message });
  });
});
return router;
}
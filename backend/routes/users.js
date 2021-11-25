const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');
// const cookieSession = require('cookie-session');

module.exports = (db) => {
//   outer.use(cookieSession({
//     name: 'session',
//     keys: ['key1', 'key2'],
//   }));

//user dashboard
// users.get('/', function (req, res, next) {
//   const users = [
//     { name: "exampleUser", email: "exampleUser@gmail.com" }, { name: "user2", email: "user2@gmail.com" }
//   ]

//   res.json({})

router.get("/user_id", (req, res) => {
  db.query(`SELECT users.name, users.email, users.avatar_url
  WHERE users.id = 1;`)
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

const express = require('express');
const router = express.Router();
// const bcrypt = require('bcrypt');
// const cookieSession = require('cookie-session');

module.exports = (db) => {
  // outer.use(cookieSession({
  //   name: 'session',
  //   keys: ['key1', 'key2'],
  // }));

//user dashboard
// users.get('/', function (req, res, next) {
//   const users = [
//     { name: "exampleUser", email: "exampleUser@gmail.com" }, { name: "user2", email: "user2@gmail.com" }
//   ]

//   res.json({})

router.get("/user_id", (req, res) => {
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

// SELECT users.name, users.email, users.avatar_url, count
// JOIN followers f ON f.follower_user_id = users.id
// JOIN followers f2 ON f2.user_id = users.id
// JOIN content_posts on content_posts.user_id = users.id
// WHERE users.id = 1
// GROUP BY users.username, users.profile_picture_url;`
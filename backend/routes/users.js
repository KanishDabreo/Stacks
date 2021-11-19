const express = require('express');
const users = express.Router();

//user dashboard
users.get('/', function (req, res, next) {
  const users = [
    { name: "exampleUser", email: "exampleUser@gmail.com" }, { name: "user2", email: "user2@gmail.com" }
  ]

  res.json({})
});
users.get('/:user_email', function (req, res, next) {
  const users = [{ name: "exampleUser", email: "exampleUser@gmail.com" }]
  res.json({})
});

module.exports = users;

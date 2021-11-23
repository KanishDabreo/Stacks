const express = require('express');
const router = express.Router();

//user dashboard

// users.get('/', function (req, res, next) {
//   const users = [
//     { name: "exampleUser", email: "exampleUser@gmail.com" }, { name: "user2", email: "user2@gmail.com" }
//   ]

//   res.json({})
const routers = function (pool) {

router.get("/:email", function(req, res, next){
  const queryOutput =`SELECT * FROM users;`
  console.log(queryOutput);
  return pool.query(queryOutput)
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

//export 
module.exports = { routers };
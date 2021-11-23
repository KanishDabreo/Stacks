const express = require('express');
const categories = express.Router();

//access all candidates
// categories.get('/', function(req, res, next) {
//   res.json({})
// });
// categories.get('/:category_id', function(req, res, next) {
//   res.json({})
// });

// module.exports = categories;

module.exports = (db) => {
  router.get("/:category_id", (req, res) => {
    db.query(`SELECT * FROM categories;`)
    .then(data => {
      const categories = data.rows;
      res.json({ categories });
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });
  return router;
  }
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const cookieSession = require('cookie-session');

module.exports = (db) => {

  router.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
  }));

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

  router.post("/register", async (req, res) => {

    const {name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      res.send('Password confirmation does not match');
      return;
    } else {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);

        let queryString = `INSERT INTO users (name, email, password, avatar_url) VALUES ($1, $2, $3, $4) RETURNING *`;
        let queryParams = [name, email, hashedPassword, 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png'];

        return db
          .query(queryString, queryParams)
          .catch((err) => err);
      } catch (error) {
        res.status(500).send();
      }
    }
  }); 

  router.post("/login", async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const user = users.find(user => user.email == email);

    // Check if user exists in DB
    if (!user) {
      return res.status(400).send('User does not exist');
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        res.send("Success");
      } else {
        res.send("Invalid username or password");
      }
    } catch (error) {
      res.status(500).send();
    }
  });

  return router;
}
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

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

  router.post("/register", async (req, res) => {
    console.log(req.body);
    const {name, email, password, confirmPassword } = req.body;
    if(password !== confirmPassword) {
      return res.status(400).send('Password does not match Confirmation Password');
    }
    let queryString = `INSERT INTO users (name, email, password, avatar_url) VALUES ($1, $2, $3, $4) RETURNING *`;
    let queryParams = [name, email, password, 'url'];
    let queryCheckString = `SELECT COUNT(*) FROM users WHERE name = $1 OR email = $2`;
    let queryCheckParams = [name, email];
    let count = await db.query(queryCheckString, queryCheckParams)
      .then((data) => {
        return data.rows[0].count;
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
    if(count !== "0") {
      return res.status(400).send('There already exists an account with this name or email');
    }
    db.query(queryString, queryParams)
      .then(() => {
        //const hashedPassword = await bcrypt.hash(password, 10);
        return res.status(201).send('Account Created');
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
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
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
      console.log(db);
      let queryString = `INSERT INTO users (name, email, password, avatar_url) VALUES ($1, $2, $3, $4)`;
      let queryParams = [name, email, password];
      return db
        .query(queryString, queryParams)
        .catch((err) => err);
    if (password === confirmPassword) {
      // Check if user with the same email is already registered
      if (users.find(user => user.email === email)) {
        res.status(400).send('User already registered.'); //400 error
        return;       
      } else {
        try {
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = { email: email, password: hashedPassword };
    
          users.push(user);
          res.status(201).send();
        } catch (error) {
          res.status(500).send();
        }
      }
    } else {
      res.send('Password does not match')
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
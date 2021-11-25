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

    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      errors.push({ message:'Passwords do not match.' });
      return;
    } else {
      try {  
        const hashedPassword = await bcrypt.hash(password, 10);
        
        let queryString = `INSERT INTO users (name, email, password, avatar_url) VALUES ($1, $2, $3, $4) RETURNING *`;
        let queryParams = [ name, email, hashedPassword, 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png' ];

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

    db.query(`SELECT * FROM users WHERE email = $1;`, [email])
    .then(async data => {
      console.log(data.rows[0].password);
      const user = data.rows[0];
      // Check if user exists in DB        
        if (!user) {
          return res.status(400).send('User does not exist');
        } else {
          try {
            if (await bcrypt.compare(password, user.password)) {
              res.send(user);
            } else {
              res.send("Invalid username or password");
            }
          } catch (error) {
            res.status(500).send();
          }
        }   
      })

  });

  return router;
}
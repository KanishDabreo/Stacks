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

    let errors = [];

    if (!name || !email || !password || !confirmPassword) {
      errors.push({ message: "Please, fill out all fields." });
    }

    if (password !== confirmPassword) {
      errors.push({ message:'Passwords do not match.' });
      return;
    } else {
      try {
        // const salt = await bcrypt.genSalt(10);    
        // const hashedPassword = await bcrypt.hash(password, salt);

        let queryString = `INSERT INTO users (name, email, password, avatar_url) VALUES ($1, $2, $3, $4) RETURNING *`;
        let queryParams = [ name, email, password, 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png' ];

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

    const salt = await bcrypt.genSalt(10);
    
    // const hashedPassword = await bcrypt.hash(password, salt);
    // console.log(hashedPassword);
    db.query(`SELECT * FROM users WHERE email = $1;`, [email])
    .then(async data => {
      console.log(data.rows[0].password);
      const user = data.rows[0];
      const password = user.password;
      console.log(user.name);
      // Check if user exists in DB        
        if (!user) {
          return res.status(400).send('User does not exist');
        } else {
          try {
            if (user.password === password) {
              res.send(user.name);
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
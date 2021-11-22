const express = require('express');
const router = express.Router();


module.exports = () => {
  console.log("kfs392039rwerj_____________");

  router.get("/authenticate");

  router.post("/login", (req, res) => {
    console.log(req.body);
    res.send("sldksldkflskdfLOGIN");
  });

  router.get("/register", (req, res) => {
    console.log(req.body);
    res.send("sldksldkflskdf");
  });
  
  return router;
  }
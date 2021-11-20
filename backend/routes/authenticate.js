const express = require('express');
const router = express.Router();


module.exports = (db) => {
  
  router.get("/authenticate");
  router.post("/login");
  router.post("/register");
  
  return router;
  }
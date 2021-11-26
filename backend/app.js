const PORT = process.env.PORT || 8080;
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();

// Connect db
const { Pool } = require('pg');
const dbParams = require('./pg');
const db = new Pool(dbParams);

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Separated Routes for each Resource
const usersRouter = require("./routes/users");
const expensesRouter = require("./routes/expenses");
const incomesRouter = require("./routes/incomes");
const authenticateRouter = require("./routes/authenticate");

app.use("/api/users", usersRouter);
app.use("/api/expenses", expensesRouter);
app.use("/api/incomes", incomesRouter(db));
app.use("/api/auth", authenticateRouter(db));


// Test:
app.get("/",(req, res) => {
  res.send("hello world")
})

app.get('/test', function(req, res) {
  res.send('test....!')
});

app.listen(PORT, () => {
  console.log(`Stacks app listening on port ${PORT}`);
});
module.exports = app;
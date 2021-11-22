const PORT = process.env.PORT || 8080;
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const usersRouter = require("./routes/users");
const expensesRouter = require("./routes/expenses");
const incomesRouter = require("./routes/incomes");
const categoriesRouter = require("./routes/categories");
const authenticateRouter = require("./routes/authenticate");

app.use("/api/users", usersRouter);
app.use("/api/expenses", expensesRouter);
app.use("/api/incomes", incomesRouter);
app.use("/api/categories", categoriesRouter);

app.use("/api/authenticate", authenticateRouter);
app.get("/api/authenticate");
app.post("/api/login");
app.post("/api/register");

app.use("/api/users", usersRouter);
app.use("/api/expenses", expensesRouter);
app.use("/api/incomes", incomesRouter);
app.use("/api/categories", categoriesRouter);

app.get("/",(req, res) => {
  res.send("hello world")
})

app.get('/test', function(req, res) {
  res.send('test....!')
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
module.exports = app;
DROP TABLE IF EXISTS expenses CASCADE;
CREATE TABLE expenses (
  id SERIAL PRIMARY KEY NOT NULL,
  expense_date TIMESTAMP NOT NULL,
  expense_amt INT NOT NULL,
  user_id INT REFERENCES users(id) DELETE CASCADE,
  expenses_type INT REFERENCES expenses_type(id) DELETE CASCADE
);
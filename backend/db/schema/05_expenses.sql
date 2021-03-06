DROP TABLE IF EXISTS expenses CASCADE;
CREATE TABLE expenses (
  id SERIAL PRIMARY KEY NOT NULL,
  expense_date DATE NOT NULL,
  expense_amt INT NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  expenses_type INT REFERENCES expenses_type(id) ON DELETE CASCADE
);
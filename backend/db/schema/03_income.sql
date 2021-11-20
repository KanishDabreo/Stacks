DROP TABLE IF EXISTS income CASCADE;
CREATE TABLE income (
  id SERIAL PRIMARY KEY NOT NULL,
  date_created TIMESTAMP NOT NULL,
  income_type_id INT REFERENCES income_type(id) ON DELETE CASCADE,
  income_desc TEXT NOT NULL,
  income_amt INT NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE
);
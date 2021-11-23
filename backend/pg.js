const { Pool } = require('pg')

const client = new Pool({
  host: 'localhost',
  user: 'labber',
  database: 'final',
  password: 'labber',
  port: 5432
});

client.connect();

client.query('SELECT * from users', (err, res) => {
  if(!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
})
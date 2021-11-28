import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

export default function Deposits({totalIncome, totalExpenses}) {
  function withCommas(num) {
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  const diff = totalIncome - totalExpenses;
  const netIncome = diff > 0 ? "$ " + withCommas(diff) : "- $ " + withCommas(diff*-1);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  let today  = new Date();
  let date = today.toLocaleDateString("en-US", options);

  function preventDefault(event) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <Title>Net Income</Title>
      <Typography component="p" variant="h4">
        {netIncome}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {date}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View statement
        </Link>
      </div>
    </React.Fragment>
  );
}
import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

export default function Deposits({totalIncome, totalExpenses}) {
  
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD',
  });

  const netIncome = totalIncome - totalExpenses;

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
        {formatter.format(netIncome)}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on {date}
      </Typography>
    </React.Fragment>
  );
}
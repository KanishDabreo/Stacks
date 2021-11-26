import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits(props) {
  return (
    <React.Fragment>
      <Title>Total Expenses</Title>
      <Typography component="p" variant="h4">
        ${props.count}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {/*on 02, December 2021*/}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View statement
        </Link>
      </div>
    </React.Fragment>
  );
}
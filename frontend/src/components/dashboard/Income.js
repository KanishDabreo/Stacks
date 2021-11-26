import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Income Data
function createData(id, date, name, type, amount) {
  return { id, date, name, type, amount };
}

const rows = [
  createData(
    0,
    '19 Oct, 2021',
    'Biweekly Salary',
    'Salary',
    3548.15,
  ),
  createData(
    1,
    '27 Oct, 2021',
    'Bitcoin',
    'Interest',
    216.99,
  ),
  createData(
    3,
    '02 Nov, 2021',
    'Repay',
    'Other',
    350.50,
  ),
  createData(
    4,
    '27 Nov, 2021',
    'Biweekly Salary',
    'Salary',
    3548.15,
  ),
  createData(
    5,
    '30 Nov, 2021',
    'Freelance Project',
    'Freelance',
    3212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Income() {
  return (
    <React.Fragment>
      <Title>Recent Income</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell align="right">Total Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more income
      </Link>
    </React.Fragment>
  );
}

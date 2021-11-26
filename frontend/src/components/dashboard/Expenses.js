import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Expenses Data
function createData(id, date, name, type, amount) {
  return { id, date, name, type, amount };
}

const rows = [
  createData(
    0,
    '12 Oct, 2021',
    'Monthly Groceries',
    'Groceries',
    312.44,
  ),
  createData(
    1,
    '25 Oct, 2021',
    'Coffee',
    'Entertainment',
    16.99,
  ),
  createData(
    3,
    '11 Nov, 2021',
    'Clothes for kids',
    'Clothing',
    654.39,
  ),
  createData(
    4,
    '20 Nov, 2021',
    'Gas',
    'Transportation',
    212.79,
  ),
  createData(
    5,
    '25 Nov, 2021',
    'Rent',
    'Housing',
    3212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Expenses() {
  return (
    <React.Fragment>
      <Title>Recent Expenses</Title>
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
        See more expenses
      </Link>
    </React.Fragment>
  );
}

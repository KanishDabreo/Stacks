import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { getUser } from '../../utils/userAuth';
import axios from 'axios';
import { useEffect, useState } from 'react';



export default function Expenses() {

  const [expenses, setExpenses] = useState([]);
  
  function preventDefault(event) {
    event.preventDefault();
  }
  const user = getUser();

  const expensesData = async () => {
    const userId = user.id;
    console.log(userId)
    const incomeURL = `http://localhost:8080/api/expenses/transactions/${userId}`;

    try {
      const { data } = await axios.get(incomeURL);
      console.log("+++++++++++", data);
      setExpenses([...data.expenses])
    } catch (error) {
      console.log("error: =========", error );
    }
  }

  useEffect(() => {
    expensesData();
  }, []);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(date).toLocaleDateString(undefined, options)
  }

  return (
    <>
      <Title>Recent Expenses</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Type</TableCell>
            <TableCell align="right">Total Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{formatDate(row.expense_date)}</TableCell>
              <TableCell>{row.expense_desc}</TableCell>
              <TableCell align="right">{`$${row.expense_amt}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more expenses
      </Link>
    </>
  );
}

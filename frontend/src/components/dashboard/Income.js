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

export default function Income() {

  const [incomes, setIncomes] = useState([]);
  
  function preventDefault(event) {
    event.preventDefault();
  }
  const user = getUser();
  const userId = user.id;

  const incomeData = async () => {
    console.log(userId)
    const incomeURL = `http://localhost:8080/api/incomes/transactions/${userId}`;

    try {
      const { data } = await axios.get(incomeURL);
      console.log("+++++++++++", data);
      setIncomes([...data.incomes])
    } catch (error) {
      console.log("error: =========", error );
    }
  }

  useEffect(() => {
    incomeData();
  }, []);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(date).toLocaleDateString(undefined, options)
  }


  return (
    <>
      <Title>Recent Income</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Type</TableCell>
            <TableCell align="right">Total Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incomes.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{formatDate(row.date_created)}</TableCell>
              <TableCell>{row.income_desc}</TableCell>
              <TableCell align="right">{`$${row.income_amt}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="/expenses" onClick={preventDefault} sx={{ mt: 3 }}>
        Add more income
      </Link>
    </>
  );
}

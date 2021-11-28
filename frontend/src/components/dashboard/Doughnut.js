import React from 'react';
import { PieChart, Pie } from 'recharts';
import { getUser } from '../../utils/userAuth';
//import axios from 'axios';
//import { useEffect, useState } from 'react';

export default function Doughnut(props) {
  // const [expenses, setExpenses] = useState([]);

  const user = getUser();

  const staticData = [
    {name: 'Geeksforgeeks', value: 400},
    {name: 'Technical scripter', value: 700},
    {name: 'Geek-i-knack', value: 200},
    {name: 'Geek-o-mania', value: 1000}
  ];

  // const expensesData = async () => {
  //   const userId = user.id;
  //   const incomeURL = `http://localhost:8080/api/expenses/type/${userId}`;
  //   try {
  //     const { data } = await axios.get(incomeURL);
  //     console.log('banana');
  //     console.log("+++++++++++", data);
  //     setExpenses([...data.expenses]);
  //   } catch (error) {
  //     console.log("error: =========", error );
  //   }
  // }

  // useEffect(() => {
  //   expensesData();
  // }, []);

  // function formatRow(row) {
  //   const res = {name: row.expenses_name, value: row.sum};
  //   console.log('banana1 ' + res.name + "\t" + res.value);
  //   return res;
  // }

  // const format = (rows) => {
  //   const res = rows.map(formatRow);
  //   console.log('banana3', res);
  //   return res;
  // };



  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <PieChart width={800} height={800}>
      <Pie
        //data={format(expenses)}
        data={props.expenses}
        dataKey="value"
        label="name"
        innerRadius={125}
        outerRadius={250}
        fill="green"
      />
    </PieChart>
  );
}

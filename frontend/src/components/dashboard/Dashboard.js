import './Dashboard.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Doughnut from './Doughnut';
import Amount from './Amount';
import Expenses from './Expenses';
import Income from './Income';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getUser } from '../../utils/userAuth';
import Title from './Title';
import Typography from '@mui/material/Typography';

const mdTheme = createTheme();

function DashboardContent() {
  const user = getUser();
  const [ expenses, setExpenses ] = useState([]);
  const [ totalExpenses, setTotalExpenses ] = useState('');
  const [ totalIncome, setTotalIncome ] = useState('');
  const userId = user.id;

  useEffect(() => {
    if (userId) {
    const sumDataURL = `http://localhost:8080/api/expenses/add/${userId}`;
    axios.get(sumDataURL).then((res) => {
      console.log(res.data);
      const totalCountExp = res.data.total;
      //use state totalExpenses
      setTotalExpenses(totalCountExp);
      })
    }
  }, [user])

  useEffect(() => {
    if (userId) {
    const sumDataURL = `http://localhost:8080/api/incomes/add/${userId}`;
    axios.get(sumDataURL).then((res) => {     
      console.log(res.data);
      const totalCountInc = res.data.total;
      //use state totalIncome
      setTotalIncome(totalCountInc);   
      })
    }
  }, [user])

  useEffect(() => {
    const expensesData = async () => {      
      const COLORS = ["#FADBD8", "#EBDEF0", "#A3E4D7", "#ABEBC6", "#F8BBD0",  "#C5CAE9", "#80DEEA", "#BBDEFB", "#FFF9C4", "#DCEDC8", "#FFCDD2"]
      const incomeURL = `http://localhost:8080/api/expenses/type/${userId}`;
      try {
        const { data } = await axios.get(incomeURL);
        console.log('banana');
        console.log("+++++++++++", data);

        function formatRow(row, index) {
          const res = {name: row.expenses_name, value: Number(row.sum), fill: COLORS[index]};
          return res;
        }
      
        const format = (rows, index) => {
          const res = rows.map(formatRow, index);
          return res;
        };

        setExpenses([...format(data.expenses)]);
      } catch (error) {
        console.log("error: =========", error );
      }
    }
    expensesData();
  }, [])

  function withCommas(num) {
    return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  let today  = new Date();
  let date = today.toLocaleDateString("en-US", options);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />        
        <Box
          component="main"
          sx={{            
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>           
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 740,
                  }}
                >
                    <Title>Total Expenses</Title>
                    <Typography component="p" variant="h4">
                      $ {withCommas(totalExpenses)} 
                      <Typography color="text.secondary" sx={{ flex: 1 }}>
                        {date}
                      </Typography>
                    </Typography>
                   <Doughnut expenses={expenses}/>
                </Paper>
              </Grid>
              {/* Recent Amount */}
              <Grid item xs={6} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 740
                  }}
                >
                  <Amount totalExpenses={totalExpenses} totalIncome={totalIncome} />
                </Paper>
              </Grid>
              {/* Recent Expenses */}
              <Grid item xs={6}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Income />
                </Paper>
              </Grid>
              {/* Recent Income */}
              <Grid item xs={6}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Expenses />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  
  return (
    <DashboardContent />
  )
}
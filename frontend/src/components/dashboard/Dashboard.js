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
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getUser } from '../../utils/userAuth';

const mdTheme = createTheme();

function DashboardContent() {
  const user = getUser();
  //const [ user, setUser ] = useState({});
  const { count, setCount } = useContext(Context);
  const [ expenses, setExpenses ] = useState([]);
  const navigate = useNavigate();
  //const navigate = useNavigate();
  //console.log(count);

  // useEffect(() => {
  //   const userString = localStorage.getItem("userSession")
  //   if (!userString) {
  //     navigate("/login");
  //   }
  //   const userObject = JSON.parse(userString);
  //   setUser(userObject);
  // }, [navigate])

  useEffect(() => {
    if (user.id) {
    const sumDataURL = `http://localhost:8080/api/expenses/add/${user.id}`;
    axios.get(sumDataURL).then((res) => {
      console.log(res.data);
      const totalCountExp = res.data.total;
      //use state totalExpenses
      setTotalExpenses(totalCountExp);
      })
    }
  }, [user])

  useEffect(() => {
    if (user.id) {
    const sumDataURL = `http://localhost:8080/api/incomes/add/${user.id}`;
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
      const userId = user.id;
      const incomeURL = `http://localhost:8080/api/expenses/type/${user.id}`;
      try {
        const { data } = await axios.get(incomeURL);
        console.log('banana');
        console.log("+++++++++++", data);

        function formatRow(row) {
          const res = {name: row.expenses_name, value: Number(row.sum)};
          console.log('banana1 ' + res.name + "\t" + res.value);
          return res;
        }
      
        const format = (rows) => {
          const res = rows.map(formatRow);
          console.log('banana3', res);
          return res;
        };

        setExpenses([...format(data.expenses)]);
      } catch (error) {
        console.log("error: =========", error );
      }
    }
    expensesData();
  }, [])

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
                    height: 240,
                  }}
                >
                   <Doughnut 
                   expenses={expenses}/>
                </Paper>
              </Grid>
              {/* Recent Amount */}
              <Grid item xs={6} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
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
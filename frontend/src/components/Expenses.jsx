import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import './expense.css';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../app-context';
import Income from './Incomes';
import { getUser } from '../utils/userAuth';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Expenses(props) {
  const [ expAmt, setExpAmt ] = useState("");
  const [ expType, setExpType ] = useState("");
  const [ expDate, setExpDate ] = useState("");
  const { count, setCount } = useContext(Context);
  const navigate = useNavigate();
  const user = getUser();
  const userId = user.id;

  useEffect(() => {
    if (user.id) {
    const sumDataURL = `http://localhost:8080/api/expenses/${userId}`;
    axios.get(sumDataURL).then((res) => {
      console.log(res.data);
      const totalCountExp = res.data.total;
      //use state count
     //setCount(totalCountExp);
      })
    }
  }, [user])

  const handleSubmit = async (event) => {
    event.preventDefault();

    const expData = { user_id: userId, expAmt, expType, expDate };
    const expURL = "http://localhost:8080/api/expenses/";

    try {
      console.log(expData);
      const { data } = await axios.post(expURL, expData);
      console.log(data);
      navigate('/dashboard');
    } catch (error) {
      console.log("error: ++++++++", 'There already exists an account with this name or email');
    }
  };

  return (
    <div className="expense-page">
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }} spacing={3}>
        <Grid item xs={3}>
          <Card style={{padding:"25px"}}>
            <h4>Enter your expense:</h4>
            <Form.Group as={Col} sm={5} controlId="formGridCity">
              <Form.Label>Amount</Form.Label>
                <Form.Control type="text" placeholder="ex. 1000" value={expAmt} onChange={(event) => setExpAmt(event.target.value)}/>
            </Form.Group>
            <Form.Group as={Col} sm={5} controlId="formGridState" value={expType} onChange={(event) => setExpType(event.target.value)}>
              <Form.Label>Type</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Select...</option>
                <option value="1">Groceries</option>
                <option value="2">Transportation</option>
                <option value="3">Utility</option>
                <option value="4">Phone</option>
                <option value="5">Housing</option>
                <option value="6">Pets</option>
                <option value="7">Travel</option>
                <option value="8">Clothing</option>
                <option value="9">Entertainment</option>
                <option value="9">Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} sm={5} controlId="formGridCity">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="ex. YYYY/MM/DD" value={expDate} onChange={(event) => setExpDate(event.target.value)}/>
            </Form.Group>
            <div className="count">
              {count}{setCount}
            </div>
            <div className="submit-button-container">
              <Button className="button" as={Col} sm={5} variant="success" type="submit" onClick={handleSubmit}>Submit</Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Income/>
        </Grid>
      </Grid> 
    </div>
  )
}
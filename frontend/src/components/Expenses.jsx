import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import './expense.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Expenses(props) {
  const [ expAmt, setExpAmt ] = useState("");
  const [ expType, setExpType ] = useState("");
  const [ expDate, setExpDate ] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const expData = { expAmt, expType, expDate };
    const expURL = "http://localhost:8080/api/expenses/";

    setExpAmt("");
    setExpType("");
    setExpDate("");

    try {
      console.log(expData);
      const { data } = await axios.post(expURL, expData);
      console.log(data);
      navigate('/expenses');
    } catch (error) {
      console.log("error: ++++++++", 'There already exists an account with this name or email');
    }
  };
  
  return (
    <div className="expense-page">
      <div className="expense-container">
      <h4>Please enter your expense details: </h4>
        <Row className="mb-3">
            <Form.Group as={Col} sm={3} controlId="formGridCity">
              <Form.Label>Amount</Form.Label>
                <Form.Control type="text" placeholder="ex. 1000" value={expAmt} onChange={(event) => setExpAmt(event.target.value)}/>
            </Form.Group>
            <Form.Group as={Col} sm={3} controlId="formGridState" value={expType} onChange={(event) => setExpType(event.target.value)}>
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
            <Form.Group as={Col} sm={3} controlId="formGridCity">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="ex. YYYY/MM/DD" value={expDate} onChange={(event) => setExpDate(event.target.value)}/>
            </Form.Group>
        </Row>
        <Button className="submit-button" variant="success" type="submit" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  )
}
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import './expense.css';
import { getUser } from '../utils/userAuth';

export default function AddExpenses(props) {
  const user = getUser();

  return (
    <div className="addexpense-page">
      <div>{user.name}</div>
      <h4>Please enter your income: </h4>
      <div class="income-container">
        <Row className="mb-3">
          <Form.Group as={Col} sm={2} controlId="formGridCity">
            <Form.Label>Amount</Form.Label>
              <Form.Control type="text" placeholder="1000" />
          </Form.Group>
          <Form.Group as={Col} sm={2} controlId="formGridState">
            <Form.Label>Type</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Select ...</option>
              <option value="1">Salary</option>
              <option value="2">Freelance</option>
              <option value="3">Commission</option>
              <option value="4">Gift</option>
              <option value="5">Interest</option>
              <option value="6">Investment</option>
              <option value="7">Pocket Money</option>
              <option value="8">Pension</option>
              <option value="9">Other</option>
            </Form.Select>
          </Form.Group>
        </Row>
      </div>
      <div class="expense-container">
      <h4>Please enter your expenses: </h4>
        <Row className="mb-3">
            <Form.Group as={Col} sm={2} controlId="formGridCity">
              <Form.Label>Amount</Form.Label>
                <Form.Control type="text" placeholder="1000" />
            </Form.Group>
            <Form.Group as={Col} sm={2} controlId="formGridState">
              <Form.Label>Type</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Select ...</option>
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
        </Row>
      </div>
      <div className="submit-button">
        <Button variant="success" type="submit">Submit</Button>
      </div>
    </div>
  )
}
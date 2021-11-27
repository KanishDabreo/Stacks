import React from 'react';
import incomes from '../../../backend/routes/incomes';
import { getUser } from '../utils/userAuth';
import './income.css';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../app-context';

export default function Incomes(props) {
  const [ user, setUser ] = useState({});
  const [ expAmt, setExpAmt ] = useState("");
  const [ expType, setExpType ] = useState("");
  const [ expDate, setExpDate ] = useState("");
  const { count, setCount } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const userString = localStorage.getItem("userSession")
    if (!userString) {
      navigate("/login");
    }
    const userObject = JSON.parse(userString);
    setUser(userObject);
  }, [navigate])

  useEffect(() => {
    if (user.id) {
    const sumDataURL = `http://localhost:8080/api/Incomes/add/${user.id}`;
    axios.get(sumDataURL).then((res) => {
      console.log(res.data);
      const totalCountExp = res.data.pizza;
      //use state count
      setCount(totalCountExp);
      })
    }
 }, [user])

  const handleSubmit = async (event) => {
    //event.preventDefault();

    const expData = { userid: user.id, expAmt, expType, expDate };
    const expURL = "http://localhost:8080/api/Incomes/";

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
            <div className="count">
              {count}{setCount}
            </div>
        </Row>
        <Button className="submit-button" variant="success" type="submit" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  )
}

// export default function incomes(props) {
//   const user = getUser();


//   const incomesAlert = () => {
//     return (
//       <artcle>
//       <div class="text-center">
//         <!-- Button HTML (to Trigger Modal) -->
//         <a href="#myModal" class="trigger-btn" data-toggle="modal">Click to Confirm</a>
//       </div>

//       <!-- Modal HTML -->
//         <div id="myModal" class="modal fade">
//           <div class="modal-dialog modal-confirm">
//             <div class="modal-content">
//               <div class="modal-header">
//                 <div class="icon-box">
//                   <i class="material-icons">&#xE876;</i>
//                 </div>				
//                 <h4 class="modal-title">Income Added!</h4>	
//               </div>
//               <div class="modal-body">
//                 <p class="text-center">Your income details have been confirmed. Check your email for detials.</p>
//               </div>
//               <div class="modal-footer">
//                 <button class="btn btn-success btn-block" data-dismiss="modal">OK</button>
//               </div>
//             </div>
//           </div>
//           </div>     
//       </artcle>
//     )
//   }

// 	return (
//     <form>
//       <div class="input-group mb-3">
//         <div class="input-group-prepend">
//           <label class="input-group-text" for="inputGroupSelect01">Income Type</label>
//         </div>
//         <select class="custom-select" id="inputGroupSelect01">
//           <option selected>Choose...</option>
//           <option value="1">Investments</option>
//           <option value="2">Employment</option>
//           <option value="3">Freelance</option>
//           <option value="4">Grants/Scolarship</option>
//         </select>

//         <div class="custom-file">
//           <input type="file" class="custom-file-input" id="inputGroupFile02">
//           <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Invoice</label>
//           </input>
//         </div>
//         <div class="input-group-append">
//           <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
//         </div>
//         <div class="input-group">
//             <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
//             </input>
//           <div class="input-group-append">
//             <span class="input-group-text">$</span>
//             <span class="input-group-text">0.00</span>
//           </div>
//         </div>
//         <div class="input-group">
//           <div class="input-group-prepend">
//             <span class="input-group-text">Description</span>
//           </div>
//           <textarea class="form-control" aria-label="With textarea"></textarea>
//         </div>
//         <div>
//           <input type="radio" name="gender" id="male"></input>
//           <label for="male">Deposted</label>
//           <input type="radio" name="gender" id="female"></input>
//           <label for="female">Pending</label>
//         </div>
//       </div>
//     </form>
// 	);
// };

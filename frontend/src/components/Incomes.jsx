import React from 'react';
import './income.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../app-context';
import { getUser } from '../utils/userAuth';
import Card from '@mui/material/Card';

export default function Income(props) {
  const [ incomeAmt, setincomeAmt ] = useState("");
  const [ incomeType, setincomeType ] = useState("");
  const [ incomeDate, setincomeDate ] = useState("");
  const { count, setCount } = useContext(Context);


  const user = getUser();
  const userId = user.id;
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
    const sumDataURL = `http://localhost:8080/api/Incomes/add/${userId}`;
    axios.get(sumDataURL).then((res) => {
      console.log(res.data);
      const totalCountExp = res.data.pizza;
      //use state count
      // setCount(totalCountExp);
      })
    }
 }, [user])

  const handleSubmit = async (event) => {
    //event.preventDefault();

    const incomeData = { user_id: userId, incomeAmt, incomeType, incomeDate };
    const expURL = "http://localhost:8080/api/Incomes/";

    try {
      console.log(incomeData);
      const { data } = await axios.post(expURL, incomeData);
      console.log(data);
      navigate('/dashboard');
    } catch (error) {
      console.log("error: ++++++++", 'There already exists an account with this name or email');
    }
  };
  
  return (
    <Card style={{padding:"25px"}}>
      <h4>Enter your income:</h4>
            <Form.Group as={Col} sm={5} controlId="formGridCity">
              <Form.Label>Amount</Form.Label>
                <Form.Control type="text" placeholder="ex. 1000" value={incomeAmt} onChange={(event) => setincomeAmt(event.target.value)}/>
            </Form.Group>
            <Form.Group as={Col} sm={5} controlId="formGridState" value={incomeType} onChange={(event) => setincomeType(event.target.value)}>
              <Form.Label>Type</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Select...</option>
                <option value="1">Salary</option>
                <option value="2">Freelance</option>
                <option value="3">Commission</option>
                <option value="3">Grant</option>
                <option value="4">scholarship</option>
                <option value="5">Interest</option>
                <option value="6">Investment</option>
                <option value="7">Pocket Money</option>
                <option value="8">Pension</option>
                <option value="9">Gift</option>
                <option value="10">Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} sm={5} controlId="formGridCity">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="ex. YYYY/MM/DD" value={incomeDate} onChange={(event) => setincomeDate(event.target.value)}/>
            </Form.Group>
            <div className="count">
              {count}{setCount}
            </div>
            <div className="submit-button-container">
              <Button className="button" as={Col} sm={5} variant="success" type="submit" onClick={handleSubmit}>Submit</Button>
            </div>
    </Card>
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

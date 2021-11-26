import React from 'react';
import incomes from '../../../backend/routes/incomes';
import { getUser } from '../utils/userAuth';
import './income.css';

export default function incomes(props) {
  const user = getUser();


  const incomesAlert = () => {
    return (
      <artcle>
      <div class="text-center">
        <!-- Button HTML (to Trigger Modal) -->
        <a href="#myModal" class="trigger-btn" data-toggle="modal">Click to Confirm</a>
      </div>

      <!-- Modal HTML -->
        <div id="myModal" class="modal fade">
          <div class="modal-dialog modal-confirm">
            <div class="modal-content">
              <div class="modal-header">
                <div class="icon-box">
                  <i class="material-icons">&#xE876;</i>
                </div>				
                <h4 class="modal-title">Income Added!</h4>	
              </div>
              <div class="modal-body">
                <p class="text-center">Your income details have been confirmed. Check your email for detials.</p>
              </div>
              <div class="modal-footer">
                <button class="btn btn-success btn-block" data-dismiss="modal">OK</button>
              </div>
            </div>
          </div>
          </div>     
      </artcle>
    )
  }

	return (
    <form>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Income Type</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">Investments</option>
          <option value="2">Employment</option>
          <option value="3">Freelance</option>
          <option value="4">Grants/Scolarship</option>
        </select>

        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile02">
          <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Invoice</label>
          </input>
        </div>
        <div class="input-group-append">
          <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>
        </div>
        <div class="input-group">
            <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
            </input>
          <div class="input-group-append">
            <span class="input-group-text">$</span>
            <span class="input-group-text">0.00</span>
          </div>
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Description</span>
          </div>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <div>
          <input type="radio" name="gender" id="male"></input>
          <label for="male">Deposted</label>
          <input type="radio" name="gender" id="female"></input>
          <label for="female">Pending</label>
        </div>
      </div>
    </form>
	);
};

import React from 'react';
import incomes from '../../../backend/routes/incomes';

const incomes = () => {

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
        <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Upload Invoice</label>
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
          <span class="input-group-text">With textarea</span>
        </div>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
  </form>
	);
};

export default incomes;
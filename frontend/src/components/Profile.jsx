import React from 'react'
import { getUser } from '../utils/userAuth';
// import AvatarEditor from 'react-avatar-editor'
import "./Profile.css";
// import { FaMedal, FaInstagramSquare } from 'react-icons/fa';
// import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

export default function Profile(props) {
  const user = getUser();

  return (
      <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
          <div className="card p-4">
            <div className="profile-image d-flex flex-column justify-content-center align-items-center">   
            <div className="profile-avatar-img"><img src={user.avatar_url} height="200" width="200" /></div> 
            <br/> <br/>
            <span className="profile-name mt-3">{user.name}</span> 
            <span className="idd">{user.email}</span>
            </div>
                <br/> <br/> <br/> <br/>
                <div className="d-flex flex-row justify-content-center align-items-center gap-2">   
                  <span><i className="fa fa-copy"></i></span>
                </div>
                <div class="custom-control custom-switch justify-content-center align-items-center">
                        <input type="checkbox" class="custom-control-input" id="customSwitches"/>
                        <label class="custom-control-label" for="customSwitches">   Notifications</label>
                      </div>
                <div className=" px-2 rounded mt-4 date ">
                  <span className="join">Joined January,2021</span> 
               </div>
          </div>
          <div class="panel">
          <div class="bio-graph-heading">
          </div>
          <div class="panel-body bio-graph-info">
              <h1> User Profile</h1>
              <br/>
              <div class="row">
                  <div class="bio-row">
                      <p><span>Name </span>: {user.name}</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Country </span>: Canada</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Birthday</span>: 13 July 1983</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Occupation</span>:       Web Designer</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Email </span>: {user.email}</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Mobile </span>: (416) 123-4567</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Phone </span>: (416) 765-4321</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Account ID</span>: Oxc4c16a645_b21a</p>
                        <img className="userCards" src="./usercards.png" alt="userCards" style={{height: 200}}/>
                  </div>
              </div>
          </div>
      </div>
    </div>  
  )
};
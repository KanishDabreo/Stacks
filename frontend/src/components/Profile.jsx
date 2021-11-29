import React from 'react'
import { getUser } from '../utils/userAuth';
// import AvatarEditor from 'react-avatar-editor'
import "./Profile.css";
import { BsToggleOn } from "react-icons/bs";
import { FaMedal, FaInstagramSquare } from 'react-icons/fa';
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

export default function Profile(props) {
  const user = getUser();
  const userId = user.id;
  return (
      <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
          <div className="card p-4">
            <div className="image d-flex flex-column justify-content-center align-items-center">   
            <button className="profile-img"><img src="./avatar.png" height="200" width="200" /></button> 
            <span className="name mt-3">Bob Cool{userId.name}</span> 
            <span className="idd">@bob.cool{userId.email}</span>
            </div>
                <br/> <br/> <br/> <br/>
                <div className="d-flex flex-row justify-content-center align-items-center mt-3"> <span className="number">10699   
                <span className="follow">:   Points Earned   <FaMedal/></span>
                </span> 
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center gap-2">   
                  {/* <span className="idd1">Account Number: Oxc4c16a645_b21a</span>  */}
                  <span><i className="fa fa-copy"></i></span>
                </div>
                <div className=" d-flex flex-row justify-content-center align-items-center mt-2"> 
                <button className="btn1">Update Profile</button> 
                </div>
                <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                  <span><i className="fa fa-twitter"><AiFillTwitterSquare/></i></span> 
                  <span><i className="fa fa-facebook-f"><AiFillFacebook/></i></span> 
                  <span><i className="fa fa-instagram"></i><FaInstagramSquare/></span> 
                  <span><i className="fa fa-linkedin"><AiFillLinkedin/></i></span> 
                </div>
                <div className=" px-2 rounded mt-4 date ">
                  <span className="join">Joined January,2021</span> 
               </div>
          </div>
          <div class="panel">
          <div class="bio-graph-heading">
            <div className="userCards">
              <img src="./usercards.png" alt="userCards" style={{height: 100}}/>
            </div>
          </div>
          <div class="panel-body bio-graph-info">
              <h1> User Profile</h1>
              <div class="row">
                  <div class="bio-row">
                      <p><span>First Name </span>: Bob</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Last Name </span>: Cool</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Country </span>: Canada</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Birthday</span>: 13 July 1983</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Occupation </span>: Web Designer</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Email </span>: bob.cool@gmail.com{userId.email}</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Mobile </span>: (416) 123-4567</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Phone </span>: (416) 765-4321</p>
                  </div>
                  <div class="bio-row">
                      <p><span>Account #</span>: Oxc4c16a645_b21a</p>
                  </div>
                  <div class="bio-row">
                      {/* <p><span>Notifications</span>:       <BsToggleOn/></p> */}
                      <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="customSwitches"/>
                        <label class="custom-control-label" for="customSwitches">Notifications</label>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>  
  )
};
import React from 'react'
import { getUser } from '../utils/userAuth';
// import AvatarEditor from 'react-avatar-editor'
import "./Profile.css";
import { BsToggleOn } from "react-icons/bs";
import { FaMedal, FaInstagramSquare } from 'react-icons/fa';
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

export default function Profile(props) {
  const user = getUser();
  return (
      <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
          <div className="card p-4">
          <div className="userCards">
                <img src="./usercards.png" alt="userCards" style={{height: 150}}/>
              </div>
            <div className="image d-flex flex-column justify-content-center align-items-center">   
            <button className="profile-img btn-secondary"><img src="./avatar.png" height="200" width="200" /></button> 
            <span className="name mt-3">Bob Cool</span> 
            <span className="idd">bob.cool@gmail.com</span>
            <span className="idd">notifications <BsToggleOn/></span>
            </div>
                <div className=" d-flex flex-row justify-content-center align-items-center mt-2"> 
                <button className="btn1 btn-dark">Update Profile</button> 
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center mt-3"> <span className="number">10699   
                <span className="follow">Points Earned   <FaMedal/></span>
                </span> 
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center gap-2">   
                <br/>
                  <span className="idd1">Account Number: Oxc4c16a645_b21a</span> 
                  <span><i className="fa fa-copy"></i></span>
                </div>
                <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                  <span><i className="fa fa-twitter"><AiFillTwitterSquare/></i></span> 
                  <span><i className="fa fa-facebook-f"><AiFillFacebook/></i></span> 
                  <span><i className="fa fa-instagram"></i><FaInstagramSquare/></span> 
                  <span><i className="fa fa-linkedin"><AiFillLinkedin/></i></span> 
                </div>
                <div className=" px-2 rounded mt-4 date ">
                  <span className="join">Joined May,2021</span> 
               </div>
          </div>
    </div>  
  )
};
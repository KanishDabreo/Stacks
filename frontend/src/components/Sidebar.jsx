import React from 'react'
// import * as Icons from "react-icons/ai"; 
// import * as FaIcons from "react-icons/fa";
import { FaHome, FaChartPie } from "react-icons/fa";
import "./Sidebar.css";
import { Link } from 'react-router-dom'
import { SidebarInput } from './SidebarInput';

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <Link to="#" className="sidebar_menu">
      <FaHome/>
      <FaChartPie/>
      </Link>
      <li>

      </li>
{SidebarInput.map((item, index)=>{
  return(
    <li key={index} className={item.cName}>
    <Link to={item.path}>
      {item.icon}
      <span>{item.title}</span>
    </Link>
    </li>
  )
})}
    </div>
)};

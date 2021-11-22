import React from 'react'
import { useState } from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom'
import { SidebarInput } from './SidebarInput';

export default function Sidebar(props) {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className="sidebar">
      <Link to="#" className="sidebar_menu">
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

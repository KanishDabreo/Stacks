import React from 'react'
import { useState } from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom'
import { SidebarInput } from './SidebarInput';
import { IconContext } from 'react-icons/lib';
import { FaIcons } from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
export default function Sidebar(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    
    <IconContext.Provider value={{ color: '#fff'}}>
    <div className="sidebar">
      <Link to="#" className="sidebar_menu">
      <FaIcons.FaBars onclick={showSidebar} />
      </Link>
    </div>
    <nav className={sidebar ? 'sidebar_menu active' : 'sidebar_menu'}
    >
      <ul className='sidebar_menu-items' onClick={showSidebar}>
      <li className='sidebar-toggle'>
        <Link to='#' className='sidebar_menu'>
          <AiIcons.AiOutlineClose />
          </Link>
      </li>
     {SidebarInput.map((item, index)=>{
      return(
      <li key={index} className={item.cName}>
      <Link to={item.path}>
      {item.icon}
      <span>{item.title}</span>
      </Link>
      </li>
      )})}
    </ul>  
  </nav>
  </IconContext.Provider>
)};

import { useState } from 'react';
import "./Sidebar.css";
import { getUser } from '../utils/userAuth';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { RiBarChart2Fill, RiHome2Fill, RiRoadMapFill, RiAddBoxFill } from 'react-icons/ri';

export default function Sidebar({isLoggedIn}) {
  const user = getUser();
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  if (!isLoggedIn) {
    return (
      <div>
      </div>
    )
  } else {
    return (
      <div className="sidebar-container">
        <Tooltip
          className="sidebar-item"
          onClose={handleTooltipClose} 
          onOpen={handleTooltipOpen}    
          title="Home">
          <Link to="/"><h2><RiHome2Fill /></h2></Link>
        </Tooltip>
        <Tooltip
          className="sidebar-item"
          onClose={handleTooltipClose} 
          onOpen={handleTooltipOpen}    
          title="Profile">
          <Link to="/"><h2><FaUser /></h2></Link>
        </Tooltip>
        <Tooltip
          className="sidebar-item"
          onClose={handleTooltipClose} 
          onOpen={handleTooltipOpen}    
          title="Dashboard">
          <Link to="/dashboard"><h2><RiBarChart2Fill /></h2></Link>
        </Tooltip>
        <Tooltip
          className="sidebar-item"
          onClose={handleTooltipClose} 
          onOpen={handleTooltipOpen}    
          title="Maps">
          <Link to="/"><h2><RiRoadMapFill /></h2></Link>
        </Tooltip>
        <Tooltip
          className="sidebar-item"
          onClose={handleTooltipClose} 
          onOpen={handleTooltipOpen}    
          title="Add Expense/Income">
          <Link to="/expenses"><h2><RiAddBoxFill /></h2></Link>
        </Tooltip>
      </div>
    )
  }
};

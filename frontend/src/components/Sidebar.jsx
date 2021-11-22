import React from 'react'
// import * as Icons from "react-icons/ai"; 
// import * as FaIcons from "react-icons/fa";
import { FaHome, FaChartPie } from "react-icons/fa";

import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="#" className="menu-bars">
      <FaHome/>
      <FaChartPie/>
      </Link>
    </div>
  )
}

export default Sidebar

// export default function Sidebar(props) {
//   return (
//     <div>
//       <h1>Sidebar</h1>
//     </div>
//   )
// }

import { AiFillPlusCircle } from 'react-icons/ai'
// import * as IoIcons from 'react-icons/io'
// import * as FaIcons from 'react-icons/fa'
import { FaHome, FaChartPie, FaMap } from "react-icons/fa";

export const SidebarInput = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome/>,
    cName: 'sidebar_text'
  },
  {
    title: 'Expenses',
    path: '/expenses',
    icon: <FaChartPie/>,
    cName: 'sidebar_text'
  },
  {
    title: 'Map',
    path: '/',
    icon: <FaMap/>,
    cName: 'sidebar_text'
  },
  {
    title: 'Income',
    path: '/incomes',
    icon: <iFillPlusCircle/>,
    cName: 'sidebar_text'
  },
  {
    title: 'Add',
    path: '/',
    icon: <AiFillPlusCircle/>,
    cName: 'sidebar_text'
  },
]
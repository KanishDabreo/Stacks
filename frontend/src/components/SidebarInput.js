import { AiFillPlusCircle } from 'react-icons/ai'
import{ IoMdPersonAdd } from 'react-icons/io';
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
    title: 'Add',
    path: '/',
    icon: <AiFillPlusCircle/>,
    cName: 'sidebar_text'
  },
  {
    title: 'Map',
    path: '/map',
    icon: <FaMap/>,
    cName: 'sidebar_text'
  },
  {
    title: 'Register',
    path: '/register',
    icon: <IoMdPersonAdd/>,
    cName: 'sidebar_text'
  },
]
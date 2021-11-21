import { Link } from "react-router-dom";
import './Navbar.css'

  
const Navbar = () => {
  return (
    <div className="navbar-container">
      <li><Link to="/"><img className="logo" src="./logo.png" alt="logo" /></Link></li>
      <div className="navbar">
      <li><Link to="/login">Login</Link></li>/
      <li><Link to="/register">Register</Link></li>
      </div>
  </div>
  )
};
  
export default Navbar;
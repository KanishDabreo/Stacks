import { Link } from "react-router-dom";
import './Navbar.css'
import Button from 'react-bootstrap/Button';  
import { useNavigate } from 'react-router-dom';
import { getUser } from '../utils/userAuth';

  
const Navbar = (props) => {
  const navigate = useNavigate();  
  const user = getUser();

  const logOut = () => {
    localStorage.clear();
    navigate('/');
  }

  if (!user) {
    return (
      <div className="navbar-container">
        <li><Link to="/"><img className="logo" src="./logo.png" alt="logo" /></Link></li>
        <div className="ml-auto">
          <Button 
            variant="transparent_btn" 
            type="submit" 
            size="sm" 
            style={{fontSize: '20px', fontWeight: 'bold'}} 
            onClick={() => navigate('/about')}>
            About
          </Button>        
          <Button 
            variant="success" 
            type="submit" 
            size="sm" 
            style={{fontSize: '20px', fontWeight: 'bold'}} 
            onClick={() => navigate('/login')}>
            Sign In
          </Button>
        </div>
    </div>
    )
  } else {
    return (
      <div className="navbar-container">
        <li><Link to="/"><img className="logo" src="./logo.png" alt="logo" /></Link></li>
        <div className="ml-auto">
          <div>Welcome, {user.name}</div>
          <Button 
            variant="transparent_btn" 
            type="submit" 
            size="sm" 
            style={{fontSize: '20px', fontWeight: 'bold'}} 
            onClick={() => navigate('/about')}>
            About
          </Button>        
          <Button 
            variant="success" 
            type="submit" 
            size="sm" 
            style={{fontSize: '20px', fontWeight: 'bold'}} 
            onClick={() => logOut()}>
            LogOut
          </Button>
        </div>
    </div>
    )
  }
};
  
export default Navbar;
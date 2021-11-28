import { Link } from "react-router-dom";
import './Navbar.css'
import Button from 'react-bootstrap/Button';  
import { useNavigate } from 'react-router-dom';
import { getUser } from '../utils/userAuth';

  
const Navbar = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const user = getUser();

  const logOut = async () => {
    navigate('/');
    localStorage.clear();
    setIsLoggedIn(false);
  }

  if (!user) {
    return (
      <div className="navbar-container">
        <li><Link to="/"><img className="logo" src="./logo.png" alt="logo" /></Link></li>
        <div className="ml-auto">       
          <Button
            className="button"
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
        <li><Link to="/"><img className="logo" src="./themedLogo.png" alt="logo" /></Link></li>
        <div className="user-name">Welcome, {user.name}</div>       
        <div className="ml-auto">
          <Button
            className="button"
            variant="success" 
            type="submit" 
            size="sm" 
            style={{fontSize: '20px', fontWeight: 'bold'}} 
            onClick={() => logOut()}>
            Log Out
          </Button>
        </div>
    </div>
    )
  }
};
  
export default Navbar;
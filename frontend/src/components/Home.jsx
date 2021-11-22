import './home.css';
import Button from 'react-bootstrap/Button';  
import { useNavigate } from 'react-router-dom';

export default function Home(props) {
  const navigate = useNavigate();
  return (
    <div class="homepage">
      <div class="text-container">
        <h4 class="optimize">Optimize</h4>
        <h4 class="your">your</h4>
        <h4 class="spending">spending.</h4>
        <div class="submit-button">
          <Button variant="success" type="submit" size="lg" onClick={() => navigate('/login')}>Get Started »</Button>
        </div>
      </div>
      <img class="homepage-logo" alt="money-cloud" src="./static/images/homepage_logo.png"/>
    </div>
  )
}
import './home.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();
  return (
    <div className="homepage">
      <div className="text-container">
        <h4 className="optimize">Optimize</h4>
        <h4 className="your">your</h4>
        <h4 className="spending">spending.</h4>
        <div className="submit-button">
          <Button
            className="button"
            variant="success" 
            type="submit" 
            size="lg" 
            style={{fontSize: '30px', fontWeight: 'bold'}} 
            onClick={() => navigate('/about')}>
              Get Started »
            </Button>
        </div>
      </div>
      <img className="homepage-logo" alt="money-cloud" src="./static/images/homepage_logo.png"/>
    </div>
  )
}
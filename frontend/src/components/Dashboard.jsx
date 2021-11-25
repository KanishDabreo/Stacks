import './dashboard.css';
import { getUser } from '../utils/userAuth';


export default function Dashboard() {

  const user = getUser();

  return (
    user && 
      <div>
        {/* total income balance would be shown here in the dashboard. */}
        <h1 className="dashboard-title">$1,000</h1>
        <p>{user.name}</p>
      </div>

    
  )
}
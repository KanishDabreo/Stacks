import './dashboard.css';
import { useLocation } from 'react-router-dom';

export default function Dashboard() {

  const {name} = useLocation();
  console.log("test line");
  console.log("data from dashboard:", name);

  return (
    <div>
      {/* total income balance would be shown here in the dashboard. */}
      <h1 className="dashboard-title">$1,000</h1>
    </div>
  )
}
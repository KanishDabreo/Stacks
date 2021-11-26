import './dashboard.css';
import { getUser } from '../utils/userAuth';
import { useContext } from 'react';
import Context from '../app-context';

export default function Dashboard() {
  const { count, setCount } = useContext(Context);
  console.log(count);
  const user = getUser();

  return (
    user && 
      <div>
        {/* total income balance would be shown here in the dashboard. */}
        <h1 className="dashboard-title">{count}</h1>
        <p>{user.name}</p>
      </div>

    
  )
}
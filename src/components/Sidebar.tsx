import './All.css'
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div>
        <ul>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
           <li><NavLink to="/customer">Customers</NavLink></li>
           
            <li><NavLink to="/houses">Houses</NavLink></li>
            <li><NavLink to="/Apartments">Apartments</NavLink></li>
             <li><NavLink to="/Lands">Land</NavLink></li>
          </ul>
          <button><NavLink to='/'>Logout</NavLink></button>
            </div>

  )
}

export default Sidebar;
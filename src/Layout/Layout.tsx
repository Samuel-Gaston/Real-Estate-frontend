import { Outlet } from 'react-router-dom';
// import Nav from '../components/Nav.tsx';
import Apartment from '../pages/Apartment.tsx';
const layout = () => {
  return (
    <div>
      <Apartment />
        <Outlet />
    </div>
  )
}


export default layout;
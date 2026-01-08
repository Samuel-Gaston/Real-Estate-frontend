import { Outlet } from 'react-router-dom';
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
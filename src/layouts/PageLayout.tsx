import { Outlet } from 'react-router';
import Nav from '../components/Nav';

export default function PageLayout() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

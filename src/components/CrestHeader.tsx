import { NavLink } from 'react-router';
import crest from '../assets/crest.png';

export default function CrestHeader() {
  return (
    <NavLink to="/" className="flex items-center text-white">
      <img className="w-28" src={crest} alt="Lambda Psi Rho Crest" />

      <div>
        <p className="font-bold uppercase">Lambda Psi Rho</p>
        <hr />
        <p>Fraternity, Inc.</p>
      </div>
    </NavLink>
  );
}

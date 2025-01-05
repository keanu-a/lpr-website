import { NavLink } from 'react-router';
import crest from '../assets/crest.png';

export default function Nav() {
  return (
    <nav className="flex justify-around my-4 items-center">
      <div className="flex items-center">
        <img className="w-28" src={crest} alt="Lambda Psi Rho Crest" />

        <div>
          <p>Lambda Psi Rho</p>
          <hr />
          <p>Fraternity, Inc.</p>
        </div>
      </div>

      <ul className="flex justify-around w-1/2">
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="membership">Membership</NavLink>
        </li>
        <li>
          <NavLink to="brothers">Brothers</NavLink>
        </li>
        <li>
          <NavLink to="philanthropy">Philanthropy</NavLink>
        </li>
      </ul>
    </nav>
  );
}

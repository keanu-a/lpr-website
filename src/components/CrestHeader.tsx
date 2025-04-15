import { NavLink } from 'react-router';
import crest from '../assets/crest.webp';
import { cn } from '@/lib/utils';

export default function CrestHeader({ className }: { className?: string }) {
  return (
    <NavLink to="/" className={cn('flex items-center', className)}>
      <img
        className="w-24 md:w-28 h-fit"
        src={crest}
        alt="Lambda Psi Rho Crest"
      />

      <div>
        <h1 className="text-base font-bold uppercase">Lambda Psi Rho</h1>
        <hr />
        <h3 className="text-base">Fraternity, Inc.</h3>
      </div>
    </NavLink>
  );
}

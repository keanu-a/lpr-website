import CrestHeader from './CrestHeader';
import { cn } from '@/lib/utils';

import MobileNav from './MobileNav';
import MainNav from './MainNav';

import { navBarItems } from '@/data/navBarItems';

export default function Nav({ className }: { className?: string }) {
  return (
    <nav
      className={cn(className, 'flex justify-around py-4 mx-auto items-center')}
    >
      <CrestHeader className="text-white" />

      {/* Desktop Navigation */}
      <MainNav navBarItems={navBarItems} />

      {/* Mobile Navigation */}
      <MobileNav navBarItems={navBarItems} />
    </nav>
  );
}

import { NavLink } from 'react-router';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MenuIcon } from 'lucide-react';

import { navigationMenuTriggerStyle } from './ui/navigation-menu';
import CrestHeader from './CrestHeader';
import { NavItem } from '@/types/nav';

const MOBILE_NAV_BUTTON_ICON_SIZE = 28;

export default function MobileNav({ navBarItems }: { navBarItems: NavItem[] }) {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger className="text-white">
          <MenuIcon size={MOBILE_NAV_BUTTON_ICON_SIZE} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="my-8">
            <CrestHeader />
          </SheetHeader>

          <nav className="flex flex-col">
            <Accordion type="single" collapsible>
              {navBarItems.map(({ title, links }, navBarItemIndex) => (
                <AccordionItem value={title} key={navBarItemIndex}>
                  <AccordionTrigger className="uppercase">
                    {title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col">
                      {links.map(({ name, href }, linkIndex) => (
                        <NavLink
                          key={linkIndex}
                          to={href}
                          className={navigationMenuTriggerStyle()}
                        >
                          {name}
                        </NavLink>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

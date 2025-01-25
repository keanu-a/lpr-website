import { NavLink } from 'react-router';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
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
import { MenuIcon } from "lucide-react";

import CrestHeader from './CrestHeader';
import { navBarItems } from '@/data/navBarItems';

import { cn } from '@/lib/utils';

const MOBILE_NAV_BUTTON_ICON_SIZE = 28

export default function Nav({ className }: { className?: string }) {
  return (
    <nav
      className={cn(className, 'flex justify-around py-4 mx-auto items-center')}
    >
      <CrestHeader className="text-white" />

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {navBarItems.map(({ title, links }, navBarItemsIndex) => (
            <NavigationMenuItem key={navBarItemsIndex}>
              <NavigationMenuTrigger className="uppercase bg-transparent text-white">
                {title}
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="flex flex-col gap-3 p-6 md:w-[500px]">
                  {links.map(({ name, href }, linkIndex) => (
                    <NavigationMenuLink
                      key={linkIndex}
                      href={href}
                      className={navigationMenuTriggerStyle()}
                    >
                      {name}
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
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
    </nav>
  );
}

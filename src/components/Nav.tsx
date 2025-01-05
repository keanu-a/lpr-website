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

import CrestHeader from './CrestHeader';

const navItems: { title: string; links: { name: string; href: string }[] }[] = [
  {
    title: 'About',
    links: [
      {
        name: 'About us',
        href: '/about-us',
      },
      {
        name: 'Upcoming Events',
        href: '/upcoming-events',
      },
      {
        name: 'Stepping',
        href: '/stepping',
      },
      {
        name: 'Academics',
        href: '/academics',
      },
    ],
  },
  {
    title: 'Membership',
    links: [
      {
        name: 'Membership',
        href: '/membership',
      },
      {
        name: 'Expansion',
        href: '/expansion',
      },
      {
        name: 'Incorporation, Chartering, and Non-Profit',
        href: '/incorporation',
      },
    ],
  },
  {
    title: 'Brothers',
    links: [
      {
        name: 'Founding Chapter',
        href: '/founding-chapter',
      },
      {
        name: 'Active House',
        href: '/active-house',
      },
      {
        name: 'Alumni Chapter',
        href: '/alumni-chapter',
      },
      {
        name: 'National Board',
        href: '/national-board',
      },
    ],
  },
  {
    title: 'Philanthropy',
    links: [
      {
        name: 'Local Philanthropies',
        href: '/local-philanthropies',
      },
    ],
  },
];

export default function Nav() {
  return (
    <nav className="flex justify-around my-4 mx-auto items-center">
      <CrestHeader />

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {navItems.map(({ title, links }) => (
            <NavigationMenuItem>
              <NavigationMenuTrigger className="uppercase">
                {title}
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="flex flex-col gap-3 p-6 md:w-[500px]">
                  {links.map(({ name, href }) => (
                    <NavigationMenuLink
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
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader className="my-8">
              <CrestHeader />
            </SheetHeader>

            <nav className="flex flex-col">
              <Accordion type="single" collapsible>
                {navItems.map(({ title, links }) => (
                  <AccordionItem value={title}>
                    <AccordionTrigger className="uppercase">
                      {title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="flex flex-col">
                        {links.map(({ name, href }) => (
                          <NavLink
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

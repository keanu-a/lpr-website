import { NavLink } from 'react-router';
import crest from '../assets/crest.png';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

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
      <NavLink to="/" className="flex items-center">
        <img className="w-28" src={crest} alt="Lambda Psi Rho Crest" />

        <div>
          <p>Lambda Psi Rho</p>
          <hr />
          <p>Fraternity, Inc.</p>
        </div>
      </NavLink>

      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {item.links.map((link) => (
                    <NavigationMenuLink
                      href={link.href}
                      className={navigationMenuTriggerStyle()}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

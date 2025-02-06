import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { NavItem } from '@/types/nav';

export default function MainNav({ navBarItems }: { navBarItems: NavItem[] }) {
  return (
    <nav>
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
    </nav>
  );
}

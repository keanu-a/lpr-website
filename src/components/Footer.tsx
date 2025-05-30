import CrestHeader from './CrestHeader';
import MaxWidthContainer from './MaxWidthContainer';

import { navBarItems } from '@/data/navBarItems';

import dots from '@/assets/dots.jpg';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="relative bg-red-900 bg-opacity-5 h-full md:h-96">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-[-1]"
        style={{ backgroundImage: `url(${dots})` }}
      />

      <MaxWidthContainer className="h-full justify-between flex flex-col gap-8 md:gap-0 md:items-center md:flex-row">
        <CrestHeader className="mx-auto" />

        <div className="flex flex-col w-2/3 align-top gap-4 md:flex-row md:flex-wrap">
          {navBarItems.map((item, itemIdx) => (
            <div key={itemIdx} className="flex flex-col gap-4">
              <h1 className="text-xl font-bold text-maroon">{item.title}</h1>
              <ul className="flex flex-col gap-1 w-40">
                {item.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link to={link.href} className="hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MaxWidthContainer>

      <p className="bg-black text-white text-sm flex justify-center py-1">
        © Lambda Psi Rho Fraternity, Inc.
      </p>
    </footer>
  );
}

import CrestHeader from "./CrestHeader";
import MaxWidthContainer from "./MaxWidthContainer";

import { navBarItems } from "@/data/navBarItems";

import dots from "@/assets/dots.jpg";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="relative h-96 bg-red-900 bg-opacity-5">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-[-1]"
        style={{ backgroundImage: `url(${dots})` }}
      />

      <MaxWidthContainer className="h-full items-center justify-between flex flex-col md:flex-row">
        <CrestHeader />

        <div className="flex w-2/3 align-top justify-between">
          {navBarItems.map((item, itemIdx) => (
            <div key={itemIdx} className="flex flex-col gap-4">
              <h1 className="text-xl font-bold text-maroon">{item.title}</h1>
              <ul className="flex flex-col gap-1">
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
    </footer>
  );
}

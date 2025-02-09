import { Outlet, useLocation } from "react-router";
import Nav from "../components/Nav";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function PageLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Nav className="bg-black" />
      <MaxWidthContainer className="min-h-screen">
        <Outlet />
      </MaxWidthContainer>
      <Footer />
    </div>
  );
}

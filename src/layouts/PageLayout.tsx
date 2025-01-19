import { Outlet } from 'react-router';
import Nav from '../components/Nav';
import MaxWidthContainer from "@/components/MaxWidthContainer";

export default function PageLayout() {
  return (
    <div>
      <Nav className="bg-black" />
      <MaxWidthContainer>
        <Outlet />
      </MaxWidthContainer>
    </div>
  );
}

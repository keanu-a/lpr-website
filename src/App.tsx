import { BrowserRouter, Routes, Route } from 'react-router';
import { Analytics } from '@vercel/analytics/react';

import PageLayout from '@/layouts/PageLayout.tsx';
import Home from '@/pages/Home.tsx';

import About from '@/pages/About/About.tsx';
import Academics from '@/pages/About/Academics.tsx';
import Stepping from '@/pages/About/Stepping.tsx';

import Membership from '@/pages/Membership/Membership.tsx';
import Expansion from '@/pages/Membership/Expansion.tsx';
import Incorporation from '@/pages/Membership/Incorporation.tsx';

import FoundingChapter from '@/pages/Brothers/FoundingChapter.tsx';
import ActiveHousePage from '@/pages/Brothers/ActiveHousePage';
import AlumniChapterPage from '@/pages/Brothers/AlumniChapterPage';
import NationalBoard from '@/pages/Brothers/NationalBoard.tsx';

import LocalPhilanthropies from '@/pages/Philanthropy/LocalPhilanthropies.tsx';
// import UpcomingEvents from '@/pages/About/UpcomingEvents.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route element={<PageLayout />}>
          {/* ABOUT TAB */}
          <Route path="about-us" element={<About />} />
          {/* <Route path="upcoming-events" element={<UpcomingEvents />} /> */}
          <Route path="academics" element={<Academics />} />
          <Route path="stepping" element={<Stepping />} />

          {/* MEMBERSHIP TAB */}
          <Route path="membership" element={<Membership />} />
          <Route path="expansion" element={<Expansion />} />
          <Route path="incorporation" element={<Incorporation />} />

          {/* BROTHERS TAB */}
          <Route path="founding-chapter" element={<FoundingChapter />} />
          <Route path="active-house" element={<ActiveHousePage />} />
          <Route path="alumni-chapter" element={<AlumniChapterPage />} />
          <Route path="national-board" element={<NationalBoard />} />

          {/* PHILANTHROPY TAB */}
          <Route
            path="local-philanthropies"
            element={<LocalPhilanthropies />}
          />
        </Route>
      </Routes>

      <Analytics />
    </BrowserRouter>
  );
}

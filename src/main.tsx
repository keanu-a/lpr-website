import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';

import PageLayout from './layouts/PageLayout.tsx';
import Home from './pages/Home.tsx';

import About from './pages/About.tsx';
import Academics from './pages/Academics.tsx';
import Stepping from './pages/Stepping.tsx';

import Membership from './pages/Membership.tsx';
import Expansion from './pages/Expansion.tsx';
import Incorporation from './pages/Incorporation.tsx';

import FoundingChapter from './pages/FoundingChapter.tsx';
import ActiveHouse from './pages/ActiveHouse.tsx';
import AlumniChapter from './pages/AlumniChapter.tsx';
import NationalBoard from './pages/NationalBoard.tsx';

import LocalPhilanthropies from './pages/LocalPhilanthropies.tsx';
import UpcomingEvents from './pages/UpcomingEvents.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route element={<PageLayout />}>
          <Route path="about-us" element={<About />} />
          <Route path="upcoming-events" element={<UpcomingEvents />} />
          <Route path="academics" element={<Academics />} />
          <Route path="stepping" element={<Stepping />} />

          <Route path="membership" element={<Membership />} />
          <Route path="expansion" element={<Expansion />} />
          <Route path="incorporation" element={<Incorporation />} />

          <Route path="founding-chapter" element={<FoundingChapter />} />
          <Route path="active-house" element={<ActiveHouse />} />
          <Route path="alumni-chapter" element={<AlumniChapter />} />
          <Route path="national-board" element={<NationalBoard />} />

          <Route
            path="local-philanthropies"
            element={<LocalPhilanthropies />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

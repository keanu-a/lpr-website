import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import PageLayout from './layouts/PageLayout.tsx';

import './index.css';
import FoundingChapter from './pages/FoundingChapter.tsx';
import Academics from './pages/Academics.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route element={<PageLayout />}>
          <Route path="about-us" element={<About />} />
          <Route path="academics" element={<Academics />} />
          <Route path="founding-chapter" element={<FoundingChapter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

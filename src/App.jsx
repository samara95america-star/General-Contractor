// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout wrapper
import RootLayout from './layouts/RootLayout';

// Page components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import Remodeling from './pages/Remodeling';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import ServiceAreas from './pages/ServiceAreas';
import Financing from './pages/Financing';
import Reviews from './pages/Reviews';
import Careers from './pages/Careers';
import RequestEstimate from './pages/RequestEstimate';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Safety from './pages/Safety';
import Warranty from './pages/Warranty';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Core Layout Wrap */}
        <Route path="/" element={<RootLayout />}>
          {/* Main index and general pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="residential" element={<Residential />} />
          <Route path="commercial" element={<Commercial />} />
          <Route path="remodeling" element={<Remodeling />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="service-areas" element={<ServiceAreas />} />
          <Route path="financing" element={<Financing />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="careers" element={<Careers />} />
          <Route path="estimate" element={<RequestEstimate />} />
          <Route path="contact" element={<Contact />} />
          <Route path="safety" element={<Safety />} />
          <Route path="warranty" element={<Warranty />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />

          {/* Universal fallback route (404 Page) */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

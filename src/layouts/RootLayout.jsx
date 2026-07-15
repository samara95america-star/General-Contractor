// src/layouts/RootLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LiveChat from '../components/LiveChat';
import ScrollToTop from '../components/ScrollToTop';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans antialiased text-slate-100">
      {/* ScrollToTop automatically handles resetting browser window scroll position on page transitions */}
      <ScrollToTop />

      {/* Structural layout bars */}
      <TopBar />
      <Header />

      {/* Main page content injection point */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Permanent floating chat utility */}
      <LiveChat />

      {/* Dynamic footer element */}
      <Footer />
    </div>
  );
}

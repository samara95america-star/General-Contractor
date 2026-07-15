// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md py-1"
            onClick={closeMenu}
            aria-label="Summit Build Contractors Home"
          >
            <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
              SUMMIT <span className="text-orange-500">BUILD</span>
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 font-bold uppercase -mt-1">
              CONTRACTORS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors duration-200 hover:text-orange-500 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md px-1 ${
                    isActive ? 'text-orange-500' : 'text-slate-200'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Phone Display */}
            <a
              href="tel:3125552026"
              className="flex items-center gap-2 text-slate-200 hover:text-orange-500 transition-colors py-2 px-1 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md font-bold text-sm xl:text-base"
              title="Call Summit Build Contractors Now"
            >
              <Phone className="w-4 h-4 text-orange-500 animate-bounce" />
              <span>(312) 555-2026</span>
            </a>

            {/* Request Free Estimate Button */}
            <Link
              to="/estimate"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-md text-sm font-bold shadow-md transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center lg:hidden gap-3">
            {/* Quick Mobile Phone Dial Button */}
            <a
              href="tel:3125552026"
              className="p-2 bg-slate-800 text-orange-500 rounded-full hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={toggleMenu}
              type="button"
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800 shadow-inner" id="mobile-menu">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-800 text-orange-500'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3 px-4">
              <a
                href="tel:3125552026"
                className="flex items-center justify-center gap-2 text-slate-200 hover:text-orange-500 py-3 font-bold border border-slate-700 rounded-md text-sm"
              >
                <Phone className="w-4 h-4 text-orange-500" />
                (312) 555-2026
              </a>
              <Link
                to="/estimate"
                onClick={closeMenu}
                className="bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-md text-sm font-bold shadow-md"
              >
                Request a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

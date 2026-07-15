// src/components/Breadcrumbs.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ customCrumbs = [] }) {
  const location = useLocation();

  // Generate crumbs based on current location
  const pathnames = location.pathname.split('/').filter((x) => x);

  // If we are on the homepage, do not render breadcrumbs
  if (pathnames.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-slate-900 border-y border-slate-800/80 py-3 px-4 font-sans text-xs md:text-sm text-slate-400"
    >
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 md:gap-2">
        {/* Home crumb */}
        <Link
          to="/"
          className="flex items-center gap-1 hover:text-orange-500 transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500 rounded"
        >
          <Home className="w-3.5 h-3.5" />
          <span className="sr-only">Home</span>
        </Link>

        {/* Dynamic crumbs from URL or Custom crumbs if provided */}
        {customCrumbs.length > 0 ? (
          customCrumbs.map((crumb, idx) => {
            const isLast = idx === customCrumbs.length - 1;
            return (
              <React.Fragment key={crumb.label}>
                <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                {isLast ? (
                  <span className="text-white font-medium truncate max-w-[200px]" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="hover:text-orange-500 transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500 rounded truncate max-w-[150px]"
                  >
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })
        ) : (
          pathnames.map((value, index) => {
            const isLast = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            // Format label nicely (e.g., service-areas -> Service Areas)
            const label = value
              .split('-')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');

            return (
              <React.Fragment key={to}>
                <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                {isLast ? (
                  <span className="text-white font-medium truncate max-w-[200px]" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="hover:text-orange-500 transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500 rounded"
                  >
                    {label}
                  </Link>
                )}
              </React.Fragment>
            );
          })
        )}
      </div>
    </nav>
  );
}

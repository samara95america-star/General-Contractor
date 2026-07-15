// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, PhoneCall, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="font-sans min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-slate-950 text-slate-100">
      <div className="max-w-md space-y-6">
        {/* Animated Icon */}
        <div className="w-16 h-16 bg-orange-500/10 text-orange-500 rounded-2xl flex items-center justify-center mx-auto border border-orange-500/20 animate-bounce">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-orange-500 text-xs font-black uppercase tracking-widest">Error Code 404</span>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">Page Not Found</h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Action button row */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Link
            to="/"
            className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/contact"
            className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            <PhoneCall className="w-4 h-4 text-orange-500" />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

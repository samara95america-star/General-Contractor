// src/components/TopBar.jsx
import React from 'react';
import { Shield, AlertCircle, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-slate-950 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5 font-medium">
            <Shield className="w-3.5 h-3.5 text-orange-500" />
            Licensed &amp; Insured
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <AlertCircle className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            24/7 Emergency Service Available
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            Serving Chicago &amp; Surrounding Areas
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-4 text-slate-400">
          <span>GC License Placeholder: #GC123-XXXX</span>
        </div>
      </div>
    </div>
  );
}

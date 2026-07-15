// src/components/ServiceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';

export default function ServiceCard({ service }) {
  const { id, title, icon, image, shortDescription } = service;

  // Dynamically load the Lucide icon, fallback to Hammer if not found
  const IconComponent = LucideIcons[icon] || LucideIcons.Hammer;

  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-orange-500/30 flex flex-col h-full font-sans">
      {/* Service Image Section */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-85 group-hover:opacity-100"
        />
        {/* Hover overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

        {/* Floating Icon */}
        <div className="absolute bottom-4 left-4 bg-orange-500 text-white p-3 rounded-xl shadow-lg border border-orange-400/20 group-hover:rotate-6 transition-transform">
          <IconComponent className="w-5 h-5" />
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-100 group-hover:text-orange-500 transition-colors mb-2 line-clamp-1">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {shortDescription}
          </p>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <Link
            to={`/services#${id}`}
            className="text-center bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold py-2.5 px-3 rounded-lg border border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-slate-500"
          >
            Learn More
          </Link>
          <Link
            to={`/estimate?type=${encodeURIComponent(title)}`}
            className="text-center bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-3 rounded-lg transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Get Estimate
          </Link>
        </div>
      </div>
    </div>
  );
}

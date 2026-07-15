// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  const { id, title, location, category, shortDescription, completionYear, image } = project;

  return (
    <article className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-orange-500/30 flex flex-col h-full font-sans">
      {/* Project Image Section */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-950">
        <img
          src={image}
          alt={`Finished construction project ${title}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        {/* Floating Category tag */}
        <span className="absolute top-4 right-4 bg-slate-950/90 text-orange-500 border border-orange-500/30 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md">
          {category}
        </span>
      </div>

      {/* Info Section */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              {location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              {completionYear}
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-100 group-hover:text-orange-500 transition-colors mb-2 line-clamp-1">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {shortDescription}
          </p>
        </div>

        {/* Action Link Button */}
        <Link
          to={`/projects/${id}`}
          className="inline-flex items-center justify-between bg-slate-800 hover:bg-orange-500 hover:text-white text-slate-200 text-sm font-bold py-3 px-4 rounded-xl border border-slate-700 hover:border-orange-500 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 mt-auto"
        >
          <span>View Project</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

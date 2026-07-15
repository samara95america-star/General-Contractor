// src/components/TeamCard.jsx
import React from 'react';
import { Award, Briefcase } from 'lucide-react';

export default function TeamCard({ member }) {
  const { name, position, experience, image, bio } = member;

  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:border-orange-500/30 flex flex-col h-full font-sans">
      {/* Team Member Image */}
      <div className="relative h-64 w-full bg-slate-950 overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Experience Overlay Ribbon */}
        <div className="absolute bottom-4 left-4 bg-slate-950/95 text-orange-500 border border-orange-500/25 px-3 py-1.5 rounded-lg text-xs font-bold shadow-md flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-orange-500" />
          <span>{experience}</span>
        </div>
      </div>

      {/* Team Member Info */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-100 group-hover:text-orange-500 transition-colors">
            {name}
          </h3>
          <p className="text-orange-500 font-semibold text-xs uppercase tracking-wider mt-1 mb-4 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-orange-500" />
            {position}
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
}

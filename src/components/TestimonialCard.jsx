// src/components/TestimonialCard.jsx
import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function TestimonialCard({ review }) {
  const { name, projectType, city, rating, text, completionDate, verified } = review;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg flex flex-col justify-between hover:border-slate-700 transition-all font-sans">
      <div>
        {/* Star Rating & Verified Badge */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex text-orange-500 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 fill-current ${
                  i < rating ? 'text-orange-500' : 'text-slate-700'
                }`}
              />
            ))}
          </div>
          {verified && (
            <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-400/20 py-1 px-2.5 rounded-full uppercase tracking-wider">
              <CheckCircle className="w-3 h-3" />
              Verified Client
            </span>
          )}
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-slate-200 text-sm md:text-base italic leading-relaxed mb-6">
          &ldquo;{text}&rdquo;
        </blockquote>
      </div>

      {/* Author and Project Details */}
      <div className="border-t border-slate-800 pt-4 mt-auto">
        <h4 className="text-white text-sm font-bold">{name}</h4>
        <p className="text-xs text-orange-500 font-medium mt-0.5">{projectType}</p>
        <div className="flex justify-between text-[11px] text-slate-500 mt-2">
          <span>{city}</span>
          <span>Completed: {completionDate}</span>
        </div>
      </div>
    </div>
  );
}

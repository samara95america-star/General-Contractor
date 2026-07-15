// src/components/CTASection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, ArrowRight } from 'lucide-react';

export default function CTASection({
  title = "Ready to Build Your Dream Project?",
  description = "Get in touch with Summit Build Contractors today. We provide transparent estimates, comprehensive permits management, and premium workmanship warranties.",
  primaryBtnText = "Request a Free Estimate",
  primaryBtnPath = "/estimate",
  secondaryBtnText = "Call Our Team Now",
  secondaryBtnPath = "tel:3125552026",
  isPhoneLink = true,
  theme = "navy" // 'navy' | 'orange' | 'charcoal'
}) {
  const containerClasses = {
    navy: "bg-slate-900 border border-slate-800",
    orange: "bg-gradient-to-br from-orange-500 to-amber-600 text-white border border-orange-400/20",
    charcoal: "bg-slate-950 border border-slate-800"
  };

  const textClasses = {
    navy: "text-slate-300",
    orange: "text-orange-50",
    charcoal: "text-slate-400"
  };

  const titleClasses = {
    navy: "text-white",
    orange: "text-white",
    charcoal: "text-slate-100"
  };

  return (
    <section className={`font-sans rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden ${containerClasses[theme]}`}>
      {/* Decorative vector background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className={`text-2xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight ${titleClasses[theme]}`}>
          {title}
        </h2>
        <p className={`text-sm md:text-base md:leading-relaxed max-w-2xl mx-auto mb-8 ${textClasses[theme]}`}>
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryBtnPath}
            className={`w-full sm:w-auto text-center font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all focus:outline-none focus:ring-2 hover:scale-105 active:scale-95 ${
              theme === 'orange'
                ? 'bg-slate-950 hover:bg-slate-900 text-white focus:ring-slate-500'
                : 'bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-500'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <span>{primaryBtnText}</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          {isPhoneLink ? (
            <a
              href={secondaryBtnPath}
              className={`w-full sm:w-auto text-center font-bold px-6 py-3.5 rounded-xl transition-all focus:outline-none focus:ring-2 border hover:scale-105 active:scale-95 ${
                theme === 'orange'
                  ? 'border-white hover:bg-white/10 text-white focus:ring-white'
                  : 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 focus:ring-slate-500'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{secondaryBtnText}</span>
              </span>
            </a>
          ) : (
            <Link
              to={secondaryBtnPath}
              className={`w-full sm:w-auto text-center font-bold px-6 py-3.5 rounded-xl transition-all focus:outline-none focus:ring-2 border hover:scale-105 active:scale-95 ${
                theme === 'orange'
                  ? 'border-white hover:bg-white/10 text-white focus:ring-white'
                  : 'border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 focus:ring-slate-500'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{secondaryBtnText}</span>
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

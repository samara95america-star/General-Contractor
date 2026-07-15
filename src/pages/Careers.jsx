// src/pages/Careers.jsx
import React, { useState } from 'react';
import { careersData } from '../data/careersData';
import CareerForm from '../components/CareerForm';
import Breadcrumbs from '../components/Breadcrumbs';
import { Clock, Award, Users } from 'lucide-react';

import useSEO from '../hooks/useSEO';

export default function Careers() {
  useSEO({
    title: 'Careers in Construction',
    description: 'We are hiring carpenters, site superintendents, estimators, project managers, electricians, and plumbers. Build your future with Summit Build.'
  });

  const [selectedPosition, setSelectedPosition] = useState('Carpenter');

  const handleApplyClick = (posTitle) => {
    setSelectedPosition(posTitle);
    // Smooth scroll down to form
    const formSection = document.getElementById('application-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-slate-100 bg-slate-950 text-left">
      <Breadcrumbs />

      {/* Page Header */}
      <section className="relative bg-slate-900 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest font-sans">Join Our Team</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight font-sans">Careers in Construction</h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Build a rewarding career in Chicago with a growing, safety-oriented, and highly cooperative general contractor.
          </p>
        </div>
      </section>

      {/* Careers overview and core benefits values */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Why Work Here?</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">Elevating the Construction Trades</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              At Summit Build Contractors, we believe our people are our most valuable structural resource. We are committed to providing safe jobsites, competitive wages, premium tools, and continuous education opportunities.
            </p>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Whether you are an experienced Lead Carpenter, a licensed Journeyman Plumber, or an Estimating PM, you will find a collaborative work environment that respects your trade and fosters professional development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                <ShieldCheckIcon className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Top-Tier Safety gear provided</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                <Users className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Cooperative team culture</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Steady year-round work contracts</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                <Award className="w-4 h-4 text-orange-500 shrink-0" />
                <span>OSHA training scholarships</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-80 lg:h-[400px] shadow-2xl bg-slate-900 border border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
              alt="Experienced Site Superintendent coordinating framing with active carpenter crews"
              className="w-full h-full object-cover opacity-85"
            />
          </div>
        </div>
      </section>

      {/* Grid of open positions (10 listings) */}
      <section className="py-16 bg-slate-900/40 border-y border-slate-900 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Active Openings</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Current Open Positions</h2>
            <p className="text-sm text-slate-400">
              Review qualifications and responsibilities for our active Chicagoland job opportunities. Click Apply to trigger the application form below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careersData.map((job) => (
              <div
                key={job.id}
                className="bg-slate-900 border border-slate-850 hover:border-slate-700 p-6 rounded-2xl shadow-xl flex flex-col justify-between transition-all"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start border-b border-slate-800 pb-3">
                    <div>
                      <h3 className="text-white text-lg font-bold">{job.title}</h3>
                      <span className="text-[10px] text-orange-500 uppercase tracking-widest font-semibold mt-0.5 block">{job.department}</span>
                    </div>
                    <span className="bg-slate-950 text-slate-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-slate-850">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {job.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    <span className="text-white text-[10px] font-extrabold uppercase tracking-widest block">Primary Requirements</span>
                    <ul className="space-y-1.5 pl-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="text-slate-400 text-xs flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0 mt-1.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-slate-800 mt-6 pt-4 flex justify-between items-center text-xs">
                  <span className="text-slate-500">Exp: {job.experienceRequired}</span>
                  <button
                    onClick={() => handleApplyClick(job.title)}
                    className="bg-slate-950 border border-slate-800 hover:border-orange-500 text-orange-500 font-bold px-4 py-2 rounded-xl transition-all"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Interactive application form section */}
      <section id="application-form-section" className="py-20 px-4 max-w-3xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Apply Online</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Application Questionnaire</h2>
          <p className="text-sm text-slate-400">
            Submit your construction credentials, experience history, and a mock resume file below.
          </p>
        </div>

        <CareerForm initialPosition={selectedPosition} />
      </section>
    </div>
  );
}

// Simple internal icon wrapper to avoid compilation issue
function ShieldCheckIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

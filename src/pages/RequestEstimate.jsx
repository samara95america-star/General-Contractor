// src/pages/RequestEstimate.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import EstimateForm from '../components/EstimateForm';
import Breadcrumbs from '../components/Breadcrumbs';
import { HelpCircle, Award, Footprints } from 'lucide-react';

import useSEO from '../hooks/useSEO';

export default function RequestEstimate() {
  useSEO({
    title: 'Request a Free Estimate',
    description: 'Submit your blueprint blueprints, dimensions, and project goals to receive a transparent, itemized material and labor pricing breakdown.'
  });

  const location = useLocation();

  // Extract initial type query parameter if present (e.g. ?type=Kitchen%2520Remodeling)
  const queryParams = new URLSearchParams(location.search);
  const typeParam = queryParams.get('type') || '';

  return (
    <div className="font-sans text-slate-100 bg-slate-950 text-left">
      <Breadcrumbs />

      {/* Page Header */}
      <section className="relative bg-slate-900 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest font-sans">Pre-Construction Planning</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight font-sans">Request an Estimate</h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Schedule a physical property inspection or submit digital layout blueprints to compile an itemized, transparent budget breakdown.
          </p>
        </div>
      </section>

      {/* Main estimate form layout */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form container (8 cols) */}
          <div className="lg:col-span-8">
            <EstimateForm initialProjectType={typeParam} />
          </div>

          {/* Guidelines sidebar info (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* 1. What happens next card */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg space-y-4">
              <h3 className="text-white text-sm font-bold uppercase tracking-widest border-b border-slate-800 pb-2 flex items-center gap-2">
                <Footprints className="w-5 h-5 text-orange-500 shrink-0" />
                What Happens Next?
              </h3>
              <ul className="space-y-4 text-xs text-slate-300">
                <li className="flex gap-2.5">
                  <div className="w-5 h-5 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center shrink-0 border border-orange-500/10 font-bold">1</div>
                  <p className="leading-relaxed">
                    <strong>Inquiry Logged:</strong> Our digital assistant files your specs. An estimating manager coordinates structural blueprints within 24 hours.
                  </p>
                </li>
                <li className="flex gap-2.5">
                  <div className="w-5 h-5 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center shrink-0 border border-orange-500/10 font-bold">2</div>
                  <p className="leading-relaxed">
                    <strong>Site Inspection:</strong> We arrange a quick walk-through at your Cook County property to verify foundation conditions and dimensions.
                  </p>
                </li>
                <li className="flex gap-2.5">
                  <div className="w-5 h-5 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center shrink-0 border border-orange-500/10 font-bold">3</div>
                  <p className="leading-relaxed">
                    <strong>Digital Bid Dispatched:</strong> You receive an itemized quote detailing exact lumber, quartz, roofing, siding, and permit costs.
                  </p>
                </li>
              </ul>
            </div>

            {/* 2. Frequently Asked Question snippet */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg space-y-3">
              <h3 className="text-white text-sm font-bold uppercase tracking-widest border-b border-slate-800 pb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-orange-500 shrink-0" />
                Estimation FAQs
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold text-white block mb-0.5">Are estimates 100% free?</span>
                  <p className="text-slate-400 leading-relaxed">Yes. We provide completely free physical site visits and digital project cost modeling across all served Illinois suburbs.</p>
                </div>
                <div className="border-t border-slate-800/80 pt-2">
                  <span className="font-bold text-white block mb-0.5">How long is a bid valid?</span>
                  <p className="text-slate-400 leading-relaxed">Due to shifts in building material prices (lumber, concrete, steel), all formal quotes are locked for 30 days from dispatch date.</p>
                </div>
              </div>
            </div>

            {/* 3. Safe Contractor Alert */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg flex gap-3.5">
              <Award className="w-10 h-10 text-orange-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white text-sm font-bold">Licensed &amp; Bonded GC</h4>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Every project is backed by comprehensive general liability insurance, full workers' compensation coverage, and our signature 10-Year Workmanship Warranty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// src/pages/ServiceAreas.jsx
import React from 'react';
import { serviceAreasData } from '../data/serviceAreasData';
import Breadcrumbs from '../components/Breadcrumbs';
import { MapPin } from 'lucide-react';
import CTASection from '../components/CTASection';

import useSEO from '../hooks/useSEO';

export default function ServiceAreas() {
  useSEO({
    title: 'Service Areas',
    description: 'Summit Build Contractors services Chicago, Evanston, Skokie, Lincolnwood, Niles, Park Ridge, Des Plaines, Morton Grove, Glenview, Northbrook, Oak Park, River Forest, Schaumburg, and Naperville.'
  });

  return (
    <div className="font-sans text-slate-100 bg-slate-950">
      <Breadcrumbs />

      {/* Page Header */}
      <section className="relative bg-slate-900 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Our Service Radius</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">Serving Chicago &amp; Suburbs</h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Summit Build Contractors delivers certified, code-compliant, and meticulously managed general construction, remodeling, and property repairs across Northern Illinois.
          </p>
        </div>
      </section>

      {/* Map Placeholder Block */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 px-2">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span>Summit Build Headquarters &amp; Coverage Map</span>
            </div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Interactive Placeholder</span>
          </div>

          <div className="bg-slate-950 rounded-2xl h-80 relative overflow-hidden flex flex-col items-center justify-center p-8 text-center border border-slate-850">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
            <div className="absolute w-52 h-52 rounded-full border border-orange-500/10 animate-pulse z-0" />
            <div className="absolute w-80 h-80 rounded-full border border-slate-800/60 z-0" />

            <div className="relative z-10 max-w-md space-y-3">
              <h3 className="text-white text-base font-bold">2500 Construction Avenue, Chicago, IL 60618</h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
                Our central Chicago logistics yard is positioned to dispatch equipment and crew members rapidly throughout Cook County and neighboring DuPage and Will counties.
              </p>
              <span className="inline-flex items-center gap-1.5 bg-orange-500/15 border border-orange-500/25 px-3 py-1 rounded-full text-[10px] font-bold text-orange-500 uppercase">
                Active service within 50 miles of HQ
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Service Areas */}
      <section className="py-16 px-4 max-w-7xl mx-auto space-y-12 text-left">
        <div className="max-w-2xl">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Regional Coverage</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-1">SEO Area Sections</h2>
          <p className="text-sm text-slate-400 mt-2">
            Our expert general contractors navigate local municipal building codes, setback constraints, permit requirements, and seasonal inspection benchmarks in all major Chicagoland municipalities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceAreasData.map((area) => (
            <div
              key={area.city}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg flex flex-col justify-between hover:border-slate-700 transition-all"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-white text-lg font-bold">{area.city}</h3>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5 block">{area.county}</span>
                  </div>
                  <div className="w-8 h-8 bg-orange-500/10 text-orange-500 rounded-lg flex items-center justify-center shrink-0 border border-orange-500/10">
                    <MapPin className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {area.description}
                </p>

                <div className="pt-2">
                  <span className="text-white text-[10px] font-extrabold uppercase tracking-widest block mb-2">Primary Services Offered</span>
                  <p className="text-orange-500 text-xs font-semibold">
                    {area.servicesOffered}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-800 mt-6 pt-4 text-[10px] text-slate-500 font-medium">
                Zip Codes: {area.zipCodes}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <CTASection
          title="Don't See Your Specific Community Listed?"
          description="We routinely service surrounding Cook, DuPage, and Will County suburbs. Speak with an estimating coordinator to verify crew logistics for your project."
          primaryBtnText="Verify Your Address"
          theme="orange"
        />
      </section>
    </div>
  );
}

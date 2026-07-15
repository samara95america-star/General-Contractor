// src/pages/Warranty.jsx
import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { Shield, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import CTASection from '../components/CTASection';

export default function Warranty() {
  useSEO({
    title: 'Workmanship Warranty & Guarantee',
    description: 'Review Summit Build Contractors’ workmanship warranty, manufacturer warranties, policy exclusions, and our step-by-step claims resolution process.'
  });

  const warrantyPillars = [
    {
      title: "Workmanship Coverage",
      description: "We back all of our structural framing, siding, masonry, structural concrete work, deck assemblies, and carpentry details with our signature 10-Year Workmanship Warranty. If an issue arises from our installation craftsmanship, we fix it at zero cost to you.",
      icon: Shield
    },
    {
      title: "Manufacturer Warranties",
      description: "All product warranties for shingles, siding panels, replacement windows, premium appliances, custom cabinetry, and HVAC equipment are fully registered and direct-transferred to you. This gives you extra protection directly from the manufacturers.",
      icon: Sparkles
    },
    {
      title: "Warranty Exclusions",
      description: "Our workmanship policy covers professional assembly and craftsmanship errors. It excludes normal wear and tear, acts of God (floods, tornadoes, high-wind hail storms), structural settlement due to soil shifts, owner-induced damage, or alterations completed by uncertified third parties.",
      icon: AlertCircle
    },
    {
      title: "Seamless Claims Resolution",
      description: "If you observe a possible craftsmanship or material concern, filing a claim is simple and fast. We dispatch an estimator to inspect, log details, and schedule corrective repairs without hassle.",
      icon: RefreshCw
    }
  ];

  return (
    <div className="font-sans text-slate-100 bg-slate-950">
      <Breadcrumbs />

      {/* Header section */}
      <section className="relative bg-slate-900 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Our Promise of Quality</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">Workmanship Warranty</h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            We hold our work to elite standards and stand firmly behind every joint, panel, tile, and structural frame with our signature warranty coverage.
          </p>
        </div>
      </section>

      {/* Main Warranty Sections */}
      <section className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Policy Details */}
        <div className="space-y-8">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest block">Comprehensive Coverage Overview</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">How Our Warranty Protects Your Investment</h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            At Summit Build Contractors, construction quality is never an afterthought. We implement double-membrane moisture barriers, use premium corrosion-resistant structural fasteners, and verify alignment down to the millimeter. This rigid attention to detail allows us to offer one of the most reliable workmanship guarantees in the Chicago region.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {warrantyPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 shadow-lg">
                  <div className="w-10 h-10 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center border border-orange-500/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white text-base font-bold font-sans">{pillar.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Claim process timeline */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl flex flex-col justify-between space-y-8">
          <div>
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest block mb-1">Easy Corrective Flow</span>
            <h3 className="text-white text-2xl font-black font-sans mb-4">Step-by-Step Claim Process</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
              If you identify an issue that you believe is covered under our workmanship agreement, follow these straightforward steps to initiate an audit:
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-7 h-7 rounded-full bg-orange-500/25 border border-orange-500/30 text-orange-400 flex items-center justify-center shrink-0 font-bold text-xs">
                  1
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">Contact Our Claim Office</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Submit an email or complete our online contact form with photos and a short explanation of the problem.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-7 h-7 rounded-full bg-orange-500/25 border border-orange-500/30 text-orange-400 flex items-center justify-center shrink-0 font-bold text-xs">
                  2
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">On-Site Field Inspection</h4>
                  <p className="text-slate-400 text-xs mt-0.5">We schedule a professional site superintendent to inspect the construction assembly within 48 to 72 hours.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-7 h-7 rounded-full bg-orange-500/25 border border-orange-500/30 text-orange-400 flex items-center justify-center shrink-0 font-bold text-xs">
                  3
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">Resolution &amp; Corrective Work</h4>
                  <p className="text-slate-400 text-xs mt-0.5">If verified as a workmanship defect, our expert trades will arrive to complete repairs with matching, high-quality materials.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 space-y-2">
            <span className="text-xs text-orange-500 font-bold uppercase tracking-wider block">Important Placement Disclaimer Notice</span>
            <p className="text-[11px] text-slate-500 leading-tight">
              *The terms and parameters listed above represent standard corporate drafts. Final, comprehensive, and legally-binding warranty policy agreements must be thoroughly reviewed and customized with the company’s actual legal team before public launch.
            </p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <CTASection
          title="Build with Total Confidence and Peace of Mind"
          description="Every custom build, major addition, and complete kitchen remodeling project is fully protected by our comprehensive structural guarantees."
          primaryBtnText="Speak to an Estimator"
          theme="navy"
        />
      </section>
    </div>
  );
}

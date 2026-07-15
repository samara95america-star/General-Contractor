// src/pages/Residential.jsx
import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { Home, Landmark, Key, HardHat, Compass, FileCheck, Layers, Lightbulb } from 'lucide-react';
import CTASection from '../components/CTASection';

const residentialSections = [
  {
    title: "Custom Homes",
    icon: Home,
    description: "From architectural concepts to complete timber framing and fine interior finishes, we erect high-performance custom residences customized to your unique living standards."
  },
  {
    title: "Home Additions",
    icon: Layers,
    description: "Expand your square footage seamlessly. We engineer structurally sound two-story extensions, in-law suites, sunrooms, and expanded family quarters that blend with your current home."
  },
  {
    title: "Garage Construction",
    icon: Landmark,
    description: "Construct spacious detached or attached custom garages, featuring insulated workspaces, vehicle charging provisions, and supplementary storage lofts."
  },
  {
    title: "Accessory Dwelling Units (ADUs)",
    icon: Key,
    description: "We design and build fully certified legal backyard tiny homes, coach houses, or separate apartment flats to generate rental income or accommodate multi-generational families."
  },
  {
    title: "Structural Renovations",
    icon: HardHat,
    description: "Remediate sagging foundation floor joists, execute professional load-bearing wall removals to create open spaces, and install engineered steel header support beams safely."
  },
  {
    title: "Whole-Home Remodeling",
    icon: Compass,
    description: "Comprehensive gut renovations. We upgrade framing, electrical panels, plumbing line stacks, subflooring, drywall sheets, and full insulation in historical vintage structures."
  },
  {
    title: "Exterior Improvements",
    icon: FileCheck,
    description: "Elevate your curb appeal and protect your home envelope with durable James Hardie siding installation, architectural roofing shingle tear-offs, and custom composite decks."
  },
  {
    title: "Energy-Efficient Upgrades",
    icon: Lightbulb,
    description: "Modernize home sustainability. We install spray-foam attic insulation, low-E triple-paned windows, thermal barrier wraps, and energy-efficient duct configurations."
  }
];

import useSEO from '../hooks/useSEO';

export default function Residential() {
  useSEO({
    title: 'Custom Residential Construction & Additions',
    description: 'Construct your dream custom residence, add home expansions, detached garages, or Accessory Dwelling Units (ADUs) with high-efficiency standards.'
  });

  return (
    <div className="font-sans text-slate-100 bg-slate-950">
      <Breadcrumbs />

      {/* Page Header */}
      <section className="relative bg-slate-900 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Residential Solutions</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">Residential Construction</h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Summit Build Contractors constructs elite custom residences, structurally engineered additions, and deep home transformations across Chicago and Cook County.
          </p>
        </div>
      </section>

      {/* Residential Services Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Our Offerings</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Residential Building Capabilities</h2>
          <p className="text-sm text-slate-400">
            From foundation concrete work to custom interior finish carpentry, we handle all facets of residential construction under strict licensed GC supervision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {residentialSections.map((sec) => {
            const IconComp = sec.icon;
            return (
              <div
                key={sec.title}
                className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg hover:border-orange-500/20 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-4 border border-orange-500/10">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-white text-lg font-bold mb-2">{sec.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{sec.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* The Residential Process Section */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900 px-4 text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Methodology</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">Our Residential Building Process</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Constructing a custom home or adding an extension is a significant investment. We utilize a highly organized design-build process to ensure complete coordination and schedule fidelity.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                <div>
                  <span className="font-bold text-white block">Pre-Construction Design Check</span>
                  <p className="text-xs text-slate-400 mt-0.5">We assist with architectural prints, drafting structural calculations, and aligning your dreams with realistic budget parameters.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                <div>
                  <span className="font-bold text-white block">Municipal Permitting &amp; Inspection</span>
                  <p className="text-xs text-slate-400 mt-0.5">Our office processes and secures all building permits with Chicago or suburban departments, planning municipal inspect milestones beforehand.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</div>
                <div>
                  <span className="font-bold text-white block">Milestone Structural Sign-offs</span>
                  <p className="text-xs text-slate-400 mt-0.5">Our site superintendent runs detailed inspect checklists at framing, rough-ins, and final handover, providing total warranty peace-of-mind.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Large display image representing process */}
          <div className="rounded-2xl overflow-hidden h-96 lg:h-[420px] shadow-2xl bg-slate-900 border border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
              alt="Architectural residential design prints overlaying timber wood flooring"
              className="w-full h-full object-cover opacity-85"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <CTASection
          title="Looking to Expand or Build on Your Lot?"
          description="Summit Build Contractor's estimators will walk through your site, analyze soil load boundaries, and draft a clear itemized quote modeling materials and labor transparently."
          primaryBtnText="Request Residential Estimate"
          theme="orange"
        />
      </section>
    </div>
  );
}

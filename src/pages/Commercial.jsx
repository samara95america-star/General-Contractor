// src/pages/Commercial.jsx
import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import {
  Building, Briefcase, Utensils, Shield, Warehouse,
  Users, HardHat, FileCheck2, CheckCircle2
} from 'lucide-react';
import CTASection from '../components/CTASection';

const commercialSections = [
  {
    title: "Retail Build-Outs",
    icon: Briefcase,
    description: "We deliver modern, high-traffic retail franchise, apparel, and convenience storefront build-outs designed to maximize merchandising floor plans and optimize guest flow."
  },
  {
    title: "Office Renovations",
    icon: Building,
    description: "Modernize corporate spaces with open-concept workstations, acoustic-insulated video booths, modular conference boardrooms, and ergonomic breakroom renovations."
  },
  {
    title: "Restaurants &amp; Hospitality",
    icon: Utensils,
    description: "We construct code-compliant commercial kitchens featuring complete HVAC air-makeup ventilation, integrated grease-traps, custom stone bar seating, and stylish dining lighting."
  },
  {
    title: "Medical &amp; Dental Offices",
    icon: Shield,
    description: "Construct sterile clinical exam spaces, lead-lined X-ray labs, ADA-compliant accessibility ramps, and comfortable waiting lobbies following strict HIPAA and healthcare codes."
  },
  {
    title: "Warehouses &amp; Logistics",
    icon: Warehouse,
    description: "Reinforced high-load concrete slab pours, commercial rolling shutter bays, structural high-bay lighting, and fire sprinkler systems setups for light industrial facilities."
  },
  {
    title: "Multi-Family Properties",
    icon: Users,
    description: "Comprehensive remodeling, roofing replacements, siding, and common corridor interior finishes upgrades for apartment structures, condos, and duplex developments."
  },
  {
    title: "Tenant Improvements (TI)",
    icon: HardHat,
    description: "White-box commercial preparation or bespoke modifications to prepare raw lease spaces for incoming tenants, respecting strict commercial property standards."
  },
  {
    title: "Property Maintenance",
    icon: FileCheck2,
    description: "Scheduled commercial facility envelope inspection, masonry tuckpointing, parking concrete slabs repair, and commercial contract maintenance coverage."
  }
];

import useSEO from '../hooks/useSEO';

export default function Commercial() {
  useSEO({
    title: 'Commercial Construction & Retail Build-Outs',
    description: 'We construct open office spaces, retail storefront franchise expansions, healthcare facilities, and warehouse logistical complexes.'
  });

  return (
    <div className="font-sans text-slate-100 bg-slate-950">
      <Breadcrumbs />

      {/* Page Header */}
      <section className="relative bg-slate-900 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest font-sans">Commercial Division</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight font-sans">Commercial Construction</h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Summit Build Contractors builds, extends, and modernizes state-of-the-art corporate offices, retail spaces, restaurants, and medical centers throughout Northern Illinois.
          </p>
        </div>
      </section>

      {/* Commercial Capabilities Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Our Scope</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Commercial Building Capabilities</h2>
          <p className="text-sm text-slate-400">
            We partner with business owners, corporate real estate developers, franchise operators, and commercial facility managers to deliver projects on time, on spec, and on budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commercialSections.map((sec) => {
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
                  {/* Note: We use dangerouslySetInnerHTML for titles with &amp; to render properly */}
                  <h3
                    className="text-white text-lg font-bold mb-2"
                    dangerouslySetInnerHTML={{ __html: sec.title }}
                  />
                  <p className="text-slate-400 text-xs leading-relaxed">{sec.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Developer & Owner Partnerships Block */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900 px-4 text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Client Partnerships</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">Engineering Value &amp; Safety Compliance</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              For developers, business owners, and property managers, construction downtime equals lost revenue. Summit Build Contractors employs a dedicated commercial project manager who maintains strict milestones tracking, handles municipal zoning clearances, and coordinates subtrade tradesmen schedules closely.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              We focus on value-engineering, suggesting cost-saving material substitutions without compromising structural durability or corporate safety regulations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>OSHA-30 Site Supervisors</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>ADA &amp; HIPAA Code Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Fully Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Milestone-Based Scheduling</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden h-96 lg:h-[420px] shadow-2xl bg-slate-900 border border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              alt="Corporate open office space with high structural glass dividers"
              className="w-full h-full object-cover opacity-85"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <CTASection
          title="Planning a Commercial Development or Build-Out?"
          description="Speak with our Commercial Estimating Team. We process digital blueprints, formulate commercial bids, and help business owners secure optimal layout design solutions."
          primaryBtnText="Discuss Your Commercial Project"
          theme="orange"
        />
      </section>
    </div>
  );
}

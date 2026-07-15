// src/pages/Safety.jsx
import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { Shield, Award, UserCheck, Clock, Users, Wrench, Sparkles, FileText, Home } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import CTASection from '../components/CTASection';

export default function Safety() {
  useSEO({
    title: 'Safety Standards & OSHA Compliance',
    description: 'Learn about Summit Build Contractors’ comprehensive safety standards, including jobsite safety protocols, daily safety meetings, subcontractor rules, and client property protection.'
  });

  const safetyItems = [
    {
      title: "Jobsite Safety Protocols",
      description: "We establish a zero-accident project culture. Every Summit Build site is fully fenced, barricaded, and marked with appropriate safety signage to protect our crew, visitors, and passersby.",
      icon: Shield
    },
    {
      title: "OSHA Compliance & Training",
      description: "Our construction directors and site superintendents hold active OSHA-30 certifications, and our general labor crew members hold OSHA-10 cards. We follow all federal, state, and local safety rules.",
      icon: Award
    },
    {
      title: "Personal Protective Equipment (PPE)",
      description: "No individual is allowed on our job sites without complete PPE, including ANSI-approved hard hats, safety glasses, high-visibility apparel, steel-toe boots, and appropriate fall protection harnesses.",
      icon: UserCheck
    },
    {
      title: "Daily Safety Meetings & Toolbox Talks",
      description: "Every shift starts with a mandatory field meeting led by the superintendent. We review daily tasks, identify potential safety hazards, plan heavy machinery routes, and inspect safety rigs.",
      icon: Clock
    },
    {
      title: "Subcontractor Safety Integration",
      description: "Any specialized subcontractor coordinating on our jobsites must submit a safety plan, name an active safety liaison, and strictly adhere to Summit Build’s zero-tolerance hazard control policies.",
      icon: Users
    },
    {
      title: "Rigorous Equipment Inspection",
      description: "All scaffolding, lifts, hand tools, ladders, and heavy machinery are inspected daily before operation. Defective equipment is immediately tagged out, deactivated, and scheduled for professional maintenance.",
      icon: Wrench
    },
    {
      title: "Continuous Site Cleanliness",
      description: "A clean jobsite is a safe jobsite. We sweep, clear nails, sort recycled scrap, and bag active debris at the end of every single work shift, minimizing tripping, dust, and puncture hazards.",
      icon: Sparkles
    },
    {
      title: "Immediate Incident Reporting",
      description: "We maintain a robust incident logging framework. Any near-miss, structural issue, or minor injury is logged instantly in our field management CRM, triggering root-cause audits and safety corrections.",
      icon: FileText
    },
    {
      title: "Client & Property Protection",
      description: "When working in occupied homes or buildings, we install heavy floor-protection runners, seal doorways with heavy dust-barrier zippers, and utilize clean air filters to safeguard your property and health.",
      icon: Home
    }
  ];

  return (
    <div className="font-sans text-slate-100 bg-slate-950">
      <Breadcrumbs />

      {/* Header section */}
      <section className="relative bg-slate-900 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Our #1 Priority</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">Jobsite Safety &amp; Compliance</h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            At Summit Build Contractors, we believe that an outstanding construction project is built on the foundation of rigorous safety, complete compliance, and site protection.
          </p>
        </div>
      </section>

      {/* Safety Cards Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyItems.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl hover:border-orange-500/20 transition-all group"
              >
                <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-6 border border-orange-500/10 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-white text-lg font-bold mb-3 font-sans">{item.title}</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Safety Commitment Callout */}
      <section className="py-16 bg-slate-900/40 border-y border-slate-900 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-white text-2xl md:text-3xl font-extrabold">Have Questions About On-Site Safety?</h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Whether we are lifting heavy commercial steel structures or remodeling a second-story bathroom with your family living downstairs, we are happy to share our project-specific safety blueprints, air filtration strategies, and protection measures.
          </p>
          <div className="pt-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full text-xs font-bold border border-orange-500/10">
              *All safety policies are template examples. Verified procedures are configured based on localized municipal codes.
            </span>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <CTASection
          title="Begin Planning Your Safe Construction Project"
          description="Schedule an on-site consultation to review site-specific safety plans, materials layout grids, and estimated structural timelines."
          primaryBtnText="Request a Free Estimate"
          theme="orange"
        />
      </section>
    </div>
  );
}

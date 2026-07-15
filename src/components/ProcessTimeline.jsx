// src/components/ProcessTimeline.jsx
import React from 'react';
import {
  PhoneCall, MapPin, ClipboardList, PenTool, FileCheck,
  Sparkles, Hammer, ShieldCheck, Footprints, HeartHandshake
} from 'lucide-react';

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    icon: PhoneCall,
    description: "We discuss your project vision, timeline goals, functional needs, and budget boundaries over a friendly initial call."
  },
  {
    step: "02",
    title: "Site Visit",
    icon: MapPin,
    description: "Our general contractor and project estimators inspect physical conditions, take measurements, and identify potential issues."
  },
  {
    step: "03",
    title: "Scope & Estimate",
    icon: ClipboardList,
    description: "We compile an itemized, transparent digital estimate breakdown, listing materials and labor with zero hidden fees."
  },
  {
    step: "04",
    title: "Design & Planning",
    icon: PenTool,
    description: "Our design coordinators assist with material layouts, drafting structural architectural blueprints, and selecting finishes."
  },
  {
    step: "05",
    title: "Permits & Approvals",
    icon: FileCheck,
    description: "We handle the complete permitting pipeline with Chicago or local suburban building departments, ensuring 100% compliance."
  },
  {
    step: "06",
    title: "Material Selection",
    icon: Sparkles,
    description: "We procure premium, certified materials, securing direct delivery to the construction site prior to start date."
  },
  {
    step: "07",
    title: "Construction",
    icon: Hammer,
    description: "Our directly employed field crews and vetted master trade subcontractors begin building, keeping sites clean and safe."
  },
  {
    step: "08",
    title: "Quality Inspection",
    icon: ShieldCheck,
    description: "Our site superintendent runs daily inspections and coordinates scheduled municipal checkoffs for framing, electrical, and plumbing."
  },
  {
    step: "09",
    title: "Final Walkthrough",
    icon: Footprints,
    description: "We inspect the entire site together, answering any questions, verifying punch-list items, and ensuring your 100% satisfaction."
  },
  {
    step: "10",
    title: "Warranty & Support",
    icon: HeartHandshake,
    description: "We handover keys, complete user guides, and initiate our standard 10-Year Workmanship Warranty for lasting peace of mind."
  }
];

export default function ProcessTimeline() {
  return (
    <div className="font-sans relative">
      {/* Visual Timeline Connector Line (Desktop Only) */}
      <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-orange-500 via-slate-700 to-orange-500 hidden lg:block -translate-x-1/2" />

      <div className="space-y-12 lg:space-y-16">
        {processSteps.map((stepItem, idx) => {
          const IconComp = stepItem.icon;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={stepItem.step}
              className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 relative ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Left/Right Text Card */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div
                  className={`bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl hover:border-slate-700 transition-all w-full max-w-lg ${
                    isEven ? 'lg:text-right' : 'lg:text-left'
                  }`}
                >
                  <span className="text-orange-500 text-xs md:text-sm font-extrabold tracking-widest uppercase block mb-1">
                    Step {stepItem.step}
                  </span>
                  <h3 className="text-white text-lg md:text-xl font-extrabold mb-3 flex items-center gap-2.5 justify-start lg:justify-end">
                    {!isEven && <IconComp className="w-5 h-5 text-orange-500 shrink-0 lg:hidden" />}
                    <span>{stepItem.title}</span>
                    {isEven && <IconComp className="w-5 h-5 text-orange-500 shrink-0 lg:hidden" />}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
              </div>

              {/* Central Circle Badge (Desktop Only) */}
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-950 border-4 border-slate-800 text-orange-500 rounded-full flex items-center justify-center font-black text-sm shadow-xl z-10 hidden lg:flex">
                <IconComp className="w-5 h-5" />
              </div>

              {/* Spacer on the opposite side to balance grid (Desktop Only) */}
              <div className="w-full lg:w-1/2 hidden lg:block" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

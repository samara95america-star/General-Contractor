// src/components/TrustBadge.jsx
import React from 'react';
import { ShieldCheck, FileCheck2, Hammer, HardHat, Award, BadgeCheck, Users, HelpCircle } from 'lucide-react';

const trustItems = [
  {
    id: "license",
    title: "General Contractor License",
    subtitle: "License #GC1234567 - Placeholder",
    icon: ShieldCheck,
    description: "Vetted and registered under local municipal guidelines. Active and certified."
  },
  {
    id: "insurance",
    title: "Liability Insurance",
    subtitle: "$2,000,000 Policy - Placeholder",
    icon: FileCheck2,
    description: "Comprehensive structural damage insurance covering all work sites."
  },
  {
    id: "workers-comp",
    title: "Workers' Compensation",
    subtitle: "Active Coverage - Placeholder",
    icon: Users,
    description: "Full staff protection safeguarding homeowners from liability."
  },
  {
    id: "bonded",
    title: "Bonded Contractor",
    subtitle: "Surety Bonded - Placeholder",
    icon: Hammer,
    description: "Fully bonded general contractor offering ultimate financial protection."
  },
  {
    id: "osha",
    title: "OSHA Safety Training",
    subtitle: "OSHA-10 & OSHA-30 - Placeholder",
    icon: HardHat,
    description: "All lead site supers and project estimators are OSHA certified."
  },
  {
    id: "mfg-cert",
    title: "Manufacturer Certifications",
    subtitle: "GAF, Azek, James Hardie - Placeholder",
    icon: Award,
    description: "Certified preferred installers unlocking premium extended warranties."
  },
  {
    id: "bbb",
    title: "Better Business Bureau Profile",
    subtitle: "Rating A+ - Placeholder",
    icon: BadgeCheck,
    description: "Committed to resolving all consumer disputes with extreme integrity."
  },
  {
    id: "trade-assoc",
    title: "Local Trade Association",
    subtitle: "Chicagoland Builder Member - Placeholder",
    icon: HelpCircle,
    description: "Active members in regional building and construction trade coalitions."
  }
];

export default function TrustBadge() {
  return (
    <div className="font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustItems.map((item) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-md flex flex-col justify-between hover:border-orange-500/30 transition-all text-left"
            >
              <div>
                <div className="w-10 h-10 bg-orange-500/10 text-orange-500 rounded-lg flex items-center justify-center mb-4 border border-orange-500/10">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-white text-base font-bold mb-1">{item.title}</h3>
                <p className="text-orange-500 text-xs font-semibold mb-3">{item.subtitle}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Required Disclaimer Notice */}
      <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl mt-8 text-center text-xs text-slate-500 leading-relaxed max-w-3xl mx-auto">
        <span className="text-orange-500 font-bold block mb-1 uppercase tracking-wider">Verification Disclaimer Notice</span>
        All licenses, credentials, ratings, associations, and insurance policy values presented above are placeholder items for demonstration purposes. These details must be reviewed, adjusted, and replaced with verified Summit Build Contractors company information prior to final production website deployment.
      </div>
    </div>
  );
}

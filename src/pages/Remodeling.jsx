// src/pages/Remodeling.jsx
import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import {
  CheckSquare, ArrowRight, Clock,
  Sparkles, Hammer, Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';

const remodelingSections = [
  {
    id: "kitchen",
    title: "Kitchen Remodeling",
    timeline: "4 - 8 Weeks",
    benefits: [
      "Optimized cooking workflows with modern layout configurations",
      "Increases overall resale property value significantly",
      "Integrated energy-efficient appliances and modern smart-lighting"
    ],
    scope: [
      "Full wall demounting and framing sister load-bearing checks",
      "Cabinetry assembly, plumbing, and luxury appliance wiring",
      "Custom slab quartz fitting and mosaic backsplash installation"
    ],
    beforeAfter: {
      before: "Damp, yellowed 1980s melamine cabinets with cracked tiles and limited counter prep space.",
      after: "Sleek open-concept culinary kitchen with dual cascading white quartz waterfall islands."
    },
    beforeImg: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bathroom",
    title: "Bathroom Remodeling",
    timeline: "2 - 4 Weeks",
    benefits: [
      "Turns basic layouts into spa-grade home retreats",
      "Premium Schluter-Ditra state-of-the-art waterproofing integration",
      "Reduces water costs through smart-flow luxury fixtures"
    ],
    scope: [
      "Gutting existing drywall sheets down to the structural framing studs",
      "Trenching custom shower drains and sweating copper plumbing stacks",
      "Heated tile wire installation and steam glass partition assembly"
    ],
    beforeAfter: {
      before: "Cramped bathroom layout with water-damaged drywall sheets, stained grout, and weak ventilation.",
      after: "Expansive marble master suite with glass-enclosed steam shower and freestanding soaking tub."
    },
    beforeImg: "https://images.unsplash.com/photo-1620626011161-997c51922658?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "basement",
    title: "Basement Remodeling",
    timeline: "4 - 6 Weeks",
    benefits: [
      "Maximizes living spaces cost-effectively without building extensions",
      "Sub-slab moisture mitigation and thermal barrier framing installation",
      "Adds high-ROI legal apartments or custom home theater systems"
    ],
    scope: [
      "Injecting foundation cracks with concrete epoxies and laying drain tiles",
      "Assembling soundproof wood-stud framing and acoustic drywall boards",
      "Wet-bar plumbing supply line expansions and HVAC booster installations"
    ],
    beforeAfter: {
      before: "Cold, uninsulated concrete shell storing seasonal bins with minor winter humidity leaks.",
      after: "Warm, fully illuminated home theater zone with integrated walk-out bar and custom lighting."
    },
    beforeImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "whole-home",
    title: "Whole-Home Renovation",
    timeline: "3 - 5 Months",
    benefits: [
      "Coordinates complex structural and aesthetic upgrades concurrently",
      "Brings historic, drafty buildings up to modern code standards",
      "Ensures cohesive interior and material designs on every level"
    ],
    scope: [
      "Full architectural print filing and interior partition demounting",
      "Service panel upgrades, re-wiring, and new HVAC duct layouts",
      "Hardwood laying, level-5 drywall finishing, painting, and trim assembly"
    ],
    beforeAfter: {
      before: "Drafty historic multi-room layout with knob-and-tube wiring and sagged floor joints.",
      after: "Level, insulated, open-concept layout containing seamless floor boards and modern appliances."
    },
    beforeImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "condo",
    title: "Condo Remodeling",
    timeline: "4 - 8 Weeks",
    benefits: [
      "Optimizes tight urban footprints for luxury city living",
      "Strict compliance with high-rise HOA and architectural guidelines",
      "Avoids structural disruption using specialized water and sound wraps"
    ],
    scope: [
      "Coordinating material elevator bookings and construction schedules",
      "Acoustically isolating sub-floors with rubber underlayment rolls",
      "Prefabricating custom plumbing manifolds to match vintage stacks"
    ],
    beforeAfter: {
      before: "Builder-grade high-rise unit from 1990 with closed partitions and old flooring.",
      after: "Luminous modern condominium featuring open floor plans, quartz slabs, and flush cabinets."
    },
    beforeImg: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "apartment",
    title: "Apartment Renovation",
    timeline: "4 - 6 Weeks",
    benefits: [
      "Improves rental cash flows and positions listings as premium units",
      "Installs heavy-duty water-resistant materials built to resist tenant wear",
      "Maximizes structural integrity of multi-unit fire separations"
    ],
    scope: [
      "Demolishing aged laminate flooring, framing, and basic countertops",
      "Laying durable luxury vinyl plank (LVP) and tile backsplashes",
      "Upgrading plumbing supply shut-off valves and installing modern lighting"
    ],
    beforeAfter: {
      before: "Peeling vinyl flooring, dripping faucets, and outdated lighting panels in a rental flat.",
      after: "Clean, brightly illuminated unit with custom gray LVP flooring and stainless fixtures."
    },
    beforeImg: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "accessibility",
    title: "Accessibility Improvements",
    timeline: "1 - 3 Weeks",
    benefits: [
      "Enables independent living and safety for seniors or individuals with disabilities",
      "Complies with rigorous ADA structural safety guidelines and sizing",
      "Beautifully integrates medical safety gear without looking institutional"
    ],
    scope: [
      "Widening bedroom and bathroom doorways to accommodate wheel-chairs",
      "Installing custom low-threshold shower bases and safety grab rails",
      "Laying slip-resistant floor boards and building exterior structural ramps"
    ],
    beforeAfter: {
      before: "Standard bathroom with high tub borders, narrow doors, and zero safety leverage points.",
      after: "Beautiful roll-in curb-free custom tiled shower room with wall-mounted teak bench and polished bars."
    },
    beforeImg: "https://images.unsplash.com/photo-1620626011161-997c51922658?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80"
  }
];

import useSEO from '../hooks/useSEO';

export default function Remodeling() {
  useSEO({
    title: 'Kitchen, Bath & Basement Remodeling',
    description: 'Transform your living spaces with high-ROI kitchen remodels, custom master bathroom spas, finished basements, and accessibility additions.'
  });

  return (
    <div className="font-sans text-slate-100 bg-slate-950">
      <Breadcrumbs />

      {/* Page Header */}
      <section className="relative bg-slate-900 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest font-sans">Premium Transformations</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight font-sans">Remodeling &amp; Renovations</h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Summit Build Contractors executes high-ROI kitchen expansions, spa bathroom additions, and whole-home gut remodeling projects with unyielding structural quality.
          </p>
        </div>
      </section>

      {/* Pricing Disclaimer Warning */}
      <section className="pt-10 px-4 max-w-4xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-start gap-4 text-left">
          <Info className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-white block font-bold mb-1 uppercase tracking-wider">Pricing and Cost Estimate Disclaimer</strong>
            Please note that the timelines, project scopes, and before-and-after cases provided below are typical regional guidelines. Summit Build Contractors does not present fixed construction prices as guaranteed final sums. Every project demands custom structural sizing, material specifications, and physical inspection audits prior to final contract pricing.
          </p>
        </div>
      </section>

      {/* Detailed Remodeling Sections */}
      <section className="py-16 px-4 max-w-6xl mx-auto space-y-24">
        {remodelingSections.map((sec) => (
          <article
            key={sec.id}
            id={sec.id}
            className="bg-slate-900 border border-slate-800/80 rounded-3xl p-6 md:p-10 shadow-2xl flex flex-col lg:grid lg:grid-cols-12 gap-8 text-left"
          >
            {/* Left: Text, Scope & Benefits (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="border-b border-slate-800 pb-3 flex justify-between items-start gap-4">
                <div>
                  <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/15">
                    Remodeling Specialty
                  </span>
                  <h3 className="text-white text-2xl font-black mt-2">{sec.title}</h3>
                </div>
                <div className="text-xs text-slate-400 font-bold flex items-center gap-1.5 shrink-0 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Clock className="w-3.5 h-3.5 text-orange-500" />
                  <span>Timeline: {sec.timeline}</span>
                </div>
              </div>

              {/* Scope of Work */}
              <div className="space-y-2">
                <h4 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Hammer className="w-4 h-4 text-orange-500" /> Typical Project Scope
                </h4>
                <ul className="space-y-2 text-slate-300 text-xs pl-1">
                  {sec.scope.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="space-y-2">
                <h4 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-orange-500" /> Core Renovation Benefits
                </h4>
                <ul className="space-y-2 text-slate-400 text-xs pl-1">
                  {sec.benefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <Link
                  to={`/estimate?type=${encodeURIComponent(sec.title)}`}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs py-3 px-6 rounded-xl shadow transition-transform hover:scale-105 inline-flex items-center gap-1.5"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Before & After Split Visuals (5 cols) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest border-b border-slate-800 pb-2">
                Before &amp; After Visual Outline
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {/* Before Image Placeholder */}
                <div className="space-y-2">
                  <div className="relative rounded-xl overflow-hidden h-32 bg-slate-950 border border-slate-800">
                    <img
                      src={sec.beforeImg}
                      alt={`Before ${sec.title}`}
                      className="w-full h-full object-cover opacity-50 grayscale"
                    />
                    <span className="absolute top-2 left-2 bg-slate-950/80 text-[10px] text-slate-400 font-bold px-2 py-0.5 rounded uppercase border border-slate-800">
                      Before
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-normal line-clamp-3">
                    {sec.beforeAfter.before}
                  </p>
                </div>

                {/* After Image Placeholder */}
                <div className="space-y-2">
                  <div className="relative rounded-xl overflow-hidden h-32 bg-slate-950 border border-orange-500/20">
                    <img
                      src={sec.afterImg}
                      alt={`After ${sec.title}`}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-orange-500 text-[10px] text-white font-bold px-2 py-0.5 rounded uppercase shadow">
                      After
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-normal line-clamp-3">
                    {sec.beforeAfter.after}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* FAQ & Siding Info Callouts */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <CTASection
          title="Curious about your home's potential?"
          description="We provide layout renderings, structural floor leveling services, and help source high-end appliances through regional vendor partnerships."
          primaryBtnText="Consult a Remodeling PM"
          theme="charcoal"
        />
      </section>
    </div>
  );
}

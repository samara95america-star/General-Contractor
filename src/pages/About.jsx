// src/pages/About.jsx
import React from 'react';
import { teamData } from '../data/teamData';
import TeamCard from '../components/TeamCard';
import Breadcrumbs from '../components/Breadcrumbs';
import { ShieldCheck, Heart, Users2, ShieldAlert, CheckCircle, Award, Compass, MessageSquare } from 'lucide-react';
import CTASection from '../components/CTASection';

const coreValues = [
  {
    title: "Integrity",
    description: "We quote transparently, bill honestly, and always keep our promises. No hidden markups or shortcuts.",
    icon: ShieldCheck
  },
  {
    title: "Quality",
    description: "We utilize premium, code-compliant materials, and directly employ expert, certified master craftsmen.",
    icon: Award
  },
  {
    title: "Safety",
    description: "Our site superintendents enforce strict OSHA regulations on-site daily, protecting workers and clients.",
    icon: ShieldAlert
  },
  {
    title: "Communication",
    description: "We provide client portal updates, daily superintendent briefs, and pro-active project management alerts.",
    icon: MessageSquare
  },
  {
    title: "Accountability",
    description: "We hold our work to the highest structural standards and stand behind them with our 10-Year Warranty.",
    icon: CheckCircle
  },
  {
    title: "Respect",
    description: "We clean jobsites daily, respect neighborhood property borders, and treat your home like our own.",
    icon: Heart
  },
  {
    title: "Reliability",
    description: "We arrive on schedule, operate under strict contract terms, and deliver finished projects on budget.",
    icon: Compass
  }
];

import useSEO from '../hooks/useSEO';

export default function About() {
  useSEO({
    title: 'About Us',
    description: 'Learn about Summit Build Contractors, our corporate story, 20+ years of building experience, core company values, and our licensed project management leadership.'
  });

  return (
    <div className="font-sans text-slate-100 bg-slate-950">
      <Breadcrumbs />

      {/* Page Header */}
      <section className="relative bg-slate-900 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">About Our Company</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">Summit Build Contractors</h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            A premium, full-service general contracting and construction firm serving homeowners, developers, and corporate managers in the Chicago metropolitan area.
          </p>
        </div>
      </section>

      {/* Our Story & Experience */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Our Heritage</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">Our Story &amp; Experience</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Founded over two decades ago, Summit Build Contractors started as a small, family-owned framing and trim carpentry crew in Chicago. Driven by a solid reputation for unyielding structural quality, clean jobsites, and transparent billing, we steadily expanded our capabilities into full-service general contracting.
            </p>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Today, our firm orchestrates complex residential custom homes, expansive room additions, whole-house structural remodels, and sophisticated commercial office and retail build-outs. Even as we grow, we retain our founding focus on rigorous quality standards and close customer collaboration.
            </p>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center shrink-0 border border-orange-500/10">
                <Users2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold">Direct Professional Team</h4>
                <p className="text-slate-400 text-xs mt-0.5">We maintain directly employed expert carpenters and certified site managers rather than outsourcing core work.</p>
              </div>
            </div>
          </div>
          {/* Side Image */}
          <div className="relative rounded-2xl overflow-hidden h-96 lg:h-[480px] shadow-2xl bg-slate-900 border border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
              alt="General Contractor inspecting structural home framing"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Our Mission & Commitment to Quality */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest block">Our Focus</span>
              <h3 className="text-white text-2xl font-black">Our Mission Statement</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our mission is to build beautiful, structurally superior residential and commercial projects that enhance community life. We do so by offering a transparent general contracting experience that puts safety, continuous communication, and exceptional, durable craftsmanship first.
              </p>
            </div>
            <div className="border-t border-slate-800 pt-4 mt-6">
              <p className="text-slate-400 text-xs italic">&ldquo;Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction, and skillful execution.&rdquo;</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest block">Quality Control</span>
              <h3 className="text-white text-2xl font-black">Our Commitment to Quality</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We believe in doing things right the first time. We utilize advanced water-barrier membranes, rigid shear-panel sheathing, premium fiber-cement siding, and grade-A timber structures. Every rough-in and finish milestone undergoes thorough site superintendent check-offs.
              </p>
            </div>
            <div className="border-t border-slate-800 pt-4 mt-6">
              <p className="text-orange-500 text-xs font-extrabold uppercase tracking-wider">All work backed by our premier 10-Year Workmanship Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Our Foundation</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">Our 7 Core Company Values</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            These guiding operational standards form the foundation of our work culture and direct how we interact with clients, sub-trades, and local building authorities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val) => {
            const IconComp = val.icon;
            return (
              <div key={val.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg hover:border-orange-500/20 transition-all text-left">
                <div className="w-10 h-10 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-4 border border-orange-500/10">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-white text-lg font-bold mb-2">{val.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{val.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Leadership & Staff Section */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-900 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest font-sans">Our Leaders</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white font-sans">Meet Our Professional Team</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Our estimators, project managers, and carpenters bring decades of combined construction expertise to your job site.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden h-80 lg:h-[400px] shadow-xl bg-slate-900 border border-slate-800 lg:order-last">
            <img
              src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80"
              alt="Summit Build team volunteering and building masonry local structures"
              className="w-full h-full object-cover opacity-85"
            />
          </div>
          <div className="space-y-6">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Giving Back</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">Community Involvement</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              At Summit Build Contractors, we believe in supporting the local communities we serve. Every year, we coordinate with regional shelters, community centers, and non-profits to build custom ADA ramps, repair decaying structural elements, and run basic carpentry training programs for youth.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              We also support local high school vocational trades and sponsor educational apprenticeships, providing tools, safety gear, and OSHA training scholarships to local youth wishing to enter the construction trades.
            </p>
            <div className="pt-2">
              <span className="text-xs text-orange-500 font-bold uppercase tracking-widest block mb-2">Why Choose Summit Build?</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Licensed General Contractor</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>10-Yr Structural Warranty</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Subcontractor Supervision</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>Clean Daily Jobsite Cleanup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <CTASection
          title="Ready to Work with a Vetted, Certified Team?"
          description="Speak with our chief estimator, Sarah or Marcus, to outline your architectural goals and draft a clear itemized quote breakdown."
          primaryBtnText="Contact Our Team"
          theme="navy"
        />
      </section>
    </div>
  );
}

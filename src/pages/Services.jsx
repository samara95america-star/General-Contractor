// src/pages/Services.jsx
import React, { useState, useEffect } from 'react';
import { servicesData } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';
import Breadcrumbs from '../components/Breadcrumbs';
import { CheckSquare, AlertCircle } from 'lucide-react';
import CTASection from '../components/CTASection';

import useSEO from '../hooks/useSEO';

export default function Services() {
  useSEO({
    title: 'Our Service Offerings',
    description: 'Explore the 20 professional contracting, construction, design-build, and maintenance services offered by Summit Build Contractors in Chicago.'
  });

  const [filter, setFilter] = useState('all'); // 'all' | 'residential' | 'commercial' | 'remodeling' | 'coordination' | 'specialty'
  const [filteredServices, setFilteredServices] = useState(servicesData);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredServices(servicesData);
    } else {
      setFilteredServices(servicesData.filter((s) => s.category === filter));
    }
  }, [filter]);

  const categories = [
    { label: 'All 20 Services', val: 'all' },
    { label: 'Residential', val: 'residential' },
    { label: 'Commercial', val: 'commercial' },
    { label: 'Remodeling', val: 'remodeling' },
    { label: 'Sub-trade Coordination', val: 'coordination' },
    { label: 'Specialty & Maintenance', val: 'specialty' }
  ];

  return (
    <div className="font-sans text-slate-100 bg-slate-950">
      <Breadcrumbs />

      {/* Page Header */}
      <section className="relative bg-slate-900 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Our Service Offerings</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">Professional Contracting Services</h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Summit Build Contractors delivers certified, code-compliant, and meticulously managed general construction, remodeling, and property repairs across Chicagoland.
          </p>
        </div>
      </section>

      {/* Filter Menu Section */}
      <section className="py-8 bg-slate-950 border-b border-slate-900 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.val}
              onClick={() => setFilter(cat.val)}
              className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                filter === cat.val
                  ? 'bg-orange-500 text-white border-orange-500 shadow-md'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Deep-Dive Detailed Service Scope Accordion */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Scope Details</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Full Service Explanations &amp; Timelines</h2>
            <p className="text-sm text-slate-400">
              Review typical timelines, construction benefits, and operational descriptions for our key service categories below.
            </p>
          </div>

          <div className="space-y-6">
            {servicesData.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-all text-left"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-4">
                  <div>
                    <span className="text-orange-500 text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/15">
                      {service.category}
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2">{service.title}</h3>
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 font-semibold flex items-center gap-1.5 shrink-0">
                    <span className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span>Avg. Duration: {service.timeline}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <span className="text-white text-xs font-bold uppercase tracking-widest">Key Structural Benefits</span>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-400">
                    {service.benefits.map((ben, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-slate-950 p-3 rounded-lg border border-slate-800/80">
                        <CheckSquare className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-4 justify-end">
                  <a
                    href={`/estimate?type=${encodeURIComponent(service.title)}`}
                    className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2.5 px-5 rounded-lg shadow transition-all focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    Request Estimate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Coordination Explanation */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Coordinated Subtrades</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">Electrical, Plumbing &amp; HVAC Coordination</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              To deliver 100% compliant and warrantied electrical, plumbing, heating, and cooling work, Summit Build Contractors directly manages certified master trade professionals.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              We coordinate all site layout, conduit sizing, supply tubing, waste line routing, load balancing, panel updates, and furnace sizing, keeping all municipal inspection workflows perfectly synchronized. You only have to coordinate with one general contractor, and we hold complete responsibility.
            </p>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400">
                All mechanical sub-trades are fully licensed union or independent master plumbers and electricians vetted regularly by Summit Build.
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden h-96 lg:h-[400px] shadow-2xl bg-slate-900 border border-slate-800">
            <img
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80"
              alt="Licensed HVAC mechanics testing continuous residential air flow systems"
              className="w-full h-full object-cover opacity-85"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <CTASection
          title="Looking for a Customized Construction Solution?"
          description="We provide structural calculations, digital blueprint layout design, materials selection help, and itemized transparent budget models. Reach out now."
          primaryBtnText="Consult an Estimator"
          theme="orange"
        />
      </section>
    </div>
  );
}

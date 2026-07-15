// src/pages/Contact.jsx
import React from 'react';
import ContactForm from '../components/ContactForm';
import Breadcrumbs from '../components/Breadcrumbs';
import {
  MapPin, Phone, Mail, Clock, AlertTriangle
} from 'lucide-react';

export default function Contact() {
  return (
    <div className="font-sans text-slate-100 bg-slate-950">
      <Breadcrumbs />

      {/* Page Header */}
      <section className="relative bg-slate-900 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Connect With Us</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">Contact Summit Build</h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Get in touch with our estimators, site coordinators, or administrative office. We look forward to discussing your project!
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Office & Info Cards */}
          <div className="lg:col-span-5 space-y-8 text-left">
            {/* 1. Office Info Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-white text-lg font-bold mb-6 border-b border-slate-800 pb-3 uppercase tracking-wider text-orange-500">
                Corporate Office
              </h3>
              <ul className="space-y-5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Street Address</span>
                    <p className="mt-0.5">2500 Construction Avenue</p>
                    <p>Chicago, IL 60618</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Main Phone Line</span>
                    <a href="tel:3125552026" className="text-slate-300 hover:text-orange-500 transition-colors">(312) 555-2026</a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Email Inquiries</span>
                    <a href="mailto:info@summitbuildcontractors.com" className="text-slate-300 hover:text-orange-500 transition-colors">info@summitbuildcontractors.com</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* 2. Business Hours & Emergency */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg space-y-6">
              <div>
                <h3 className="text-white text-lg font-bold mb-4 border-b border-slate-800 pb-3 uppercase tracking-wider text-orange-500 flex items-center gap-2">
                  <Clock className="w-5 h-5" /> Business Hours
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  <li className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Monday–Friday</span>
                    <span className="font-semibold text-white">7:00 AM–6:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-800 pb-2">
                    <span>Saturday</span>
                    <span className="font-semibold text-white">8:00 AM–2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-slate-500">Closed</span>
                  </li>
                </ul>
              </div>

              {/* Emergency service notice */}
              <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-xl flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <span className="font-bold text-orange-500 text-sm block">Emergency Service Available</span>
                  <p className="text-slate-400 text-xs leading-relaxed mt-0.5">
                    For active leak emergencies, structural failures, or post-storm board-up shoring, our crew is available 24/7 by phone. Please call our main line.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Service Area Summary */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md text-sm text-slate-300 space-y-3">
              <h4 className="font-bold text-white uppercase text-xs tracking-widest text-orange-500">Service Coverage</h4>
              <p className="text-xs leading-relaxed text-slate-400">
                Summit Build Contractors coordinates construction and siding repairs throughout the entire city of Chicago and Cook County, extending to northern and western suburbs.
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs font-semibold text-slate-300">
                <span>✓ Chicago</span>
                <span>✓ Evanston</span>
                <span>✓ Skokie</span>
                <span>✓ Park Ridge</span>
                <span>✓ Oak Park</span>
                <span>✓ Naperville</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-3xl shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 px-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-bold text-white">Interactive HQ Map &amp; Service Radius</span>
            </div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Google Maps API Placeholder</span>
          </div>

          {/* Map canvas visual box */}
          <div className="bg-slate-950 rounded-2xl h-96 relative overflow-hidden flex flex-col items-center justify-center p-8 text-center border border-slate-800/80">
            {/* Visual concentric rings representing radius */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
            <div className="absolute w-72 h-72 rounded-full border border-orange-500/10 animate-pulse z-0" />
            <div className="absolute w-96 h-96 rounded-full border border-slate-800/80 z-0" />

            <div className="relative z-10 max-w-md space-y-4">
              <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center mx-auto border border-orange-500/20 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-white text-base font-bold">2500 Construction Avenue, Chicago, IL 60618</h4>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
                Our central Chicago logistics yard and corporate offices are positioned to dispatch equipment and crew members rapidly throughout the metro zone.
              </p>
              <div className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full text-[10px] font-bold text-orange-500 uppercase">
                Active service within 50 miles of HQ
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

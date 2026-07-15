// src/components/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Send, Mail, Phone, MapPin, Shield } from 'lucide-react';
import { mockApiServices } from '../services/mockApiServices';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [msg, setMsg] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMsg('');
    try {
      const res = await mockApiServices.submitNewsletterSubscription(email);
      setStatus('success');
      setMsg(res.message);
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMsg(err.message);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      {/* Top Footer Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Bio */}
          <div className="space-y-4">
            <Link to="/" className="flex flex-col focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md">
              <span className="text-xl font-extrabold tracking-tight text-white">
                SUMMIT <span className="text-orange-500">BUILD</span>
              </span>
              <span className="text-[9px] tracking-widest text-slate-400 font-bold uppercase -mt-1">
                CONTRACTORS
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Summit Build Contractors provides dependable residential and commercial construction, remodeling, roofing, and property improvement services in the Chicago metropolitan area.
            </p>
            {/* Socials */}
            <div className="flex space-x-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full hover:bg-orange-500 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-orange-500" aria-label="Facebook Profile">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full hover:bg-orange-500 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-orange-500" aria-label="Instagram Profile">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full hover:bg-orange-500 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-orange-500" aria-label="LinkedIn Profile">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full hover:bg-orange-500 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-orange-500" aria-label="YouTube Channel">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1">Our Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1">Projects Portfolio</Link>
              </li>
              <li>
                <Link to="/service-areas" className="hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1">Service Areas</Link>
              </li>
              <li>
                <Link to="/financing" className="hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1">Financing Options</Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1">Safety Standards</Link>
              </li>
              <li>
                <Link to="/warranty" className="hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1">Workmanship Warranty</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 text-sm">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span>
                  2500 Construction Avenue<br />
                  Chicago, IL 60618
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="tel:3125552026" className="hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1">(312) 555-2026</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="mailto:info@summitbuildcontractors.com" className="hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1">info@summitbuildcontractors.com</a>
              </li>
            </ul>
            <div className="pt-2 border-t border-slate-800">
              <p className="text-xs text-orange-500 font-bold flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" />
                License: #GC1234567 (Placeholder)
              </p>
              <p className="text-[10px] text-slate-500 leading-tight mt-1">
                *All credentials are sample content. Must be replaced with verified details before launch.
              </p>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider">Newsletter</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to get seasonal home maintenance tips, general remodeling safety advice, and recently finished project showcases.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:opacity-50"
                  required
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="absolute right-1.5 top-1.5 p-2 bg-orange-500 hover:bg-orange-600 text-white rounded transition-colors disabled:opacity-50 focus:outline-none focus:ring-1 focus:ring-white"
                  aria-label="Submit newsletter subscription"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {status === 'loading' && <p className="text-xs text-orange-400">Registering your subscription...</p>}
              {status === 'success' && <p className="text-xs text-emerald-400 font-medium">{msg}</p>}
              {status === 'error' && <p className="text-xs text-rose-400 font-medium">{msg}</p>}
            </form>
          </div>
        </div>

        {/* Legal Pages and Bottom Grid */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} Summit Build Contractors. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-orange-500 transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500 rounded px-1">Privacy Policy</Link>
            <Link to="/privacy-policy#terms" className="hover:text-orange-500 transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500 rounded px-1">Terms &amp; Conditions</Link>
            <Link to="/privacy-policy#accessibility" className="hover:text-orange-500 transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500 rounded px-1">Accessibility Statement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

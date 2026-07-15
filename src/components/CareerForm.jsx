// src/components/CareerForm.jsx
import React, { useState } from 'react';
import { mockApiServices } from '../services/mockApiServices';
import { LoadingSpinner, SuccessMessage, ErrorMessage } from './FormStatusHelper';
import { Briefcase, FileUp, Calendar, ShieldCheck, Mail, Phone, User, Award } from 'lucide-react';

export default function CareerForm({ initialPosition = "Carpenter" }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: initialPosition || 'Carpenter',
    yearsExperience: '1-3 Years',
    certifications: '',
    availability: 'Immediate',
    resumeName: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, resumeName: file.name }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMsg('');

    try {
      const res = await mockApiServices.submitJobApplication(form);
      setStatus('success');
      setMsg(res.message);
    } catch (err) {
      setStatus('error');
      setMsg(err.message);
    }
  };

  const handleReset = () => {
    setForm({
      fullName: '',
      email: '',
      phone: '',
      position: initialPosition || 'Carpenter',
      yearsExperience: '1-3 Years',
      certifications: '',
      availability: 'Immediate',
      resumeName: '',
      message: ''
    });
    setStatus('idle');
    setMsg('');
  };

  if (status === 'loading') {
    return <LoadingSpinner message="Uploading resume profile & registering job application..." />;
  }

  if (status === 'success') {
    return (
      <SuccessMessage
        title="Application Filed!"
        message={`${msg} Our HR coordinator will review your construction background, certifications, and uploaded resume files, and will contact you within 2-3 business days if your experience matches our open needs.`}
        onReset={handleReset}
        resetBtnText="Submit Another Application"
      />
    );
  }

  const positionOptions = [
    "Carpenter",
    "Construction Laborer",
    "Project Manager",
    "Site Superintendent",
    "Estimator",
    "Electrician",
    "Plumber",
    "Painter",
    "Roofer",
    "Office Coordinator"
  ];

  return (
    <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl font-sans text-slate-100">
      {status === 'error' && <ErrorMessage message={msg} onRetry={() => setStatus('idle')} />}

      <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-6">
        <Briefcase className="w-5 h-5 text-orange-500 shrink-0" />
        <div>
          <h2 className="text-lg font-bold text-white">Apply for an Open Position</h2>
          <p className="text-xs text-slate-400">Join Summit Build's growing field crews and office management teams</p>
        </div>
      </div>

      <div className="space-y-5">
        {/* Row 1: Name & Position */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5 flex items-center gap-1">
              <User className="w-3 h-3 text-orange-500" /> Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={form.fullName}
              onChange={handleChange}
              placeholder="e.g. Jack Kowalski"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Position of Interest *</label>
            <select
              name="position"
              value={form.position}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {positionOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5 flex items-center gap-1">
              <Mail className="w-3 h-3 text-orange-500" /> Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="jack@example.com"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5 flex items-center gap-1">
              <Phone className="w-3 h-3 text-orange-500" /> Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="(312) 555-2026"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
            />
          </div>
        </div>

        {/* Row 3: Experience, Certifications, Availability */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Years of Experience *</label>
            <select
              name="yearsExperience"
              value={form.yearsExperience}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="Under 1 Year">Under 1 Year</option>
              <option value="1-3 Years">1-3 Years</option>
              <option value="3-5 Years">3-5 Years</option>
              <option value="5-10 Years">5-10 Years</option>
              <option value="10+ Years">10+ Years</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5 flex items-center gap-1">
              <Award className="w-3 h-3 text-orange-500" /> Certifications (OSHA, EPA, etc.)
            </label>
            <input
              type="text"
              name="certifications"
              value={form.certifications}
              onChange={handleChange}
              placeholder="e.g. OSHA-10, Journeyman Plumber"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-orange-500" /> Availability *
            </label>
            <select
              name="availability"
              value={form.availability}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="Immediate">Immediate Start</option>
              <option value="1 Week Notice">1 Week Notice</option>
              <option value="2 Weeks Notice">2 Weeks Notice</option>
              <option value="Flexible">Flexible / Seasonal</option>
            </select>
          </div>
        </div>

        {/* Message / Cover Letter */}
        <div>
          <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Brief Cover Letter / Experience Summary</label>
          <textarea
            name="message"
            rows="3"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your tools, major projects you completed, structural styles you are skilled in, or why you want to join Summit Build..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
          />
        </div>

        {/* Resume Upload Box */}
        <div>
          <span className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Upload Resume file (Mock Upload) *</span>
          <div className="border border-dashed border-slate-800 hover:border-orange-500/50 bg-slate-950/60 transition-colors p-4 rounded-xl text-center relative">
            <input
              type="file"
              required
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />
            <div className="flex items-center justify-center gap-2 pointer-events-none text-slate-400">
              <FileUp className="w-5 h-5 text-orange-500" />
              <span className="text-xs font-bold text-slate-200">
                {form.resumeName ? `Selected: ${form.resumeName}` : 'Upload PDF/Doc file (max 10MB)'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl mt-6 shadow-md transition-all active:scale-95 text-xs uppercase tracking-wider flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <ShieldCheck className="w-4 h-4" />
        <span>Submit Job Application</span>
      </button>
    </form>
  );
}

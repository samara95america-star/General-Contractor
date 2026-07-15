// src/components/EstimateForm.jsx
import React, { useState } from 'react';
import { mockApiServices } from '../services/mockApiServices';
import { LoadingSpinner, SuccessMessage, ErrorMessage } from './FormStatusHelper';
import { FileUp, Calculator, Calendar, User, Mail, Phone, Home } from 'lucide-react';

export default function EstimateForm({ initialProjectType = "" }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    city: '',
    state: 'IL',
    zipCode: '',
    projectType: initialProjectType || 'New Construction',
    propertyClass: 'Residential', // Residential or Commercial
    startDate: '',
    budgetRange: 'Not Sure Yet',
    description: '',
    referral: 'Google Search',
    contactMethod: 'Phone Call',
    fileName: ''
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
      setForm((prev) => ({ ...prev, fileName: file.name }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMsg('');

    try {
      const res = await mockApiServices.submitEstimateRequest(form);
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
      propertyAddress: '',
      city: '',
      state: 'IL',
      zipCode: '',
      projectType: initialProjectType || 'New Construction',
      propertyClass: 'Residential',
      startDate: '',
      budgetRange: 'Not Sure Yet',
      description: '',
      referral: 'Google Search',
      contactMethod: 'Phone Call',
      fileName: ''
    });
    setStatus('idle');
    setMsg('');
  };

  if (status === 'loading') {
    return <LoadingSpinner message="Calculating material takeoffs & processing estimate specifications..." />;
  }

  if (status === 'success') {
    return (
      <SuccessMessage
        title="Estimate Request Received!"
        message={`${msg} A Summit Build estimating coordinator will review your submitted blueprint details and contact you via ${form.contactMethod} to arrange a physical property inspection walk-through.`}
        onReset={handleReset}
        resetBtnText="Submit New Estimate Request"
      />
    );
  }

  const projectTypeOptions = [
    "New Construction",
    "Addition",
    "Kitchen",
    "Bathroom",
    "Basement",
    "Commercial",
    "Roofing",
    "Exterior",
    "Concrete",
    "Other"
  ];

  const budgetOptions = [
    "Under $10,000",
    "$10,000–$25,000",
    "$25,000–$50,000",
    "$50,000–$100,000",
    "$100,000–$250,000",
    "Over $250,000",
    "Not Sure Yet"
  ];

  return (
    <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl font-sans text-slate-100">
      {status === 'error' && <ErrorMessage message={msg} onRetry={() => setStatus('idle')} />}

      <div className="flex items-center gap-3 border-b border-slate-800 pb-5 mb-6">
        <Calculator className="w-6 h-6 text-orange-500 shrink-0" />
        <div>
          <h2 className="text-xl font-bold text-white leading-tight">Request a Professional Estimate</h2>
          <p className="text-xs text-slate-400 mt-0.5">Fill out details below for custom architectural and cost planning</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Personal Details Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
              placeholder="e.g. Robert Miller"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
            />
          </div>

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
              placeholder="robert@example.com"
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

        {/* Property Address details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5 flex items-center gap-1">
              <Home className="w-3 h-3 text-orange-500" /> Property Street Address *
            </label>
            <input
              type="text"
              name="propertyAddress"
              required
              value={form.propertyAddress}
              onChange={handleChange}
              placeholder="e.g. 123 Lakeview Lane"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">City *</label>
            <input
              type="text"
              name="city"
              required
              value={form.city}
              onChange={handleChange}
              placeholder="e.g. Chicago"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">ZIP Code *</label>
            <input
              type="text"
              name="zipCode"
              required
              value={form.zipCode}
              onChange={handleChange}
              placeholder="e.g. 60618"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
            />
          </div>
        </div>

        {/* Project Type, Classification, and Budget */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Project Type *</label>
            <select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {projectTypeOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Classification *</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setForm(f => ({ ...f, propertyClass: 'Residential' }))}
                className={`py-2.5 rounded-lg text-xs font-bold border transition-colors ${
                  form.propertyClass === 'Residential'
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
              >
                Residential
              </button>
              <button
                type="button"
                onClick={() => setForm(f => ({ ...f, propertyClass: 'Commercial' }))}
                className={`py-2.5 rounded-lg text-xs font-bold border transition-colors ${
                  form.propertyClass === 'Commercial'
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
              >
                Commercial
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Estimated Budget Range *</label>
            <select
              name="budgetRange"
              value={form.budgetRange}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Start Date, Referral, Contact Method */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-orange-500" /> Preferred Start Date *
            </label>
            <input
              type="date"
              name="startDate"
              required
              value={form.startDate}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">How Did You Hear About Us?</label>
            <select
              name="referral"
              value={form.referral}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="Google Search">Google Search</option>
              <option value="Friend Reference">Friend / Neighbor Referral</option>
              <option value="Yard Sign">Yard Sign on Site</option>
              <option value="Social Media">Social Media</option>
              <option value="BBB Profile">BBB Profile</option>
              <option value="Other">Other Advertising</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Preferred Contact Method</label>
            <select
              name="contactMethod"
              value={form.contactMethod}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="Phone Call">Phone Call</option>
              <option value="Email Message">Email Message</option>
              <option value="Text SMS">Text Message (SMS)</option>
            </select>
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Project Details &amp; Description *</label>
          <textarea
            name="description"
            rows="4"
            required
            value={form.description}
            onChange={handleChange}
            placeholder="Tell us about your project goals, desired layouts, dimensions, materials, or special constraints..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
          />
        </div>

        {/* Photo or Plan Upload Placeholder */}
        <div>
          <span className="block text-xs font-bold uppercase text-slate-400 mb-1.5">Upload Blueprints or Site Photos (Mock Upload)</span>
          <div className="border-2 border-dashed border-slate-800 hover:border-orange-500/50 bg-slate-950/60 transition-colors p-6 rounded-xl text-center relative">
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png,.dwg"
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />
            <div className="flex flex-col items-center justify-center gap-1.5 pointer-events-none text-slate-400">
              <FileUp className="w-8 h-8 text-orange-500" />
              <span className="text-xs font-bold text-slate-200">
                {form.fileName ? `Selected: ${form.fileName}` : 'Drag & Drop files here, or click to browse'}
              </span>
              <span className="text-[10px] text-slate-500">Supports PDF, DWG, JPG, PNG up to 25MB. Mock file-system placeholder only.</span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl mt-8 shadow-lg transition-transform active:scale-95 text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        Submit Estimate Request &amp; Schedule Review
      </button>

      <p className="text-[10px] text-slate-500 text-center leading-relaxed mt-4">
        *Disclaimer: Summit Build Contractors processes your data according to our Privacy Policy. Submitting this form activates a simulated estimate record. No physical field teams are dispatched automatically.
      </p>
    </form>
  );
}

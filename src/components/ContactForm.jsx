// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { mockApiServices } from '../services/mockApiServices';
import { LoadingSpinner, SuccessMessage, ErrorMessage } from './FormStatusHelper';
import { Mail, Send, User, Phone, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMsg('');

    try {
      const res = await mockApiServices.submitContactMessage(form);
      setStatus('success');
      setMsg(res.message);
    } catch (err) {
      setStatus('error');
      setMsg(err.message);
    }
  };

  const handleReset = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setStatus('idle');
    setMsg('');
  };

  if (status === 'loading') {
    return <LoadingSpinner message="Delivering your message directly to client relations managers..." />;
  }

  if (status === 'success') {
    return (
      <SuccessMessage
        title="Message Dispatched!"
        message={msg}
        onReset={handleReset}
        resetBtnText="Send Another Message"
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl font-sans text-slate-100">
      {status === 'error' && <ErrorMessage message={msg} onRetry={() => setStatus('idle')} />}

      <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-6">
        <Mail className="w-5 h-5 text-orange-500 shrink-0" />
        <div>
          <h2 className="text-lg font-bold text-white">Send Us a Direct Message</h2>
          <p className="text-xs text-slate-400">Questions about services, licenses, or coverage areas?</p>
        </div>
      </div>

      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5 flex items-center gap-1">
            <User className="w-3 h-3 text-orange-500" /> Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Clara Bell"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
          />
        </div>

        {/* Email */}
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
            placeholder="clara@example.com"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5 flex items-center gap-1">
            <Phone className="w-3 h-3 text-orange-500" /> Phone Number (Optional)
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(312) 555-2026"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5 flex items-center gap-1">
            <MessageSquare className="w-3 h-3 text-orange-500" /> Message / Question *
          </label>
          <textarea
            name="message"
            rows="4"
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Describe your general question, project coordinates, or partnership inquiry in detail..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-600"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl mt-6 shadow-md transition-all active:scale-95 text-xs uppercase tracking-wider flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <Send className="w-4 h-4" />
        <span>Dispatch Message</span>
      </button>
    </form>
  );
}

// src/pages/Financing.jsx
import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import {
  CreditCard, HelpCircle,
  ShieldAlert, CheckCircle
} from 'lucide-react';
import { LoadingSpinner, SuccessMessage, ErrorMessage } from '../components/FormStatusHelper';

import useSEO from '../hooks/useSEO';

export default function Financing() {
  useSEO({
    title: 'Flexible Project Financing',
    description: 'Finance your home improvement and renovations with fixed APR terms, fast approvals, and $0 pre-payment penalty plans. Not guaranteed approval.'
  });

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    estimatedAmount: '$25,000–$50,000',
    creditScore: 'Good (670-739)'
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleApply = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMsg('');

    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!form.name || !form.email || !form.phone) {
      setStatus('error');
      setMsg('Please fill out all required fields to submit your pre-qualification form.');
      return;
    }

    setStatus('success');
    setMsg('Pre-qualification inquiry submitted successfully! Your application has been logged.');
  };

  const paymentExamples = [
    {
      projectType: "Standard Bathroom Remodeling",
      projectCost: "$15,000",
      estimatedRate: "6.99% APR*",
      term: "60 Months",
      monthlyPayment: "$297 / month*"
    },
    {
      projectType: "Gourmet Kitchen Transformation",
      projectCost: "$45,000",
      estimatedRate: "5.49% APR*",
      term: "84 Months",
      monthlyPayment: "$646 / month*"
    },
    {
      projectType: "Full Basement Finishing",
      projectCost: "$35,000",
      estimatedRate: "5.99% APR*",
      term: "84 Months",
      monthlyPayment: "$511 / month*"
    },
    {
      projectType: "Extensive Structural Home Addition",
      projectCost: "$120,000",
      estimatedRate: "4.99% APR*",
      term: "120 Months",
      monthlyPayment: "$1,272 / month*"
    }
  ];

  const financingFaqs = [
    {
      q: "What financing programs do you accept?",
      a: "We partner with leading home improvement lenders to offer unsecured personal home improvement loans, Home Equity Lines of Credit (HELOC) coordination, and short-term 0% interest promo periods for qualified borrowers."
    },
    {
      q: "How does the pre-qualification check affect my credit?",
      a: "Our initial pre-qualification inquiry utilizes a soft credit inquiry, which does not impact your credit score. If you proceed with a formal loan offer, a hard credit inquiry will be completed by the lender."
    },
    {
      q: "Can I pay off my loan early without penalties?",
      a: "Yes. All our premium partner lending programs offer zero-penalty early payouts, enabling you to clear your loan balance whenever you wish to save on long-term interest."
    },
    {
      q: "How long does the approval process take?",
      a: "Most home improvement loan applications are processed within minutes. Funds are typically made available and disbursed directly to you or under structural progress milestones within 2-5 business days."
    }
  ];

  return (
    <div className="font-sans text-slate-100 bg-slate-950 text-left">
      <Breadcrumbs />

      {/* Page Header */}
      <section className="relative bg-slate-900 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest font-sans">Payment Flexibility</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight font-sans">Financing Options</h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Summit Build Contractors works with leading home improvement lenders to offer flexible financing structures, helping you build your dream project today.
          </p>
        </div>
      </section>

      {/* Required Financing Disclaimer Notice */}
      <section className="pt-10 px-4 max-w-4xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-start gap-4">
          <ShieldAlert className="w-5 h-5 text-orange-500 shrink-0 mt-0.5 animate-pulse" />
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-white block font-bold mb-1 uppercase tracking-wider">Legal Financing Disclaimer Notice</strong>
            Summit Build Contractors is not a licensed financial lender. All financing plans, monthly payment examples, promotional interest rates, and loan terms shown below are for educational illustration purposes. Financing is strictly subject to lender approval, eligibility, credit reviews, terms, and conditions. We do not claim or guarantee approval for any individual client or credit score tier.
          </p>
        </div>
      </section>

      {/* Financing Programs Overview */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Flexible Solutions</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">Home Improvement Financing</h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Don't let budget constraints delay essential structural repairs, siding replacements, or remodeling dreams. We cooperate with elite financing networks to offer unsecured home remodeling loans designed with fixed monthly terms.
            </p>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Whether you are planning a gourmet kitchen, a full basement suite, or repairing a leaky roof, our flexible partner options allow you to retain your liquid savings and spread investment costs safely.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900 p-3 rounded-xl border border-slate-800">
                <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Loans up to $150,000</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 p-3 rounded-xl border border-slate-800">
                <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                <span>No early pre-payment penalties</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 p-3 rounded-xl border border-slate-800">
                <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Competitive fixed APR rates</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900 p-3 rounded-xl border border-slate-800">
                <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Zero-equity options available</span>
              </div>
            </div>
          </div>

          {/* Interactive Pre-Qual form */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
            {status === 'loading' ? (
              <LoadingSpinner message="Checking soft pre-qualification terms with partner networks..." />
            ) : status === 'success' ? (
              <SuccessMessage
                title="Pre-Qualification Inquiry Sent!"
                message="Thank you! Your mock pre-qualification details have been logged. A financial coordination representative will review your estimated project scope and contact you with custom quote structures."
                onReset={() => setStatus('idle')}
                resetBtnText="Submit Another Inquiry"
              />
            ) : (
              <form onSubmit={handleApply} className="space-y-5">
                {status === 'error' && <ErrorMessage message={msg} />}
                <div className="flex items-center gap-2.5 border-b border-slate-800 pb-3 mb-4">
                  <CreditCard className="w-5 h-5 text-orange-500" />
                  <div>
                    <h3 className="text-white text-base font-bold">Check Pre-Qualification Options</h3>
                    <p className="text-[10px] text-slate-400">Soft credit pull only - does not affect credit score</p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Sandra Thompson"
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="sandra@example.com"
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(312) 555-2026"
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Estimated Loan Size</label>
                    <select
                      name="estimatedAmount"
                      value={form.estimatedAmount}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-500"
                    >
                      <option value="Under $10,000">Under $10,000</option>
                      <option value="$10,000–$25,000">$10,000–$25,000</option>
                      <option value="$25,000–$50,000">$25,000–$50,000</option>
                      <option value="$50,000–$100,000">$50,000–$100,000</option>
                      <option value="Over $100,000">Over $100,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Estimated Credit Score</label>
                    <select
                      name="creditScore"
                      value={form.creditScore}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-500"
                    >
                      <option value="Excellent (740+)">Excellent (740+)</option>
                      <option value="Good (670-739)">Good (670-739)</option>
                      <option value="Fair (580-669)">Fair (580-669)</option>
                      <option value="Poor (Under 580)">Poor (Under 580)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl shadow-lg transition-transform active:scale-95 text-xs uppercase tracking-wider"
                >
                  Submit Pre-Qual Inquiry Now
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Monthly Payment Examples Table */}
      <section className="py-16 bg-slate-900/40 border-y border-slate-900 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Case Studies</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Monthly Payment Examples</h2>
            <p className="text-xs md:text-sm text-slate-400">
              The examples below represent historical sample loan structures. These rates are examples only and do not represent guaranteed pricing.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900">
            <table className="w-full text-left border-collapse min-w-[600px] text-sm text-slate-300">
              <thead>
                <tr className="bg-slate-950 text-xs font-bold uppercase text-slate-400 border-b border-slate-800">
                  <th className="p-4 md:p-5">Project Scope</th>
                  <th className="p-4 md:p-5">Estimated Cost</th>
                  <th className="p-4 md:p-5">Sample Rate (APR)</th>
                  <th className="p-4 md:p-5">Term Length</th>
                  <th className="p-4 md:p-5 text-orange-500">Monthly Payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {paymentExamples.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-850/40">
                    <td className="p-4 md:p-5 font-bold text-white">{item.projectType}</td>
                    <td className="p-4 md:p-5">{item.projectCost}</td>
                    <td className="p-4 md:p-5">{item.estimatedRate}</td>
                    <td className="p-4 md:p-5">{item.term}</td>
                    <td className="p-4 md:p-5 font-extrabold text-orange-500">{item.monthlyPayment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Financing FAQs Accordion */}
      <section className="py-20 px-4 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Financing FAQs</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Payment Plans Questions</h2>
        </div>

        <div className="space-y-4">
          {financingFaqs.map((faq, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow">
              <h4 className="text-white text-base font-bold flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-orange-500 shrink-0" />
                {faq.q}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

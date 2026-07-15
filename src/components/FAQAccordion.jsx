// src/components/FAQAccordion.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQAccordion({ faqs }) {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto font-sans" role="tablist" aria-label="Frequently Asked Questions">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-700 shadow-md"
          >
            {/* Header / Trigger */}
            <button
              onClick={() => toggleFaq(faq.id)}
              type="button"
              className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4 text-white hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-slate-800/50"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${faq.id}`}
              id={`faq-btn-${faq.id}`}
            >
              <span className="flex items-start gap-3 font-semibold text-sm md:text-base leading-snug">
                <HelpCircle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                {faq.question}
              </span>
              <span className="p-1 bg-slate-800 rounded text-slate-400 group-hover:text-white shrink-0 mt-0.5">
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>

            {/* Answer Content */}
            <div
              id={`faq-answer-${faq.id}`}
              role="region"
              aria-labelledby={`faq-btn-${faq.id}`}
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-[500px] border-t border-slate-800' : 'max-h-0'
              }`}
            >
              <div className="p-5 md:p-6 text-sm md:text-base text-slate-300 leading-relaxed bg-slate-950/40">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

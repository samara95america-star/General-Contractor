// src/components/FormStatusHelper.jsx
import React from 'react';
import { Loader2, CheckCircle2, AlertOctagon } from 'lucide-react';

/**
 * Reusable full loading state screen or spinner.
 */
export function LoadingSpinner({ message = "Processing your submission... Please wait." }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center min-h-[300px] font-sans">
      <Loader2 className="w-12 h-12 text-orange-500 animate-spin mb-4" />
      <h3 className="text-white text-lg font-bold mb-1">Please Stand By</h3>
      <p className="text-slate-400 text-sm">{message}</p>
    </div>
  );
}

/**
 * Reusable success indicator box or screen.
 */
export function SuccessMessage({ title = "Thank You!", message, onReset, resetBtnText = "Submit Another Form" }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center min-h-[300px] font-sans bg-slate-900 border border-slate-800 rounded-2xl shadow-xl">
      <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mb-6 border border-emerald-500/15">
        <CheckCircle2 className="w-8 h-8" />
      </div>
      <h3 className="text-white text-2xl font-black mb-3">{title}</h3>
      <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-md mb-8">
        {message}
      </p>
      {onReset && (
        <button
          onClick={onReset}
          type="button"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-lg text-sm shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          {resetBtnText}
        </button>
      )}
    </div>
  );
}

/**
 * Reusable error message box.
 */
export function ErrorMessage({ title = "Submission Failed", message, onRetry }) {
  return (
    <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4 text-left font-sans mb-6">
      <div className="w-12 h-12 bg-rose-500/10 text-rose-400 rounded-full flex items-center justify-center shrink-0 border border-rose-500/10">
        <AlertOctagon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-rose-400 font-bold text-base mb-1">{title}</h4>
        <p className="text-slate-300 text-sm leading-relaxed">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            type="button"
            className="text-orange-500 hover:text-orange-600 font-bold text-xs mt-2 focus:outline-none underline block"
          >
            Please try again
          </button>
        )}
      </div>
    </div>
  );
}

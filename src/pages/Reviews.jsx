// src/pages/Reviews.jsx
import React, { useState } from 'react';
import { reviewsData, reviewsSummaryData } from '../data/reviewsData';
import TestimonialCard from '../components/TestimonialCard';
import Breadcrumbs from '../components/Breadcrumbs';
import { Star, Send, PenTool } from 'lucide-react';
import { LoadingSpinner, SuccessMessage, ErrorMessage } from '../components/FormStatusHelper';

import useSEO from '../hooks/useSEO';

export default function Reviews() {
  useSEO({
    title: 'Customer Reviews & Testimonials',
    description: 'Read 120+ verified client testimonials from homeowners and businesses who experienced our general construction quality first-hand.'
  });

  const [reviewsList, setReviewsList] = useState(reviewsData);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    projectType: 'Kitchen Remodeling',
    city: 'Chicago, IL',
    rating: 5,
    text: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [formMsg, setFormMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (val) => {
    setForm((prev) => ({ ...prev, rating: val }));
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormMsg('');

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (!form.name || !form.text) {
      setFormStatus('error');
      setFormMsg('Please provide your name and review comments to submit.');
      return;
    }

    const newReview = {
      id: reviewsList.length + 1,
      name: form.name,
      projectType: form.projectType,
      city: form.city,
      rating: form.rating,
      text: form.text,
      completionDate: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      verified: true
    };

    // Prepend to our local list
    setReviewsList((prev) => [newReview, ...prev]);
    setFormStatus('success');
    setFormMsg('Thank you for sharing your feedback! Your verified review has been published directly below.');

    // Clear form
    setForm({
      name: '',
      projectType: 'Kitchen Remodeling',
      city: 'Chicago, IL',
      rating: 5,
      text: ''
    });
  };

  return (
    <div className="font-sans text-slate-100 bg-slate-950 text-left">
      <Breadcrumbs />

      {/* Page Header */}
      <section className="relative bg-slate-900 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest font-sans">Client Feedback</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight font-sans">Verified Customer Reviews</h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Read transparent, third-party verified testimonies from residential and commercial clients across Chicagoland.
          </p>
        </div>
      </section>

      {/* Summary Rating and Leave Review Header Row */}
      <section className="py-12 px-4 max-w-7xl mx-auto border-b border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Average Rating Block (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-6 justify-around">
            <div className="text-center md:text-left space-y-1">
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Average Score</span>
              <div className="flex items-baseline gap-2 justify-center md:justify-start">
                <span className="text-5xl font-black text-white tracking-tight">{reviewsSummaryData.averageRating}</span>
                <span className="text-slate-500 text-sm font-bold">/ 5.0</span>
              </div>
              <div className="flex text-orange-500 gap-0.5 pt-1 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-orange-500" />
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-1 block">Based on {reviewsSummaryData.totalReviews} verified profiles</p>
            </div>

            {/* Star distributions bars */}
            <div className="space-y-1.5 w-full max-w-[200px] text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3 shrink-0">5★</span>
                <div className="flex-1 bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-850">
                  <div className="bg-orange-500 h-full w-[90%]" />
                </div>
                <span className="w-8 text-right shrink-0">112</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 shrink-0">4★</span>
                <div className="flex-1 bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-850">
                  <div className="bg-orange-500/60 h-full w-[10%]" />
                </div>
                <span className="w-8 text-right shrink-0">10</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 shrink-0">3★</span>
                <div className="flex-1 bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-850">
                  <div className="bg-orange-500/20 h-full w-[2%]" />
                </div>
                <span className="w-8 text-right shrink-0">2</span>
              </div>
            </div>
          </div>

          {/* Leave a review button block (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <h3 className="text-white text-xl font-bold">Have you worked with us before?</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto lg:mx-0">
              We strive to deliver unyielding structural quality and total client collaboration. Share your remodeling experience to help neighbors choose a trustworthy builder.
            </p>
            <div>
              <button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-transform active:scale-95 inline-flex items-center gap-2 text-sm"
              >
                <PenTool className="w-4 h-4" />
                <span>Leave a Review</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Review submission block inside container */}
        {isFormOpen && (
          <div className="mt-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl max-w-2xl mx-auto">
            {formStatus === 'loading' ? (
              <LoadingSpinner message="Validating &amp; publishing your customer review..." />
            ) : formStatus === 'success' ? (
              <SuccessMessage
                title="Review Posted!"
                message={formMsg}
                onReset={() => {
                  setFormStatus('idle');
                  setIsFormOpen(false);
                }}
                resetBtnText="Close Submission Panel"
              />
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-5">
                {formStatus === 'error' && <ErrorMessage message={formMsg} />}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <h4 className="text-white font-bold text-base">Write a Verified Review</h4>
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="text-xs text-slate-500 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Martha G."
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Project Type Completed</label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-500"
                    >
                      <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                      <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                      <option value="Basement Finishing">Basement Finishing</option>
                      <option value="Structural Addition">Structural Home Addition</option>
                      <option value="New Construction">New Custom Home</option>
                      <option value="Roofing or Siding">Roofing &amp; Siding</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Location / City</label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="e.g. Evanston, IL"
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Rating *</label>
                    <div className="flex gap-1.5 pt-2">
                      {[1, 2, 3, 4, 5].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => handleRatingClick(val)}
                          className="focus:outline-none hover:scale-110 transition-transform"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              val <= form.rating
                                ? 'text-orange-500 fill-current'
                                : 'text-slate-700'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">Review Comments *</label>
                  <textarea
                    rows="4"
                    required
                    name="text"
                    value={form.text}
                    onChange={handleChange}
                    placeholder="Describe your construction experience. Was the jobsite cleaned daily? Did our estimators communicate clearly?"
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-500 placeholder-slate-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Publish Customer Review</span>
                </button>
              </form>
            )}
          </div>
        )}
      </section>

      {/* Main Reviews List Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto space-y-6">
        <h3 className="text-white text-base font-extrabold uppercase tracking-widest text-slate-500 border-b border-slate-900 pb-2">
          Read Verified Experiences ({reviewsList.length} reviews)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsList.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </section>
    </div>
  );
}

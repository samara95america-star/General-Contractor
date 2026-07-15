// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CalendarRange, Award, Users, ArrowRight, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { reviewsData } from '../data/reviewsData';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import Statistics from '../components/Statistics';
import ProcessTimeline from '../components/ProcessTimeline';
import CTASection from '../components/CTASection';

import useSEO from '../hooks/useSEO';

export default function Home() {
  useSEO({
    title: 'Home',
    description: 'Summit Build Contractors delivers premium general contracting, kitchen & bath remodeling, structural home additions, and commercial build-outs across Chicago & suburbs.'
  });

  // Take top 4 services and top 3 projects for preview
  const featuredServices = servicesData.slice(0, 4);
  const featuredProjects = projectsData.slice(0, 3);
  const featuredReviews = reviewsData.slice(0, 3);

  return (
    <div className="font-sans text-slate-100 bg-slate-950">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
            alt="Summit Build Contractors premium modern construction site"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-8">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full shadow-lg">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-xs md:text-sm font-bold text-orange-500 uppercase tracking-widest">
              Premium General Contractors
            </span>
          </div>

          {/* Headline & Description */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-none tracking-tight">
              Building Quality.<br />
              <span className="text-orange-500">Creating Lasting Value.</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg md:text-xl md:leading-relaxed max-w-2xl mx-auto">
              Summit Build Contractors provides dependable residential and commercial construction, remodeling, renovation, roofing, and property improvement services. From planning to final inspection, we manage every phase with quality, transparency, and care.
            </p>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/estimate"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95 text-base uppercase tracking-wider"
            >
              Request a Free Estimate
            </Link>
            <Link
              to="/projects"
              className="w-full sm:w-auto bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              View Our Projects
            </Link>
          </div>

          {/* Hero Trust Badges Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-10 border-t border-slate-900">
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl flex flex-col items-center text-center gap-2">
              <ShieldCheck className="w-6 h-6 text-orange-500" />
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">Licensed &amp; Insured</span>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl flex flex-col items-center text-center gap-2">
              <CalendarRange className="w-6 h-6 text-orange-500" />
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">Free Estimates</span>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl flex flex-col items-center text-center gap-2">
              <Award className="w-6 h-6 text-orange-500" />
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">10-Yr Workmanship Warranty</span>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl flex flex-col items-center text-center gap-2">
              <Users className="w-6 h-6 text-orange-500" />
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">Experienced PMs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY STATISTICS SECTION */}
      <section className="py-16 bg-slate-950 border-t border-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Summit Build by the Numbers</h2>
            <p className="text-xs md:text-sm text-slate-400 mt-1">Our historical performance standards reflecting 20+ years of regional construction operations</p>
          </div>
          <Statistics />
        </div>
      </section>

      {/* 3. FEATURED SERVICES PREVIEW */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Premium Offerings</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-1">Our Construction &amp; Remodeling Services</h2>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                From kitchen remodels to massive office buildouts, our licensed craftsmen manage every single milestone from blue-prints to cleanup.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-orange-500 hover:text-orange-600 font-bold text-sm shrink-0 self-start md:self-auto"
            >
              <span>Explore All 20 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISUAL STEP-BY-STEP PROCESS */}
      <section className="py-20 bg-slate-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Our Methodology</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">How We Build: Our 10-Step Process</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              We eliminate friction and surprises by orchestrating a clear, visual step-by-step pipeline for every residential and commercial project.
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* 5. RECENT PROJECTS GALLERY PREVIEW */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Our Work Speaks</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-1">Recently Completed Projects</h2>
              <p className="text-sm text-slate-400 mt-2 max-w-xl">
                Inspect physical outcomes of our custom home designs, spa bath remodels, and commercial offices throughout Chicago suburbs.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-orange-500 hover:text-orange-600 font-bold text-sm shrink-0 self-start md:self-auto"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-20 bg-slate-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Client Testimonials</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">Loved by Chicago Homeowners</h2>
            <p className="text-sm text-slate-400">
              Read transparent feedback from clients who experienced our premium craftsmanship first-hand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReviews.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/reviews"
              className="bg-slate-900 border border-slate-800 hover:border-orange-500/40 text-slate-200 hover:text-orange-500 font-bold px-6 py-3 rounded-lg text-sm inline-flex items-center gap-2"
            >
              <span>Read More Verified Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. DYNAMIC CALL TO ACTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection
          title="Do You Have a Construction Project in Mind?"
          description="Summit Build Contractors helps property owners plan, permit, and construct elite extensions, modern renovations, and reliable commercial tenant buildouts. Speak with an estimator today."
          primaryBtnText="Get Started"
          theme="orange"
        />
      </section>
    </div>
  );
}

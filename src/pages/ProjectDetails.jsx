// src/pages/ProjectDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import Breadcrumbs from '../components/Breadcrumbs';
import {
  Calendar, MapPin, Clock, Hammer, ShieldAlert,
  Sparkles, CheckCircle2, ArrowRight, ArrowLeft, Star
} from 'lucide-react';
import CTASection from '../components/CTASection';

import useSEO from '../hooks/useSEO';

export default function ProjectDetails() {
  const { id } = useParams();

  // Find the requested project from local portfolio data
  const project = projectsData.find((p) => p.id === id);

  useSEO({
    title: project ? `${project.title} - Finished Case` : 'Project Profile Not Found',
    description: project ? project.shortDescription : 'Completed construction project case studies from Summit Build Contractors.'
  });

  // Fallback / Empty State if project ID is not found
  if (!project) {
    return (
      <div className="font-sans min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-slate-950 text-slate-100">
        <div className="max-w-md space-y-4">
          <ShieldAlert className="w-12 h-12 text-orange-500 mx-auto animate-bounce" />
          <h2 className="text-2xl font-black text-white">Project Profile Not Found</h2>
          <p className="text-slate-400 text-sm">
            We couldn't locate any completed project matching ID: "{id}". Please explore our general completed builds.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>
    );
  }

  // Get up to 3 related projects in same general category, excluding current project
  const relatedProjects = projectsData
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  // If none match same category, just take other projects
  const fallbackRelated = relatedProjects.length > 0
    ? relatedProjects
    : projectsData.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="font-sans text-slate-100 bg-slate-950 text-left">
      <Breadcrumbs customCrumbs={[{ label: 'Projects', path: '/projects' }, { label: project.title, path: `/projects/${project.id}` }]} />

      {/* 1. Large Top Hero and Gallery */}
      <section className="relative bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header info */}
            <div className="lg:col-span-5 space-y-4">
              <span className="bg-orange-500/15 text-orange-500 border border-orange-500/25 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
                {project.title}
              </h1>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Metadata Details Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4.5 h-4.5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Location</span>
                    <span className="text-slate-200 text-sm font-semibold">{project.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4.5 h-4.5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Completed Date</span>
                    <span className="text-slate-200 text-sm font-semibold">{project.completionDate}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4.5 h-4.5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Duration</span>
                    <span className="text-slate-200 text-sm font-semibold">{project.projectDuration}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Hammer className="w-4.5 h-4.5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">Year Built</span>
                    <span className="text-slate-200 text-sm font-semibold">{project.completionYear}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Main Image and Sub Gallery */}
            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-2xl overflow-hidden h-96 shadow-2xl border border-slate-800 bg-slate-950">
                <img
                  src={project.image}
                  alt={`Primary completed image for ${project.title}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gallery List */}
              <div className="grid grid-cols-3 gap-4">
                {project.images?.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden h-24 bg-slate-950 border border-slate-800">
                    <img
                      src={img}
                      alt={`${project.title} detailed thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Structured Narrative Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main details body (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview & Client Goals */}
            <div className="space-y-4">
              <h2 className="text-white text-2xl font-extrabold flex items-center gap-2 border-b border-slate-900 pb-2">
                <Sparkles className="w-5.5 h-5.5 text-orange-500" />
                Project Overview &amp; Client Goals
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                <strong>Goals:</strong> {project.clientGoals}
              </p>
            </div>

            {/* Structural Challenges & Our Solution */}
            <div className="space-y-4">
              <h2 className="text-white text-2xl font-extrabold flex items-center gap-2 border-b border-slate-900 pb-2">
                <ShieldAlert className="w-5.5 h-5.5 text-orange-500" />
                Challenges &amp; Strategic Solutions
              </h2>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                <div>
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-1">Physical Challenge</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{project.challenges}</p>
                </div>
                <div className="border-t border-slate-800 pt-4">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-1">Our Engineering Solution</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </div>

            {/* Scope of Work */}
            <div className="space-y-4">
              <h2 className="text-white text-2xl font-extrabold flex items-center gap-2 border-b border-slate-900 pb-2">
                <CheckCircle2 className="w-5.5 h-5.5 text-orange-500" />
                Scope of Work Executed
              </h2>
              <ul className="space-y-3.5 pl-1">
                {project.scopeOfWork?.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-orange-500/10">
                      {index + 1}
                    </div>
                    <span className="text-slate-300 text-sm md:text-base leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Side Info Panel: Materials, Testimonial (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Materials Used */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-white text-sm font-bold uppercase tracking-widest border-b border-slate-800 pb-2 mb-4">
                Materials &amp; Brands
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                {project.materialsUsed}
              </p>
            </div>

            {/* Client Testimonial Box */}
            {project.testimonial && (
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="text-orange-500 flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-300 text-xs italic leading-relaxed mb-4">
                  &ldquo;{project.testimonial.text}&rdquo;
                </blockquote>
                <div className="border-t border-slate-800 pt-3">
                  <h4 className="text-white text-xs font-bold">{project.testimonial.author}</h4>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">{project.testimonial.title}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Before and After details comparison */}
      <section className="py-16 bg-slate-900/40 border-y border-slate-900 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-white text-2xl font-extrabold flex items-center gap-2 border-b border-slate-800 pb-2 text-center md:text-left">
            <CheckCircle2 className="w-5.5 h-5.5 text-orange-500" />
            Before &amp; After Transformation Case
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80">
              <span className="text-rose-400 text-xs font-bold uppercase tracking-wider block mb-2">Original State (Before)</span>
              <p className="text-slate-400 text-sm leading-relaxed">{project.beforeAndAfter?.before}</p>
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-orange-500/10">
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block mb-2">Delivered Outcome (After)</span>
              <p className="text-slate-300 text-sm leading-relaxed">{project.beforeAndAfter?.after}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Related Projects */}
      <section className="py-20 px-4 max-w-7xl mx-auto space-y-8">
        <h3 className="text-white text-2xl font-black border-b border-slate-900 pb-2">Related Project Profiles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fallbackRelated.map((p) => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="group bg-slate-900 border border-slate-800 p-5 rounded-2xl hover:border-orange-500/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="rounded-xl overflow-hidden h-36 bg-slate-950 mb-4">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <h4 className="text-white text-base font-bold line-clamp-1">{p.title}</h4>
                <p className="text-slate-400 text-xs mt-1 line-clamp-2">{p.shortDescription}</p>
              </div>
              <span className="text-orange-500 text-xs font-bold inline-flex items-center gap-1.5 mt-4">
                <span>View Project Profile</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <CTASection
          title={`Do You Want a Similar Project Built?`}
          description={`Summit Build Contractors can duplicate construction specifications, customized material designs, and layout dimensions of the ${project.title} on your personal property.`}
          primaryBtnText="Request Similar Project Estimate"
          primaryBtnPath={`/estimate?type=${encodeURIComponent(project.category)}`}
          theme="orange"
        />
      </section>
    </div>
  );
}

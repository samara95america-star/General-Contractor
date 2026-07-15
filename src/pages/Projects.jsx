// src/pages/Projects.jsx
import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import Breadcrumbs from '../components/Breadcrumbs';
import { FolderGit2, Filter } from 'lucide-react';
import CTASection from '../components/CTASection';

import useSEO from '../hooks/useSEO';

export default function Projects() {
  useSEO({
    title: 'Completed Projects Portfolio',
    description: 'Inspect physical outcomes of our custom home designs, spa bath renovations, corporate offices, and roofing work in Cook County.'
  });

  const [activeCategory, setActiveCategory] = useState('All Work');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const categories = [
    "All Work",
    "New Construction",
    "Kitchens",
    "Bathrooms",
    "Basements",
    "Commercial",
    "Roofing",
    "Exterior",
    "Decks",
    "Concrete"
  ];

  useEffect(() => {
    if (activeCategory === "All Work") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter((p) => p.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="font-sans text-slate-100 bg-slate-950">
      <Breadcrumbs />

      {/* Page Header */}
      <section className="relative bg-slate-900 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Our Project Portfolio</span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">Completed Masterpieces</h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Browse through our active construction portfolio of over 18 detailed custom builds, gourmet kitchens, spa-like baths, deep basements, and durable exterior roofing projects.
          </p>
        </div>
      </section>

      {/* Interactive Category Filter Menu */}
      <section className="py-8 bg-slate-950 border-b border-slate-900 px-4">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-orange-500" />
            <span>Filter By Construction Category</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                  activeCategory === cat
                    ? 'bg-orange-500 text-white border-orange-500 shadow-md scale-105'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        {filteredProjects.length === 0 ? (
          <div className="text-center p-12 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto">
            <FolderGit2 className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-white text-lg font-bold">No Projects Found</h3>
            <p className="text-slate-400 text-xs mt-1.5">No historic projects match the selected category filter. Please select another filter option.</p>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider text-left border-b border-slate-900 pb-2">
              Showing {filteredProjects.length} Verified Projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Dynamic CTA */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <CTASection
          title="Do You Want a Similar Masterpiece?"
          description="Schedule a physical site inspection or submit digital floor plans to receive a custom structural walkthrough and budget model."
          primaryBtnText="Request a Similar Project"
          theme="navy"
        />
      </section>
    </div>
  );
}

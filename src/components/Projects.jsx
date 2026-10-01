import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectVisualPlaceholder } from './ProjectVisualPlaceholder';

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 border-t border-[#E2E8F0] dark:border-[#1E293B] bg-[#F8FAFC] dark:bg-[#111827]/50 scroll-mt-16"
      aria-label="Projects and Case Studies"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12">
          <span className="section-label">PROJECTS</span>
          <h2 className="section-title">
            Work & Academic Milestones
          </h2>
          <p className="mt-2 text-base text-[#475569] dark:text-[#94A3B8]">
            Highlighting practical engineering, full lifecycle execution, and interface design.
          </p>
        </div>

        {/* Project Cards (Mapped from single array) */}
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="pro-card pro-card-hover p-6 sm:p-8 bg-white dark:bg-[#111827]"
            >
              {/* CSS-Based Visual Placeholder */}
              <div className="mb-6">
                <ProjectVisualPlaceholder title={project.title} />
              </div>

              {/* Badge & Title */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] text-xs font-medium bg-[#EFF6FF] dark:bg-[#1E293B] text-[#2563EB] dark:text-[#60A5FA] border border-blue-200 dark:border-blue-900/50">
                  {project.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] tracking-tight">
                {project.title}
              </h3>

              <p className="mt-3 text-base text-[#475569] dark:text-[#94A3B8] leading-[1.6]">
                {project.shortDescription}
              </p>

              {/* Key Highlights */}
              <div className="mt-6 pt-5 border-t border-[#E2E8F0] dark:border-[#1E293B]">
                <h4 className="text-xs uppercase font-mono font-semibold tracking-wider text-[#94A3B8] mb-3">
                  Key Highlights & Contributions
                </h4>
                <ul className="space-y-2.5">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm sm:text-base text-[#475569] dark:text-[#94A3B8] leading-[1.6]">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA] shrink-0 mt-1" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="mt-6 pt-5 border-t border-[#E2E8F0] dark:border-[#1E293B]">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-[6px] bg-[#F1F5F9] dark:bg-[#1E293B] text-[#0F172A] dark:text-[#F1F5F9] border border-[#E2E8F0] dark:border-[#334155]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

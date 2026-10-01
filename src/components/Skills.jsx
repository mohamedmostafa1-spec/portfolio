import React from 'react';
import { Layout, Server, Cpu, Code2, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryIcons = {
  "Frontend": Layout,
  "Backend & APIs": Server,
  "Machine Learning": Cpu,
  "Other Languages": Code2,
  "Soft Skills": Users,
};

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 border-t border-[#E2E8F0] dark:border-[#1E293B] bg-white dark:bg-[#0B1120] scroll-mt-16"
      aria-label="Technical and Professional Skills"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12">
          <span className="section-label">SKILLS</span>
          <h2 className="section-title">
            Technical & Professional Toolkit
          </h2>
          <p className="mt-2 text-base text-[#475569] dark:text-[#94A3B8]">
            A solid foundation in modern frontend web technologies, complemented by backend API fundamentals and problem-solving experience.
          </p>
        </div>

        {/* Grouped Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group) => {
            const Icon = categoryIcons[group.category] || Code2;
            const isFeatured = group.highlight;

            return (
              <div
                key={group.category}
                className={`pro-card pro-card-hover p-6 ${
                  isFeatured ? 'md:col-span-2 bg-[#F8FAFC]/70 dark:bg-[#111827]' : 'bg-white dark:bg-[#111827]'
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-[8px] bg-[#F8FAFC] dark:bg-[#1E293B] text-[#2563EB] dark:text-[#60A5FA]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#0F172A] dark:text-[#F1F5F9]">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] mb-4">
                  {group.description}
                </p>

                {/* Small rounded chips */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skillName) => (
                    <span
                      key={skillName}
                      className="inline-flex items-center px-2.5 py-1 rounded-[6px] text-xs font-medium bg-[#F1F5F9] dark:bg-[#1E293B] text-[#0F172A] dark:text-[#F1F5F9] border border-[#E2E8F0] dark:border-[#334155] transition-colors hover:border-slate-400 dark:hover:border-slate-500"
                    >
                      {skillName}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

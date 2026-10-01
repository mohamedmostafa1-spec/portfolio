import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Education() {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      className="py-20 sm:py-24 border-t border-[#E2E8F0] dark:border-[#1E293B] bg-white dark:bg-[#0B1120] scroll-mt-16"
      aria-label="Education History"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12">
          <span className="section-label">EDUCATION</span>
          <h2 className="section-title">
            Academic Background
          </h2>
          <p className="mt-2 text-base text-[#475569] dark:text-[#94A3B8]">
            Foundational computer science education and engineering fundamentals.
          </p>
        </div>

        {/* Education Item Cards */}
        <div className="space-y-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="pro-card pro-card-hover p-6 sm:p-8 bg-white dark:bg-[#111827]"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-[8px] bg-[#F8FAFC] dark:bg-[#1E293B] text-[#2563EB] dark:text-[#60A5FA] shrink-0 mt-1">
                  <GraduationCap className="w-5 h-5" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9]">
                      {item.degree}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#2563EB] dark:text-[#60A5FA]">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.year}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base font-medium text-[#475569] dark:text-[#94A3B8] mt-1">
                    {item.institution}
                  </p>

                  <div className="flex items-center gap-1.5 mt-2 text-xs text-[#94A3B8]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>

                  {item.details && (
                    <div className="mt-4 pt-4 border-t border-[#E2E8F0] dark:border-[#1E293B] text-sm text-[#475569] dark:text-[#94A3B8] leading-[1.6]">
                      {item.details}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

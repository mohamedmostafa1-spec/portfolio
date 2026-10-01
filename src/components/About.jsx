import React from 'react';
import { MapPin, GraduationCap, Languages, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function About() {
  const { summary, location, languages } = portfolioData.personalInfo;

  return (
    <section
      id="about"
      className="py-20 sm:py-24 border-t border-[#E2E8F0] dark:border-[#1E293B] bg-[#F8FAFC] dark:bg-[#111827]/50 scroll-mt-16"
      aria-label="About Mohamed Mostafa Farag"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12">
          <span className="section-label">ABOUT</span>
          <h2 className="section-title">
            Engineering with Curiosity & Precision
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-8 space-y-4 text-base sm:text-lg text-[#475569] dark:text-[#94A3B8] leading-[1.6]">
            <p>
              I am a Computer Science graduate from <span className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Arab Open University</span> (Class of 2025), dedicated to creating responsive, high-quality, and user-friendly web interfaces.
            </p>
            <p>
              My primary focus is within the frontend ecosystem—crafting accessible components and smooth user interactions using <span className="font-medium text-[#0F172A] dark:text-[#F1F5F9]">React, JavaScript, HTML, and CSS</span>. Through academic coursework and hands-on projects, I have also worked with backend APIs in Python and Flask, as well as deep learning integration with TensorFlow.
            </p>
            <p>
              As a fast learner with strong problem-solving skills, I enjoy dissecting complex requirements and turning them into clean, structured code. I am actively seeking an entry-level frontend role where I can contribute to meaningful web applications and continue developing alongside an experienced engineering team.
            </p>
          </div>

          {/* Quick Overview Card (1px border, 12px radius, soft shadow, gentle lift) */}
          <div className="lg:col-span-4 pro-card pro-card-hover p-6 bg-white dark:bg-[#111827] space-y-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-[#F1F5F9] font-mono">
              Key Facts
            </h3>

            {/* Location */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-[8px] bg-[#F8FAFC] dark:bg-[#1E293B] text-[#2563EB] dark:text-[#60A5FA] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-[#94A3B8] font-medium">Location</div>
                <div className="text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9]">{location}</div>
              </div>
            </div>

            {/* Education */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-[8px] bg-[#F8FAFC] dark:bg-[#1E293B] text-[#2563EB] dark:text-[#60A5FA] shrink-0 mt-0.5">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-[#94A3B8] font-medium">Education</div>
                <div className="text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9]">
                  B.Sc. Computer Science (2025)
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-[8px] bg-[#F8FAFC] dark:bg-[#1E293B] text-[#2563EB] dark:text-[#60A5FA] shrink-0 mt-0.5">
                <Languages className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-[#94A3B8] font-medium">Languages</div>
                <div className="text-sm font-medium text-[#0F172A] dark:text-[#F1F5F9]">
                  {languages.map((lang, idx) => (
                    <span key={lang.name}>
                      {lang.name} <span className="text-xs text-[#94A3B8]">({lang.level})</span>
                      {idx < languages.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="pt-3 border-t border-[#E2E8F0] dark:border-[#1E293B]">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Open for full-time opportunities</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

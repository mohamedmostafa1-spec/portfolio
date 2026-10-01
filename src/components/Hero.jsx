import React from 'react';
import { ArrowDown, FileText, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { LinkedInIcon } from './LinkedInIcon';

export function Hero() {
  const { name, title, pitch, cvUrl, location, linkedin } = portfolioData.personalInfo;

  return (
    <section
      id="hero"
      className="pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-24"
      aria-label="Introduction and Summary"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Subtle Availability Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[8px] bg-[#F8FAFC] dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1E293B] text-xs font-medium text-[#475569] dark:text-[#94A3B8] mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Available for Junior Roles</span>
              <span className="text-[#CBD5E1] dark:text-[#334155]">•</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#2563EB] dark:text-[#60A5FA]" />
                {location}
              </span>
            </div>

            {/* Developer Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] dark:text-[#F1F5F9] leading-tight">
              {name}
            </h1>

            {/* Title */}
            <p className="mt-2 text-lg sm:text-xl font-semibold text-[#2563EB] dark:text-[#60A5FA]">
              {title}
            </p>

            {/* One-Line Pitch */}
            <p className="mt-4 text-base sm:text-lg text-[#475569] dark:text-[#94A3B8] leading-[1.6] max-w-xl">
              {pitch}
            </p>

            {/* Actions: Primary & Secondary Buttons (8px radius) */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* Primary button: solid accent color */}
              <a
                href="#projects"
                className="btn-primary"
              >
                <span>View projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Secondary button: outlined */}
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="Download CV (opens in new tab)"
              >
                <FileText className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
                <span>Download CV</span>
              </a>

              {/* LinkedIn Link */}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-3"
                  aria-label="Connect on LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4 fill-current text-[#2563EB] dark:text-[#60A5FA]" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Clean, Polished Code-Style Card Visual (No photos, no gimmicks) */}
          <div className="lg:col-span-5 w-full">
            <div className="pro-card p-5 sm:p-6 bg-white dark:bg-[#111827] shadow-sm select-none">
              
              {/* Header Window Chrome */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E2E8F0] dark:border-[#1E293B]">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0] dark:bg-[#334155]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0] dark:bg-[#334155]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0] dark:bg-[#334155]"></span>
                </div>
                <span className="text-xs font-mono text-[#94A3B8] dark:text-[#64748B]">developer.profile.ts</span>
              </div>

              {/* Code Snippet Content */}
              <div className="space-y-2 text-xs sm:text-sm font-mono leading-relaxed text-[#475569] dark:text-[#94A3B8]">
                <div>
                  <span className="text-[#2563EB] dark:text-[#60A5FA]">const</span> developer = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-[#0F172A] dark:text-[#F1F5F9]">name</span>: <span className="text-emerald-600 dark:text-emerald-400">'Mohamed Farag'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#0F172A] dark:text-[#F1F5F9]">role</span>: <span className="text-emerald-600 dark:text-emerald-400">'Junior Frontend Developer'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#0F172A] dark:text-[#F1F5F9]">coreStack</span>: [<span className="text-emerald-600 dark:text-emerald-400">'React'</span>, <span className="text-emerald-600 dark:text-emerald-400">'JavaScript'</span>, <span className="text-emerald-600 dark:text-emerald-400">'Tailwind'</span>],
                </div>
                <div className="pl-4">
                  <span className="text-[#0F172A] dark:text-[#F1F5F9]">degree</span>: <span className="text-emerald-600 dark:text-emerald-400">'B.Sc. Computer Science (2025)'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#0F172A] dark:text-[#F1F5F9]">focus</span>: <span className="text-emerald-600 dark:text-emerald-400">'Clean, responsive, accessible UI'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#0F172A] dark:text-[#F1F5F9]">status</span>: <span className="text-[#2563EB] dark:text-[#60A5FA]">'Ready to contribute'</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Footer Indicator */}
              <div className="mt-5 pt-4 border-t border-[#E2E8F0] dark:border-[#1E293B] flex items-center justify-between text-[11px] text-[#94A3B8] dark:text-[#64748B] font-mono">
                <span>// TypeScript 5.4</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">✓ Clean architecture</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

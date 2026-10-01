import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { LinkedInIcon } from './LinkedInIcon';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { name, email, linkedin } = portfolioData.personalInfo;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-[#E2E8F0] dark:border-[#1E293B] bg-white dark:bg-[#0B1120] text-sm text-[#475569] dark:text-[#94A3B8]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Name & Year & Email */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-center sm:text-left">
          <span className="font-medium text-[#0F172A] dark:text-[#F1F5F9]">
            {name}
          </span>
          <span className="text-[#CBD5E1] dark:text-[#334155]">•</span>
          <span>© {currentYear}</span>
          <span className="text-[#CBD5E1] dark:text-[#334155]">•</span>
          <a
            href={`mailto:${email}`}
            className="text-[#475569] dark:text-[#94A3B8] hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors focus-ring rounded"
          >
            {email}
          </a>
        </div>

        {/* Right: LinkedIn & Back to top */}
        <div className="flex items-center space-x-4">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#475569] dark:text-[#94A3B8] hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors focus-ring rounded-[8px] p-1"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
              <span>LinkedIn</span>
            </a>
          )}

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1 text-xs font-mono text-[#475569] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F1F5F9] transition-colors focus-ring rounded-[8px] p-1"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

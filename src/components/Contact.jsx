import React, { useState } from 'react';
import { Mail, FileText, Copy, Check, Send, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { LinkedInIcon } from './LinkedInIcon';

export function Contact() {
  const { email, cvUrl, location, linkedin } = portfolioData.personalInfo;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 border-t border-[#E2E8F0] dark:border-[#1E293B] bg-[#F8FAFC] dark:bg-[#111827]/50 scroll-mt-16"
      aria-label="Contact and Resume Download"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12">
          <span className="section-label">CONTACT</span>
          <h2 className="section-title">
            Let’s Connect
          </h2>
          <p className="mt-2 text-base text-[#475569] dark:text-[#94A3B8]">
            I am currently open to junior frontend opportunities, collaboration, and exciting web development roles.
          </p>
        </div>

        {/* Contact Card (1px border, 12px radius, very soft shadow) */}
        <div className="pro-card p-6 sm:p-10 bg-white dark:bg-[#111827]">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9]">
              Ready to contribute to your engineering team.
            </h3>
            <p className="mt-2 text-base text-[#475569] dark:text-[#94A3B8] leading-[1.6]">
              Feel free to reach out directly via email, connect on LinkedIn, or review my resume. I typically respond promptly.
            </p>

            {/* Email Address Bar */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-2 p-2 bg-[#F8FAFC] dark:bg-[#0B1120] rounded-[8px] border border-[#E2E8F0] dark:border-[#1E293B]">
              <div className="flex items-center gap-2.5 px-2 py-1 flex-1 min-w-0">
                <Mail className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA] shrink-0" />
                <span className="font-mono text-xs sm:text-sm text-[#0F172A] dark:text-[#F1F5F9] truncate select-all">
                  {email}
                </span>
              </div>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-[6px] text-[#0F172A] dark:text-[#F1F5F9] bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1E293B] hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus-ring"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#475569] dark:text-[#94A3B8]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Action Buttons: Primary & Secondary (8px radius) */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* Primary "Contact me" (mailto) */}
              <a
                href={`mailto:${email}?subject=Frontend%20Developer%20Opportunity`}
                className="btn-primary"
              >
                <Send className="w-4 h-4" />
                <span>Contact me</span>
              </a>

              {/* Secondary "Download CV" */}
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

              {/* Secondary "LinkedIn" */}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  aria-label="LinkedIn profile"
                >
                  <LinkedInIcon className="w-4 h-4 fill-current text-[#2563EB] dark:text-[#60A5FA]" />
                  <span>LinkedIn Profile</span>
                </a>
              )}
            </div>

            {/* Footer Metadata */}
            <div className="mt-8 pt-5 border-t border-[#E2E8F0] dark:border-[#1E293B] flex flex-wrap items-center gap-3 text-xs text-[#94A3B8]">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                Based in {location}
              </span>
              <span>•</span>
              <span className="text-emerald-600 dark:text-emerald-400">
                Open for remote & on-site opportunities
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

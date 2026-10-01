import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { LinkedInIcon } from './LinkedInIcon';

export function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#0B1120]/90 backdrop-blur-md border-b border-[#E2E8F0] dark:border-[#1E293B] py-3.5 shadow-sm'
          : 'bg-white/50 dark:bg-[#0B1120]/50 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Developer Name on the left */}
          <a
            href="#"
            className="text-base font-semibold tracking-tight text-[#0F172A] dark:text-[#F1F5F9] hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors focus-ring rounded-[8px] py-1"
            aria-label="Mohamed Mostafa Farag - Return to top"
          >
            Mohamed Farag
          </a>

          {/* Desktop Navigation Links & Actions on the right */}
          <div className="hidden md:flex items-center space-x-7">
            <nav className="flex items-center space-x-6" aria-label="Main Navigation">
              {portfolioData.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#475569] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F1F5F9] transition-colors focus-ring rounded-[8px] py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-2 pl-3 border-l border-[#E2E8F0] dark:border-[#1E293B]">
              {/* LinkedIn Link */}
              {portfolioData.personalInfo.linkedin && (
                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#475569] dark:text-[#94A3B8] hover:text-[#2563EB] dark:hover:text-[#60A5FA] hover:bg-[#F8FAFC] dark:hover:bg-[#111827] rounded-[8px] transition-colors focus-ring"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-4 h-4 fill-current" />
                </a>
              )}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                type="button"
                className="p-2 text-[#475569] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F1F5F9] hover:bg-[#F8FAFC] dark:hover:bg-[#111827] rounded-[8px] transition-colors focus-ring"
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-600" />
                )}
              </button>

              {/* Quick Resume Link */}
              <a
                href={portfolioData.personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-[8px] border border-[#E2E8F0] dark:border-[#1E293B] text-[#0F172A] dark:text-[#F1F5F9] hover:bg-[#F8FAFC] dark:hover:bg-[#111827] transition-colors focus-ring"
              >
                <FileText className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                <span>CV</span>
              </a>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-1.5 md:hidden">
            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 text-[#475569] dark:text-[#94A3B8] hover:bg-[#F8FAFC] dark:hover:bg-[#111827] rounded-[8px] transition-colors focus-ring"
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 text-[#475569] dark:text-[#94A3B8] hover:bg-[#F8FAFC] dark:hover:bg-[#111827] rounded-[8px] transition-colors focus-ring"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-[#E2E8F0] dark:border-[#1E293B] bg-white dark:bg-[#0B1120] px-4 pt-3 pb-5 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {portfolioData.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="px-3 py-2 text-sm font-medium text-[#475569] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F1F5F9] hover:bg-[#F8FAFC] dark:hover:bg-[#111827] rounded-[8px] transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 border-t border-[#E2E8F0] dark:border-[#1E293B] flex items-center gap-3">
              <a
                href={portfolioData.personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="btn-primary w-full text-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>

              {portfolioData.personalInfo.linkedin && (
                <a
                  href={portfolioData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="btn-secondary text-xs px-3"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4 fill-current text-[#2563EB] dark:text-[#60A5FA]" />
                </a>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

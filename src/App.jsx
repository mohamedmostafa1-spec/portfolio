import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const { isDark, toggleTheme } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1120] text-[#0F172A] dark:text-[#F1F5F9] transition-colors duration-150">
      {/* Accessibility Skip Link */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#2563EB] text-white font-medium rounded-[8px] shadow-md focus-ring"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Content Sections (Strict Order as requested) */}
      <main id="main-content">
        {/* 1. Hero */}
        <Hero />

        {/* 2. About */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Projects */}
        <Projects />

        {/* 5. Education */}
        <Education />

        {/* 6. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

import React from 'react';
import { Eye, CheckCircle2 } from 'lucide-react';

export function ProjectVisualPlaceholder({ title }) {
  return (
    <div
      className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[10px] overflow-hidden bg-[#F8FAFC] dark:bg-[#0B1120] border border-[#E2E8F0] dark:border-[#1E293B] flex flex-col select-none"
      aria-hidden="true"
    >
      {/* Chrome Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white dark:bg-[#111827] border-b border-[#E2E8F0] dark:border-[#1E293B]">
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0] dark:bg-[#334155]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0] dark:bg-[#334155]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0] dark:bg-[#334155]"></span>
          <span className="ml-2 text-xs font-mono text-[#475569] dark:text-[#94A3B8]">retinal-diagnostics-app</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] text-[11px] font-mono text-[#2563EB] dark:text-[#60A5FA] bg-[#EFF6FF] dark:bg-[#1E293B] border border-blue-200 dark:border-blue-900/50">
            TensorFlow + Flask
          </span>
        </div>
      </div>

      {/* Visual Workspace */}
      <div className="relative flex-1 flex flex-col sm:flex-row items-center justify-between p-6 gap-6">
        
        {/* Left: Diagnostic Schematic */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[12px] bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1E293B] flex items-center justify-center text-[#2563EB] dark:text-[#60A5FA] shadow-xs">
            <Eye className="w-8 h-8 stroke-[1.5]" />
          </div>
          <div>
            <div className="text-xs font-mono text-[#94A3B8]">MODEL STATUS</div>
            <div className="text-sm sm:text-base font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Deep Learning Inference Engine</div>
            <div className="text-xs text-[#475569] dark:text-[#94A3B8] mt-0.5">Image upload & automated classification</div>
          </div>
        </div>

        {/* Right: Clean metrics / status chips */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="px-3 py-1.5 rounded-[8px] bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1E293B] text-xs font-mono text-[#0F172A] dark:text-[#F1F5F9]">
            <span className="text-[#475569] dark:text-[#94A3B8]">Input:</span> Eye Image
          </div>
          <div className="px-3 py-1.5 rounded-[8px] bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1E293B] text-xs font-mono text-[#0F172A] dark:text-[#F1F5F9]">
            <span className="text-[#475569] dark:text-[#94A3B8]">Output:</span> Detection Result
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-xs font-mono text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Ready</span>
          </div>
        </div>

      </div>
    </div>
  );
}

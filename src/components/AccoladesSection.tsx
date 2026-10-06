import React from 'react';
import { Award, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { ACCOLADES } from '../data/faveoData';

export const AccoladesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-center">
        {/* Header exact match to Image 8 */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Accolades and Milestones
        </h2>

        {/* 5 Award Badges Display matching Image 8 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center">
          {/* Badge 1: SoftwareSuggest 2020 Most Affordable */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-44 bg-gradient-to-b from-sky-50 to-white border-2 border-sky-400 rounded-2xl p-3 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-0.5 text-sky-500">
                {'★★★★★'.split('').map((_, i) => (
                  <span key={i} className="text-xs">★</span>
                ))}
              </div>
              <div className="space-y-0.5 text-center">
                <span className="text-[10px] font-extrabold text-sky-900 tracking-wider block">
                  MOST AFFORDABLE
                </span>
                <div className="bg-sky-800 text-white text-[11px] font-black px-2 py-0.5 rounded-xs tracking-tight">
                  SoftwareSuggest
                </div>
              </div>
              <span className="text-[10px] font-mono text-slate-500 font-bold border-t border-sky-200 w-full pt-1">
                — 2020 —
              </span>
            </div>
          </div>

          {/* Badge 2: Software Advice Front Runners 2026 */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-44 bg-slate-900 text-white border-2 border-amber-500 rounded-2xl p-3 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="text-center">
                <span className="text-[9px] font-bold text-amber-400 block tracking-tight">
                  Software Advice
                </span>
              </div>
              <div className="space-y-0.5 text-center">
                <span className="text-sm font-black tracking-wider text-white block">
                  FRONT
                </span>
                <span className="text-sm font-black tracking-wider text-white block">
                  RUNNERS
                </span>
              </div>
              <div className="bg-amber-500 text-slate-950 font-bold text-xs px-2.5 py-0.5 rounded-full font-mono">
                2026
              </div>
            </div>
          </div>

          {/* Badge 3: Capterra Shortlist 2026 */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-44 bg-slate-950 text-white border-2 border-blue-500 rounded-2xl p-3 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 text-sky-400 font-bold text-xs">
                <span>◀</span>
                <span>Capterra</span>
              </div>
              <div className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-slate-950 font-black text-xs py-1 px-1 rounded uppercase tracking-wider text-center">
                SHORTLIST
              </div>
              <span className="text-xs font-mono font-bold text-slate-300">
                2026
              </span>
            </div>
          </div>

          {/* Badge 4: Software Advice Front Runners 2025 */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-44 bg-slate-900 text-white border-2 border-amber-500 rounded-2xl p-3 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="text-center">
                <span className="text-[9px] font-bold text-amber-400 block tracking-tight">
                  Software Advice
                </span>
              </div>
              <div className="space-y-0.5 text-center">
                <span className="text-sm font-black tracking-wider text-white block">
                  FRONT
                </span>
                <span className="text-sm font-black tracking-wider text-white block">
                  RUNNERS
                </span>
              </div>
              <div className="bg-amber-500 text-slate-950 font-bold text-xs px-2.5 py-0.5 rounded-full font-mono">
                2025
              </div>
            </div>
          </div>

          {/* Badge 5: GetApp Category Leaders 2025 */}
          <div className="flex flex-col items-center col-span-2 sm:col-span-1">
            <div className="w-36 h-44 bg-slate-900 text-white border-2 border-teal-400 rounded-2xl p-3 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 text-teal-400 font-bold text-xs">
                <span>❖</span>
                <span>GetApp</span>
              </div>
              <div className="space-y-0.5 text-center">
                <span className="text-[10px] text-teal-300 font-semibold tracking-wider uppercase block">
                  CATEGORY
                </span>
                <span className="text-xs font-black tracking-wider text-white block">
                  LEADERS
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-teal-300">
                2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

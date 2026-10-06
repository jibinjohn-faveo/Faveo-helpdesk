import React from 'react';
import { ENTERPRISE_CLIENTS } from '../data/faveoData';

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50/80 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        {/* Main Heading & Subtitle exactly as in Image 1 */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Over 10,000+ Leading Enterprises Trust Faveo
        </h2>
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          From small support teams to global IT operations, Faveo is the help desk system companies rely on for fast, structured, SLA-protected support.
        </p>

        {/* Enterprise Logos Grid */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center justify-center">
          {/* Logo 1: SHIVALIK */}
          <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col items-center justify-center h-20 text-center">
            <div className="flex items-center gap-1.5 font-black text-slate-800 text-sm tracking-wider">
              <span className="w-3.5 h-3.5 bg-blue-700 clip-path-polygon inline-block rounded-xs" />
              <span>SHIVALIK</span>
            </div>
            <span className="text-[9px] text-slate-500 font-medium">Small Finance Bank</span>
          </div>

          {/* Logo 2: Business 1st */}
          <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col items-center justify-center h-20 text-center">
            <div className="font-extrabold text-sky-600 text-base tracking-tight italic flex items-center gap-1">
              <span>Business</span>
              <span className="bg-sky-600 text-white text-[10px] px-1 py-0.2 rounded font-sans not-italic">1st</span>
            </div>
            <span className="text-[9px] text-slate-500 font-medium">Enterprise Hub</span>
          </div>

          {/* Logo 3: InnBucks */}
          <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col items-center justify-center h-20 text-center">
            <div className="flex items-center gap-1 font-bold text-slate-900 text-sm">
              <span className="flex gap-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              </span>
              <span>InnBucks</span>
            </div>
            <span className="text-[9px] text-slate-500 font-medium">MicroBank Limited</span>
          </div>

          {/* Logo 4: tekSalah */}
          <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col items-center justify-center h-20 text-center">
            <div className="font-bold text-rose-700 text-sm tracking-tight">
              tek<span className="text-slate-900 font-black">Salah</span>
            </div>
            <span className="text-[8px] text-slate-400 font-mono tracking-widest uppercase">BEYOND SOLUTIONS</span>
          </div>

          {/* Logo 5: bmb */}
          <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col items-center justify-center h-20 text-center">
            <div className="flex items-center gap-1 text-blue-600 font-black text-xl tracking-tighter">
              <span className="text-2xl leading-none">∯</span>
              <span>bmb</span>
            </div>
            <span className="text-[9px] text-slate-500 font-medium">Technology Group</span>
          </div>

          {/* Logo 6: EYE-Q */}
          <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col items-center justify-center h-20 text-center">
            <div className="flex items-center gap-1 font-black text-blue-900 text-sm">
              <span className="text-amber-500 font-serif text-lg">EYE</span>
              <span className="bg-blue-900 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">Q</span>
            </div>
            <span className="text-[8px] text-slate-500 font-medium tracking-tight">SUPER-SPECIALITY HOSPITALS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

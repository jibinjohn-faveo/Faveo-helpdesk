import React from 'react';
import { Gauge, ShieldCheck, Maximize2, Award, Headphones, Clock, CheckCircle2 } from 'lucide-react';

export const ValuePillars: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
            Customer support teams choose Faveo when reliability and speed matter most
          </h2>
        </div>

        {/* 2-Column Content Layout matching Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: 24/7 Agent Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl border border-blue-100 p-8 w-full max-w-md shadow-sm relative overflow-hidden text-left">
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>24/7 Support Desk</span>
              </div>

              {/* Agent Representation */}
              <div className="pt-8 pb-4 flex flex-col items-center text-center space-y-3">
                <div className="w-20 h-20 rounded-full bg-blue-600/10 border-2 border-blue-200 flex items-center justify-center text-blue-600 shadow-inner">
                  <Headphones className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <span className="text-sm font-bold text-slate-900 block">Unified Support Agent</span>
                  <div className="flex items-center justify-center gap-1 text-amber-400">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i} className="text-sm">{star}</span>
                    ))}
                  </div>
                </div>

                <div className="w-full bg-white rounded-xl border border-slate-200 p-3 shadow-2xs text-xs space-y-1.5">
                  <div className="flex justify-between text-slate-500 text-[11px]">
                    <span>Omnichannel Status</span>
                    <span className="text-emerald-600 font-bold">Online · SLA Protected</span>
                  </div>
                  <div className="text-slate-800 font-medium">
                    "AI suggestions applied to 82% of responses today"
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy & 4 Key Pillars */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Faveo is a scalable helpdesk software and support ticketing system built to unify every request into one omnichannel support inbox. With SLA-protected tracking and AI-assisted replies, support teams resolve faster, miss nothing, and scale confidently.
            </p>

            {/* 4 Pillars Grid (Quick, Secure, Scalable, Reliable) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {/* Pillar 1: Quick */}
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                  <Gauge className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Quick</h3>
                <span className="text-[11px] text-slate-500 mt-0.5">Rapid resolution</span>
              </div>

              {/* Pillar 2: Secure */}
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Secure</h3>
                <span className="text-[11px] text-slate-500 mt-0.5">GDPR & RBAC safe</span>
              </div>

              {/* Pillar 3: Scalable */}
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-3">
                  <Maximize2 className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Scalable</h3>
                <span className="text-[11px] text-slate-500 mt-0.5">5 to 500+ seats</span>
              </div>

              {/* Pillar 4: Reliable */}
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Reliable</h3>
                <span className="text-[11px] text-slate-500 mt-0.5">99.9% uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Building2, GraduationCap, Cpu, Server, Quote, ArrowRight } from 'lucide-react';
import { VALUABLE_CUSTOMERS } from '../data/faveoData';

interface CustomerStoriesProps {
  onOpenDemo: (mode?: 'demo' | 'trial') => void;
}

export const CustomerStories: React.FC<CustomerStoriesProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header exact match to Image 9 */}
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
            What Do Our Valuable Customers Say About Us?
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-normal">
            Real enterprise deployments across manufacturing, global higher education, engineering, and IT infrastructure.
          </p>
        </div>

        {/* 4 Cards Grid matching Image 9 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Silafrica */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between text-left">
            <div>
              {/* Graphic container with overlay logo */}
              <div className="h-44 bg-gradient-to-br from-amber-500 to-yellow-600 relative p-4 flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 opacity-30 bg-cover bg-center"
                  style={{ backgroundImage: `radial-gradient(circle, #ffffff 10%, transparent 20%)`, backgroundSize: '16px 16px' }}
                />
                <div className="bg-white/95 backdrop-blur-xs px-4 py-2 rounded-lg shadow-md border border-white/60 text-center z-10">
                  <div className="font-extrabold text-blue-900 text-sm tracking-wide">
                    SILAFRICA
                  </div>
                  <div className="text-[9px] text-amber-600 font-bold italic tracking-tight">
                    We Make Packaging Roar
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                  Packaging & Manufacturing
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  "Faveo centralized order inquiries across all African production plants with automated SLA routing, eliminating lost supply requests."
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => onOpenDemo('demo')}
                className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
              >
                <span>Read customer story</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 2: University of Chester */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between text-left">
            <div>
              {/* Graphic container with overlay logo */}
              <div className="h-44 bg-gradient-to-br from-red-800 to-rose-950 relative p-4 flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 opacity-25"
                  style={{ backgroundImage: `radial-gradient(circle, #ffffff 10%, transparent 20%)`, backgroundSize: '16px 16px' }}
                />
                <div className="bg-white/95 backdrop-blur-xs px-4 py-2 rounded-lg shadow-md border border-white/60 text-center z-10 flex items-center gap-2">
                  <span className="text-red-700 font-serif font-black text-lg">✙</span>
                  <div className="text-left">
                    <div className="text-[9px] text-slate-500 uppercase tracking-tight">University of</div>
                    <div className="font-bold text-slate-900 text-xs tracking-tight">Chester</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                  Higher Education (UK)
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  "Connected thousands of students and faculty with single sign-on campus support, reducing response times by over 60%."
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => onOpenDemo('demo')}
                className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
              >
                <span>Read customer story</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 3: ABK Teknik */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between text-left">
            <div>
              {/* Graphic container with overlay logo */}
              <div className="h-44 bg-gradient-to-br from-teal-700 to-emerald-900 relative p-4 flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 opacity-25"
                  style={{ backgroundImage: `radial-gradient(circle, #ffffff 10%, transparent 20%)`, backgroundSize: '16px 16px' }}
                />
                <div className="bg-white/95 backdrop-blur-xs px-4 py-2 rounded-lg shadow-md border border-white/60 text-center z-10">
                  <div className="font-black text-teal-600 text-sm tracking-wide">
                    ABK<span className="text-slate-800 font-medium">Teknik</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                  Industrial Engineering
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  "Standardized machine servicing tickets with customizable dropdowns and automated escalation when parts are pending."
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => onOpenDemo('demo')}
                className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
              >
                <span>Read customer story</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 4: Sanveer Infotech */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between text-left">
            <div>
              {/* Graphic container with overlay logo */}
              <div className="h-44 bg-gradient-to-br from-blue-900 to-indigo-950 relative p-4 flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 opacity-25"
                  style={{ backgroundImage: `radial-gradient(circle, #ffffff 10%, transparent 20%)`, backgroundSize: '16px 16px' }}
                />
                <div className="bg-white/95 backdrop-blur-xs px-4 py-2 rounded-lg shadow-md border border-white/60 text-center z-10">
                  <div className="font-extrabold text-blue-700 text-xs tracking-tight flex items-center gap-1">
                    <span className="text-amber-500 font-bold">∿</span>
                    <span>Sanveer</span>
                  </div>
                  <div className="text-[8px] text-slate-500 uppercase tracking-widest font-mono">infotech</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Data Center & IT Services
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  "Hosted Faveo in our certified private server racks, delivering total data ownership with enterprise-grade SLA compliance."
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => onOpenDemo('demo')}
                className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
              >
                <span>Read customer story</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

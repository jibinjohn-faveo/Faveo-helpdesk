import React from 'react';
import { Briefcase, Users2, Users, Globe } from 'lucide-react';
import { COMPANY_STATS } from '../data/faveoData';

export const StatsBanner: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white py-12 border-y border-blue-700 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-500/40">
          {/* Stat 1: 12+ Years */}
          <div className="pt-4 md:pt-0 flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-blue-500/50 flex items-center justify-center text-white mb-1 shadow-xs">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono">
              {COMPANY_STATS[0].value}
            </div>
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-100">
              {COMPANY_STATS[0].label}
            </span>
          </div>

          {/* Stat 2: 5000+ Customers */}
          <div className="pt-4 md:pt-0 flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-blue-500/50 flex items-center justify-center text-white mb-1 shadow-xs">
              <Users2 className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono">
              {COMPANY_STATS[1].value}
            </div>
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-100">
              {COMPANY_STATS[1].label}
            </span>
          </div>

          {/* Stat 3: 50+ Team Size */}
          <div className="pt-4 md:pt-0 flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-blue-500/50 flex items-center justify-center text-white mb-1 shadow-xs">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono">
              {COMPANY_STATS[2].value}
            </div>
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-100">
              {COMPANY_STATS[2].label}
            </span>
          </div>

          {/* Stat 4: 50+ Countries */}
          <div className="pt-4 md:pt-0 flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-blue-500/50 flex items-center justify-center text-white mb-1 shadow-xs">
              <Globe className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono">
              {COMPANY_STATS[3].value}
            </div>
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-100">
              {COMPANY_STATS[3].label}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Laptop,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { CASE_STUDIES } from '../data/faveoData';

interface CaseStudiesSectionProps {
  onOpenDemo: (mode?: 'demo' | 'trial') => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700">
            Customer Proof & Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Proven Impact Across Regulated & High-Volume Environments
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real operational transformations achieved by teams deploying Faveo Helpdesk in enterprise education, healthcare clinical services, and fast-scaling B2B technology.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between text-left hover:border-slate-300 transition-colors"
            >
              <div className="space-y-5">
                {/* Header Lockup */}
                <div className="space-y-1 border-b border-slate-200 pb-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-blue-700">{study.industry}</span>
                    <span className="font-mono text-[11px] bg-slate-200/80 px-2 py-0.5 rounded text-slate-700">
                      {study.deployment}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 pt-1">
                    {study.organization}
                  </h3>
                  <div className="text-xs text-slate-500">{study.location}</div>
                </div>

                {/* Challenge */}
                <div className="space-y-1.5 text-xs">
                  <span className="font-bold text-slate-900 uppercase tracking-wide text-[11px] block text-rose-700">
                    Operational Challenge:
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Implemented Solution */}
                <div className="space-y-1.5 text-xs">
                  <span className="font-bold text-slate-900 uppercase tracking-wide text-[11px] block text-blue-700">
                    Faveo Deployment:
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Results Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/80 text-center">
                  {study.results.map((res, i) => (
                    <div key={i} className="bg-white p-2.5 rounded-lg border border-slate-200/80">
                      <div className="text-base font-extrabold text-blue-700 font-mono">
                        {res.metric}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-slate-200/60 mt-6">
                <button
                  onClick={() => onOpenDemo('demo')}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                >
                  <span>Discuss a similar implementation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

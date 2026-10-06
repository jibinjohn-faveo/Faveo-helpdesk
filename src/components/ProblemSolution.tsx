import React, { useState } from 'react';
import {
  Inbox,
  GitBranch,
  Users,
  ShieldAlert,
  BarChart3,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from 'lucide-react';
import { PROBLEM_SOLUTION_WORKFLOW } from '../data/faveoData';

export const ProblemSolution: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Inbox className="w-5 h-5 text-blue-600" />;
      case 1:
        return <GitBranch className="w-5 h-5 text-blue-600" />;
      case 2:
        return <Users className="w-5 h-5 text-blue-600" />;
      case 3:
        return <ShieldAlert className="w-5 h-5 text-blue-600" />;
      case 4:
        return <BarChart3 className="w-5 h-5 text-blue-600" />;
      default:
        return <Inbox className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700">
            Support Operations Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Bring Every Support Request Into One Organised Workflow
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            When customer inquiries are spread across personal email inboxes and web forms, tickets slip through the cracks. See how Faveo establishes structured accountability at every stage.
          </p>
        </div>

        {/* 5-Step Visual Pipeline Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {PROBLEM_SOLUTION_WORKFLOW.map((item, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-50/80 border-blue-600 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-slate-400">{item.step}</span>
                  {getStepIcon(idx)}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {item.stage}
                </h3>
                <div className="mt-2 text-[11px] font-medium text-blue-700">
                  {item.metric}
                </div>
              </button>
            );
          })}
        </div>

        {/* Focused Comparison Card for Active Workflow Stage */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* The Fragmented Problem */}
            <div className="md:col-span-5 bg-white p-6 rounded-xl border border-rose-100 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-rose-700 text-xs font-bold uppercase tracking-wide">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>The Operational Hurdle</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">
                {PROBLEM_SOLUTION_WORKFLOW[activeStepIndex].stage}: The Friction
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {PROBLEM_SOLUTION_WORKFLOW[activeStepIndex].problem}
              </p>
            </div>

            {/* Transition Arrow Indicator */}
            <div className="md:col-span-2 flex justify-center text-blue-600">
              <div className="w-12 h-12 rounded-full bg-blue-100/80 flex items-center justify-center">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>

            {/* The Faveo Engineered Resolution */}
            <div className="md:col-span-5 bg-white p-6 rounded-xl border border-blue-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-blue-600" />
                <span>The Faveo Engineered Solution</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">
                Structured & Automated Resolution
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {PROBLEM_SOLUTION_WORKFLOW[activeStepIndex].solution}
              </p>
              <div className="pt-2 text-xs text-blue-800 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Expected outcome: {PROBLEM_SOLUTION_WORKFLOW[activeStepIndex].metric}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

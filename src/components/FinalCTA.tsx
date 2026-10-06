import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Server } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface FinalCTAProps {
  onOpenDemo: (mode?: 'demo' | 'trial') => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDemo }) => {
  const handlePrimary = () => {
    trackEvent('primary_cta_click', {
      cta_location: 'final_cta_section',
      cta_label: 'Start Your Free Trial',
    });
    onOpenDemo('trial');
  };

  const handleSecondary = () => {
    trackEvent('secondary_cta_click', {
      cta_location: 'final_cta_section',
      cta_label: 'Book a Live Demo',
    });
    onOpenDemo('demo');
  };

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #1d4ed8 0%, transparent 65%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
          <span>Get Started Today</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>14-Day Free Evaluation</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight" style={{ textWrap: 'balance' }}>
          Ready to Bring Your Support Workflow Together?
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Explore how Faveo can help your team organise requests, streamline workflows and improve support visibility. Available on managed cloud or installed in your private infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={handlePrimary}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Start Your Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleSecondary}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            Book a Live Demo
          </button>
        </div>

        {/* Verified Reassurances */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            14-day free trial
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <Server className="w-4 h-4 text-blue-400 shrink-0" />
            Cloud SaaS or On-Premise Self-Hosted
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            Full data ownership
          </span>
        </div>
      </div>
    </section>
  );
};

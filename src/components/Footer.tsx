import React from 'react';

interface FooterProps {
  onOpenDemo: (mode?: 'demo' | 'trial') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        {/* Brand & Mission Row (Middle link columns removed as requested in Image 5) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900 text-center md:text-left">
          <div className="space-y-3">
            <a href="/" className="inline-flex items-center gap-2 group text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
                F
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Faveo <span className="text-blue-500 font-semibold">Helpdesk</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Unified helpdesk ticketing and SLA management software built for modern customer operations and high-compliance IT departments.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenDemo('demo')}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
            >
              Book a Live Demo
            </button>
            <button
              onClick={() => onOpenDemo('trial')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
            >
              Start Free 14-Day Trial
            </button>
          </div>
        </div>

        {/* Bottom Bar: Attribution, Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left space-y-1">
            <div>© {new Date().getFullYear()} Ladybird Web Solution Pvt. Ltd. All rights reserved. Faveo is a registered trademark.</div>
            <div className="text-[11px] text-slate-600">Available as Managed Cloud or Self-Hosted On-Premise.</div>
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Security Practices</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

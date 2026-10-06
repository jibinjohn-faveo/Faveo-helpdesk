import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface HeaderProps {
  onOpenDemo: (mode?: 'demo' | 'trial') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = (mode: 'trial' | 'demo', location: string) => {
    trackEvent(mode === 'trial' ? 'trial_registration_click' : 'secondary_cta_click', {
      cta_location: location,
      cta_label: mode === 'trial' ? 'Start Free Trial' : 'Book a Demo',
    });
    if (mode === 'demo') {
      const demoEl = document.getElementById('demo');
      if (demoEl) {
        demoEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    onOpenDemo(mode);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Element Wordmark */}
          <a
            href="/"
            className="flex items-center gap-2 group text-slate-900 transition-opacity hover:opacity-95"
            aria-label="Faveo Helpdesk Home"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              F
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Faveo <span className="font-semibold text-blue-600">Helpdesk</span>
            </span>
          </a>

          {/* Primary Action Buttons (Center nav links removed as requested in Image 6) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleCtaClick('demo', 'header_desktop')}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              Book a Demo
            </button>
            <button
              onClick={() => handleCtaClick('trial', 'header_desktop')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

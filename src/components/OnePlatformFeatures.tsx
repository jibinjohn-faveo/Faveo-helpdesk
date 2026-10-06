import React, { useState } from 'react';
import {
  Workflow,
  BookOpen,
  Award,
  Network,
  Cpu,
  Share2,
  Smartphone,
  Blocks,
  BarChart4,
  Coins,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { ONE_PLATFORM_FEATURES } from '../data/faveoData';

interface OnePlatformFeaturesProps {
  onOpenDemo: (mode?: 'demo' | 'trial') => void;
}

export const OnePlatformFeatures: React.FC<OnePlatformFeaturesProps> = ({ onOpenDemo }) => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'automation-rules':
        return <Workflow className="w-8 h-8 text-sky-500" />;
      case 'knowledge-base':
        return <BookOpen className="w-8 h-8 text-sky-500" />;
      case 'sla-management':
        return <Award className="w-8 h-8 text-sky-500" />;
      case 'omnichannel-support':
        return <Network className="w-8 h-8 text-sky-500" />;
      case 'ai-powered-automation':
        return <Cpu className="w-8 h-8 text-sky-500" />;
      case 'third-party-integrations':
        return <Share2 className="w-8 h-8 text-sky-500" />;
      case 'mobile-friendly-access':
        return <Smartphone className="w-8 h-8 text-sky-500" />;
      case 'addons-extensions':
        return <Blocks className="w-8 h-8 text-sky-500" />;
      case 'advanced-reports':
        return <BarChart4 className="w-8 h-8 text-sky-500" />;
      case 'scalable-cost-effective':
        return <Coins className="w-8 h-8 text-sky-500" />;
      default:
        return <Sparkles className="w-8 h-8 text-sky-500" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header exact match to Image 3 */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
            One platform. All support channels. Zero chaos.
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Faveo brings your entire help desk system, support ticketing system, and omnichannel support software into one place — so teams respond faster, track smarter, and scale without missing a beat.
          </p>
        </div>

        {/* 10 Feature Cards Grid matching Image 3 & 4 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ONE_PLATFORM_FEATURES.map((feat) => {
            const isHovered = activeFeature === feat.id;
            return (
              <div
                key={feat.id}
                onMouseEnter={() => setActiveFeature(feat.id)}
                onMouseLeave={() => setActiveFeature(null)}
                onClick={() => onOpenDemo('demo')}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col items-center text-center justify-between min-h-[220px] ${
                  isHovered
                    ? 'bg-blue-50/60 border-blue-400 shadow-md -translate-y-1'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    {getFeatureIcon(feat.id)}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-3 text-[11px] font-semibold text-blue-600 flex items-center gap-1 opacity-90">
                  <span>Explore feature</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

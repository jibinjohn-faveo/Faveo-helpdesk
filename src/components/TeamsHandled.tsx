import React from 'react';
import { Rocket, Building2, ShoppingBag, HeartPulse, Factory, ArrowRight } from 'lucide-react';
import { TEAMS_HANDLED } from '../data/faveoData';

interface TeamsHandledProps {
  onOpenDemo: (mode?: 'demo' | 'trial') => void;
}

export const TeamsHandled: React.FC<TeamsHandledProps> = ({ onOpenDemo }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'startups':
        return <Rocket className="w-8 h-8 text-sky-500" />;
      case 'enterprises':
        return <Building2 className="w-8 h-8 text-sky-500" />;
      case 'ecommerce-saas':
        return <ShoppingBag className="w-8 h-8 text-sky-500" />;
      case 'healthcare':
        return <HeartPulse className="w-8 h-8 text-sky-500" />;
      case 'other-industries':
        return <Factory className="w-8 h-8 text-sky-500" />;
      default:
        return <Building2 className="w-8 h-8 text-sky-500" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header exact match to Image 6 */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
            Built for every team that handles support
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether it’s customers, IT ops, or MSPs — Faveo keeps support fast, tracked, and structured.
          </p>
        </div>

        {/* 5 Column Grid matching Image 6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {TEAMS_HANDLED.map((team) => (
            <div
              key={team.id}
              onClick={() => onOpenDemo('demo')}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-400 hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center justify-between space-y-4"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                  {getIcon(team.id)}
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {team.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {team.description}
                </p>
              </div>

              <div className="text-[11px] font-semibold text-blue-600 flex items-center gap-1 pt-2">
                <span>View workflow</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import {
  Ticket,
  Bot,
  Cog,
  TrendingUp,
  Puzzle,
  CloudCog,
  ArrowRight,
} from 'lucide-react';

interface SmarterChoiceProps {
  onOpenDemo?: (mode?: 'demo' | 'trial') => void;
}

export const SmarterChoice: React.FC<SmarterChoiceProps> = ({ onOpenDemo }) => {
  const items = [
    {
      id: 'centralized-ticket',
      title: 'Centralized Ticket Management',
      description: 'Handle all support requests from one place.',
      icon: <Ticket className="w-8 h-8 text-sky-500" />,
    },
    {
      id: 'ai-elea',
      title: 'AI-Powered Support with Elea',
      description: 'Get intelligent suggestions for quicker resolutions.',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
          AI
        </div>
      ),
      isHighlight: true,
    },
    {
      id: 'automated-task',
      title: 'Automated Task Handling',
      description: 'Eliminate repetitive tasks and save time.',
      icon: <Cog className="w-8 h-8 text-sky-500" />,
    },
    {
      id: 'scalable-growth',
      title: 'Scalable for Growth',
      description: 'Easily expand support as your business grows.',
      icon: <TrendingUp className="w-8 h-8 text-sky-500" />,
    },
    {
      id: 'customizable-workflows',
      title: 'Customizable Workflows',
      description: 'Adapt workflows to fit your team’s needs and boost productivity.',
      icon: <Puzzle className="w-8 h-8 text-amber-500" />,
    },
    {
      id: 'cloud-onpremise',
      title: 'Cloud or On-Premise Flexibility',
      description: 'Choose the deployment model that suits your setup.',
      icon: <CloudCog className="w-8 h-8 text-sky-500" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header exact match to Image 6 */}
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
            What Makes Faveo Helpdesk a Smarter Choice?
          </h2>
        </div>

        {/* 2-Column Grid with 6 items matching Image 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-left">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenDemo && onOpenDemo('demo')}
              className={`flex items-start gap-4 p-5 rounded-2xl border transition-all cursor-pointer ${
                item.isHighlight
                  ? 'bg-blue-50/50 border-blue-200 shadow-2xs hover:border-blue-400'
                  : 'bg-white border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
              }`}
            >
              <div className="p-2 rounded-xl shrink-0 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

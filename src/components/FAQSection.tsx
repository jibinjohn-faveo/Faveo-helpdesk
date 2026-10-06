import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faveoData';
import { trackEvent } from '../utils/analytics';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Product', 'Deployment', 'SLA & Automation', 'Pricing & Trials'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: string, question: string) => {
    const isNowOpen = openId !== id;
    setOpenId(isNowOpen ? id : null);
    if (isNowOpen) {
      trackEvent('faq_expand', { faq_id: id, question_text: question });
    }
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Everything You Need to Know About Faveo Helpdesk
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Clear, verified answers regarding product capabilities, self-hosting requirements, security compliance, and migration pathways.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions (e.g. self-hosted, SLA, LDAP, trial)..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-900 placeholder:text-slate-400"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 divide-y divide-slate-100">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="pt-3">
                  <button
                    onClick={() => toggleFAQ(faq.id, faq.question)}
                    className="w-full py-4 text-left flex items-start justify-between gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 mt-0.5 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="pb-4 pr-6 text-sm text-slate-600 leading-relaxed space-y-2 text-left"
                    >
                      <p>{faq.answer}</p>
                      <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                        <span className="font-semibold text-slate-600">Category:</span>
                        <span>{faq.category}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-sm text-slate-500">
              No matching questions found for "{searchQuery}". Try searching for terms like "trial", "hosting", or "SLA".
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

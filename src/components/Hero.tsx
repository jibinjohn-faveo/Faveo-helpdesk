import React, { useState } from 'react';
import {
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertTriangle,
  User,
  Tag,
  Shield,
  Layers,
  Sparkles,
  Send,
  Eye,
  CornerDownRight,
  Bot,
  TrendingUp,
  BarChart3,
  Inbox,
  Flame,
  Check,
  RefreshCw,
  Sliders,
  ChevronRight,
  Smile,
  Frown,
} from 'lucide-react';
import { HERO_SAMPLE_TICKETS } from '../data/faveoData';
import { Ticket } from '../types';
import { trackEvent } from '../utils/analytics';

interface HeroProps {
  onOpenDemo: (mode?: 'demo' | 'trial') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const [dashboardTab, setDashboardTab] = useState<'ai_copilot' | 'analytics' | 'queue'>('ai_copilot');
  const [selectedTicket, setSelectedTicket] = useState<Ticket>(HERO_SAMPLE_TICKETS[0]);
  const [aiDraftStatus, setAiDraftStatus] = useState<'ready' | 'approved' | 'regenerating'>('ready');
  const [draftTone, setDraftTone] = useState<'technical' | 'empathetic'>('technical');

  const getAiDraftText = (ticket: Ticket, tone: 'technical' | 'empathetic') => {
    const firstName = ticket.requester.split(' ')[0];
    if (tone === 'empathetic') {
      return `Hi ${firstName},\n\nWe understand how critical this issue is for your operations and sincerely apologize for the disruption. Our senior infrastructure team is actively deployed on this right now. We have applied a temporary mitigation to normalize response times and are monitoring the service closely.`;
    }
    return `Hello ${firstName},\n\nOur automated telemetry identified the 504 gateway timeout on webhook ingress. Engineering has pushed an active connection-pooling patch and latency has normalized under 120ms. Full incident post-mortem will be posted shortly.`;
  };

  const handleApproveDraft = () => {
    setAiDraftStatus('approved');
    setTimeout(() => {
      setAiDraftStatus('ready');
    }, 2500);
  };

  const handleRegenerate = () => {
    setAiDraftStatus('regenerating');
    setTimeout(() => {
      setDraftTone(draftTone === 'technical' ? 'empathetic' : 'technical');
      setAiDraftStatus('ready');
    }, 400);
  };

  const handlePrimaryCta = () => {
    trackEvent('primary_cta_click', {
      cta_location: 'hero_primary',
      cta_label: 'Start Your Free Trial',
    });
    onOpenDemo('trial');
  };

  const handleSecondaryCta = () => {
    trackEvent('secondary_cta_click', {
      cta_location: 'hero_secondary',
      cta_label: 'Book a Live Demo',
    });
    const demoEl = document.getElementById('demo');
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenDemo('demo');
    }
  };

  return (
    <section id="overview" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-slate-50 border-b border-slate-200/80">
      {/* Subtle architectural background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Messaging & Conversion */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Unboxed clean metadata kicker (anti-slop: no generic pill enclosure, PHP/Laravel removed) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <span>Faveo Helpdesk Platform</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>AI-Powered</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Cloud & Self-Hosted</span>
            </div>

            {/* Title with AI-powered helpdesk explicitly integrated */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              Resolve Support Tickets Faster with an AI-Powered Helpdesk
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Bring support requests into one organised workspace, automate repetitive triage with intelligent AI assistance, track service-level agreements and help your team deliver consistent customer support.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={handlePrimaryCta}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
              >
                <span>Start Your Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleSecondaryCta}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-100 hover:text-slate-900 border border-slate-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                Book a Live Demo
              </button>
            </div>

            {/* Reassurance statement */}
            <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                14-day free trial
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Available as Cloud SaaS or On-Premise
              </span>
            </div>
          </div>

          {/* Right Column: Brand New AI-Powered Command Center Dashboard */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden text-left">
              {/* Dashboard Master Top Bar */}
              <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-200 tracking-wide">
                      Faveo AI Support Console
                    </span>
                    <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-400/30 px-1.5 py-0.5 rounded font-mono font-medium">
                      AI Assist Live
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    SLA Protected (99.2%)
                  </span>
                  <span className="hidden sm:inline text-slate-600">|</span>
                  <span className="hidden sm:inline text-slate-400">v2026 Enterprise</span>
                </div>
              </div>

              {/* View Switcher Bar */}
              <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1 bg-slate-200/60 p-0.5 rounded-lg">
                  <button
                    onClick={() => setDashboardTab('ai_copilot')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                      dashboardTab === 'ai_copilot'
                        ? 'bg-white text-blue-700 shadow-2xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Bot className="w-3.5 h-3.5 text-blue-600" />
                    <span>AI Copilot & Triage</span>
                  </button>
                  <button
                    onClick={() => setDashboardTab('analytics')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                      dashboardTab === 'analytics'
                        ? 'bg-white text-blue-700 shadow-2xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Live Operations KPI</span>
                  </button>
                  <button
                    onClick={() => setDashboardTab('queue')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1.5 hidden sm:flex ${
                      dashboardTab === 'queue'
                        ? 'bg-white text-blue-700 shadow-2xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Inbox className="w-3.5 h-3.5 text-blue-600" />
                    <span>Omnichannel Queue</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>94% AI Triage Confidence</span>
                </div>
              </div>

              {/* DASHBOARD VIEW 1: AI COPILOT & SMART TRIAGE */}
              {dashboardTab === 'ai_copilot' && (
                <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200 min-h-[420px]">
                  {/* Left: Interactive Tickets Feed with AI Badges */}
                  <div className="md:col-span-5 bg-slate-50/70 overflow-y-auto max-h-[440px]">
                    <div className="p-2.5 bg-slate-100/70 border-b border-slate-200 text-[11px] font-semibold text-slate-600 flex items-center justify-between">
                      <span>Incoming Requests (4)</span>
                      <span className="text-blue-700 font-mono">Real-Time Stream</span>
                    </div>
                    {HERO_SAMPLE_TICKETS.map((t) => {
                      const isSelected = t.id === selectedTicket.id;
                      return (
                        <div
                          key={t.id}
                          onClick={() => {
                            setSelectedTicket(t);
                            setAiDraftStatus('ready');
                          }}
                          className={`p-3 border-b border-slate-200 transition-colors cursor-pointer text-left ${
                            isSelected
                              ? 'bg-blue-50/80 border-l-4 border-l-blue-600'
                              : 'hover:bg-slate-100 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between text-[11px] mb-1">
                            <span className="font-mono font-bold text-slate-800">{t.id}</span>
                            <span className="text-slate-400 font-medium">{t.lastUpdated}</span>
                          </div>
                          <h4 className="text-xs font-semibold text-slate-900 line-clamp-1 mb-1">
                            {t.subject}
                          </h4>
                          <div className="flex items-center justify-between text-[10px] mt-2">
                            <span className="bg-blue-100 text-blue-800 font-semibold px-1.5 py-0.5 rounded">
                              AI Intent: {t.department.split(' ')[0]}
                            </span>
                            <span className="font-mono text-slate-600 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-slate-400" />
                              {t.slaDue}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Right: AI Copilot Workbench & Suggested Resolution */}
                  <div className="md:col-span-7 p-4 bg-white flex flex-col justify-between space-y-3">
                    <div className="space-y-3">
                      {/* Real-Time AI Intelligence Header Card */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50/60 border border-blue-200/80 rounded-xl p-3 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-blue-900 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                            AI Incident Classification
                          </span>
                          <span className="text-[11px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-bold">
                            98% Confidence Match
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700">
                          <div>
                            <span className="text-slate-400 block text-[10px]">Sentiment Tone:</span>
                            <span className="font-semibold text-rose-700 flex items-center gap-1">
                              <Frown className="w-3 h-3" />
                              Urgent / Frustrated (-0.68)
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[10px]">Predicted Root Cause:</span>
                            <span className="font-semibold text-slate-900">
                              Gateway Latency Spikes
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Active Ticket Context */}
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-slate-500 mb-0.5">
                          <span className="font-mono font-bold text-slate-800">{selectedTicket.id}</span>
                          <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 font-medium">
                            Channel: {selectedTicket.channel}
                          </span>
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">
                          {selectedTicket.subject}
                        </h3>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          From: {selectedTicket.requester}
                        </p>
                      </div>

                      {/* AI Generated Resolution Box */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-800 flex items-center gap-1 text-[11px]">
                            <Bot className="w-3.5 h-3.5 text-blue-600" />
                            AI Suggested Resolution Draft
                          </span>
                          <button
                            onClick={handleRegenerate}
                            className="text-[11px] text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 cursor-pointer"
                          >
                            <RefreshCw className={`w-3 h-3 ${aiDraftStatus === 'regenerating' ? 'animate-spin' : ''}`} />
                            <span>Tone: {draftTone === 'technical' ? 'Technical' : 'Empathetic'}</span>
                          </button>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-800 leading-relaxed font-normal whitespace-pre-line min-h-[90px]">
                          {getAiDraftText(selectedTicket, draftTone)}
                        </div>

                        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
                          <span className="flex items-center gap-1">
                            <Shield className="w-3 h-3 text-emerald-600" />
                            Knowledge Base grounded · No hallucinations
                          </span>
                          <span className="text-slate-400">Agent approval required</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500">
                        Assignee: <strong className="text-slate-800">{selectedTicket.assignedAgent}</strong>
                      </span>

                      <button
                        onClick={handleApproveDraft}
                        disabled={aiDraftStatus === 'approved'}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg shadow-2xs transition-all cursor-pointer ${
                          aiDraftStatus === 'approved'
                            ? 'bg-emerald-600 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                      >
                        {aiDraftStatus === 'approved' ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Approved & Sent</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Approve & Send (1-Click)</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* DASHBOARD VIEW 2: LIVE OPERATIONS KPI & ANALYTICS */}
              {dashboardTab === 'analytics' && (
                <div className="p-5 space-y-5 bg-white min-h-[420px]">
                  {/* Top 4 KPI Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold block">
                        AI Deflection Rate
                      </span>
                      <div className="text-lg font-bold text-slate-900 font-mono mt-1">42.8%</div>
                      <span className="text-[10px] text-emerald-600 font-medium">↑ 14% vs last month</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold block">
                        First Response Time
                      </span>
                      <div className="text-lg font-bold text-slate-900 font-mono mt-1">3m 48s</div>
                      <span className="text-[10px] text-emerald-600 font-medium">↓ 68% with AI Copilot</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold block">
                        SLA Adherence
                      </span>
                      <div className="text-lg font-bold text-emerald-600 font-mono mt-1">99.2%</div>
                      <span className="text-[10px] text-slate-500 font-medium">Zero critical breaches</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold block">
                        CSAT Score
                      </span>
                      <div className="text-lg font-bold text-blue-700 font-mono mt-1">4.9 / 5.0</div>
                      <span className="text-[10px] text-slate-500 font-medium">1,120 ratings</span>
                    </div>
                  </div>

                  {/* Hourly Inflow vs AI Resolution Visual Bar */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900">Real-Time Ticket Throughput & AI Triage (Today)</span>
                      <span className="text-slate-500 text-[11px]">Updated every 60s</span>
                    </div>

                    {/* Simulated throughput bars */}
                    <div className="grid grid-cols-8 gap-2 items-end h-24 pt-4 px-2">
                      {[
                        { hour: '09:00', total: 40, ai: 28 },
                        { hour: '11:00', total: 68, ai: 52 },
                        { hour: '13:00', total: 85, ai: 69 },
                        { hour: '15:00', total: 92, ai: 78 },
                        { hour: '17:00', total: 74, ai: 60 },
                        { hour: '19:00', total: 55, ai: 44 },
                        { hour: '21:00', total: 38, ai: 31 },
                        { hour: '23:00', total: 22, ai: 19 },
                      ].map((bar, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 h-full justify-end">
                          <div className="w-full bg-slate-200 rounded-t relative overflow-hidden" style={{ height: `${bar.total}%` }}>
                            <div className="w-full bg-blue-600 absolute bottom-0 left-0 rounded-t" style={{ height: `${(bar.ai / bar.total) * 100}%` }} />
                          </div>
                          <span className="text-[9px] text-slate-400 font-mono">{bar.hour}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-200">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded bg-blue-600" />
                          AI Automated Triage & Deflected (78%)
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded bg-slate-300" />
                          Human Agent Follow-up (22%)
                        </span>
                      </div>
                      <span className="text-blue-700 font-semibold cursor-pointer" onClick={() => onOpenDemo('demo')}>
                        Export CSV →
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* DASHBOARD VIEW 3: OMNICHANNEL QUEUE */}
              {dashboardTab === 'queue' && (
                <div className="p-4 bg-white min-h-[420px] text-left space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 text-xs text-slate-600">
                    <span className="font-bold text-slate-900">Active Omnichannel Queue (1,284 Total)</span>
                    <span className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                      Filtered: All Open
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    {HERO_SAMPLE_TICKETS.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors flex items-center justify-between"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-slate-800">{item.id}</span>
                            <span className="text-[10px] bg-blue-100 text-blue-800 font-semibold px-1.5 py-0.5 rounded">
                              {item.channel}
                            </span>
                            <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                              item.priority === 'Emergency' ? 'bg-rose-100 text-rose-800' : 'bg-slate-200 text-slate-800'
                            }`}>
                              {item.priority}
                            </span>
                          </div>
                          <div className="font-semibold text-slate-900">{item.subject}</div>
                          <div className="text-[11px] text-slate-500">{item.requester}</div>
                        </div>

                        <div className="text-right space-y-1">
                          <span className="font-mono text-[11px] text-slate-700 block font-semibold">
                            {item.slaDue}
                          </span>
                          <span className="text-[10px] text-slate-400 block">
                            Assigned: {item.assignedAgent.split(' ')[0]}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex justify-between items-center text-xs text-slate-500">
                    <span>Showing 4 of 24 active high-priority queues</span>
                    <button
                      onClick={() => onOpenDemo('demo')}
                      className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
                    >
                      View Live Support Sandbox →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

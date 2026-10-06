import React from 'react';
import {
  MessageSquare,
  Search,
  Key,
  Smartphone,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Clock,
  Send,
  Sliders,
  Shield,
  Bot,
  User,
} from 'lucide-react';

interface FeatureSectionsProps {
  onOpenDemo: (mode?: 'demo' | 'trial') => void;
}

export const FeatureSections: React.FC<FeatureSectionsProps> = ({ onOpenDemo }) => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {/* ========================================================= */}
        {/* FEATURE 1: Omni-Channel Integration Support (Image 1) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: UI Showcase (Config Screen + Floating Tickets Overlay) */}
          <div className="lg:col-span-6 relative">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 shadow-xl overflow-hidden text-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-semibold text-white ml-2 text-[11px]">FAVEO · Additional Configurations</span>
                </div>
                <span className="text-[10px] text-blue-400 font-mono">Omni-Channel Engine</span>
              </div>

              {/* Grid of Configuration Channels */}
              <div className="bg-white rounded-xl p-4 my-2 text-slate-900">
                <span className="text-xs font-bold text-slate-800 block mb-3">Integrations & Channel Endpoints</span>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 text-center text-[10px] font-semibold text-slate-700">
                  {[
                    { label: 'Time Track', color: 'bg-blue-50 text-blue-600', icon: '⏱' },
                    { label: 'Chat', color: 'bg-sky-50 text-sky-600', icon: '💬' },
                    { label: 'LDAP', color: 'bg-indigo-50 text-indigo-600', icon: '👤' },
                    { label: 'Custom JS', color: 'bg-amber-50 text-amber-600', icon: 'JS' },
                    { label: 'Facebook', color: 'bg-blue-100 text-blue-700', icon: 'f' },
                    { label: 'WhatsApp', color: 'bg-emerald-50 text-emerald-600', icon: '✆' },
                    { label: 'Azure AD', color: 'bg-sky-100 text-sky-700', icon: '☁' },
                    { label: 'Custom CSS', color: 'bg-blue-50 text-blue-600', icon: 'CSS' },
                    { label: 'Approval', color: 'bg-slate-100 text-slate-700', icon: '✓' },
                    { label: 'Slack', color: 'bg-purple-50 text-purple-700', icon: '#' },
                    { label: 'Instagram', color: 'bg-rose-50 text-rose-600', icon: '📷' },
                    { label: 'Smart Bonding', color: 'bg-cyan-50 text-cyan-700', icon: '🔗' },
                  ].map((ch, idx) => (
                    <div key={idx} className="p-2 rounded-lg border border-slate-100 hover:border-blue-300 transition-colors flex flex-col items-center gap-1">
                      <div className={`w-7 h-7 rounded-full ${ch.color} flex items-center justify-center text-xs font-bold`}>
                        {ch.icon}
                      </div>
                      <span className="truncate w-full">{ch.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Tickets Preview Overlay matching screenshot */}
              <div className="bg-white rounded-xl border border-slate-200 p-3 shadow-lg text-slate-900 -mt-2 space-y-1.5 text-xs">
                <div className="flex justify-between items-center text-[11px] font-bold text-slate-600 border-b border-slate-100 pb-1">
                  <span>Tickets Feed</span>
                  <span className="text-blue-600">Omni-Channel Stream</span>
                </div>
                <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded text-[11px]">
                  <div>
                    <span className="font-mono font-bold text-slate-800">[#HDSK-AAAA-0104]</span>
                    <span className="text-slate-700 ml-1">New Connection (7)</span>
                  </div>
                  <span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded text-[10px]">Due Today</span>
                </div>
                <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded text-[11px]">
                  <div>
                    <span className="font-mono font-bold text-slate-800">[#HDSK-AAAA-0094]</span>
                    <span className="text-slate-700 ml-1">Connection Fluctuation Issue</span>
                  </div>
                  <span className="bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded text-[10px]">Over due</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content exactly from Image 1 */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Omni-Channel Integration Support
            </h3>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Faveo’s online <span className="text-blue-600 font-semibold">helpdesk software</span> enables seamless communication support across email, live chat, and social media, ensuring customers receive consistent, personalized support on every platform. This unified approach enhances satisfaction and builds lasting relationships.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenDemo('demo')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
              >
                <span>Explore all supported channels</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* FEATURE 2: Knowledge Base Solution Management (Image 2) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text Content exactly from Image 2 */}
          <div className="lg:col-span-6 space-y-5 text-left order-2 lg:order-1">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Knowledge Base Solution Management
            </h3>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Faveo makes knowledge base management easy by bringing everything into one place—from writing and publishing articles to handling feedback. Organize content by brand and topic, store media in the Gallery, and share how-to videos, guides, FAQS, and more to help customers and gather their feedback.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenDemo('demo')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
              >
                <span>See knowledge base in action</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: UI Showcase matching Image 2 screenshot */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden text-left">
              {/* Knowledge Portal Top Nav */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-1 font-bold text-slate-900 text-sm">
                  <span className="text-blue-600 font-extrabold">FAVEO</span>
                  <span className="text-[10px] text-slate-500 font-normal">| Simplifying Customer Support</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <span className="hover:text-blue-600 cursor-pointer">Knowledge Base</span>
                  <span className="hover:text-blue-600 cursor-pointer">Submit Ticket</span>
                </div>
              </div>

              {/* Portal Search Box */}
              <div className="bg-gradient-to-r from-sky-600 to-blue-700 p-6 text-white text-center space-y-2">
                <span className="text-xs font-semibold text-blue-100 block">Have a question?</span>
                <div className="flex max-w-md mx-auto rounded-lg overflow-hidden shadow-sm">
                  <input
                    type="text"
                    readOnly
                    value="Type your search term here..."
                    className="flex-1 px-4 py-2.5 bg-white text-slate-700 text-xs focus:outline-none"
                  />
                  <button className="bg-teal-500 hover:bg-teal-600 px-5 text-xs font-bold uppercase tracking-wider text-white">
                    Search
                  </button>
                </div>
              </div>

              {/* Categories Grid matching Image 2 */}
              <div className="p-5 grid grid-cols-2 gap-4 text-xs">
                {/* Category 1 */}
                <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between font-bold text-slate-900 text-[11px]">
                    <span className="flex items-center gap-1">📁 Uncategorized</span>
                    <span className="text-slate-400 font-mono">(6)</span>
                  </div>
                  <ul className="text-[10px] text-slate-600 space-y-1">
                    <li className="truncate hover:text-blue-600 cursor-pointer">• Enhancing Security with reCAPTCHA</li>
                    <li className="truncate hover:text-blue-600 cursor-pointer">• Data Security in Faveo</li>
                    <li className="truncate hover:text-blue-600 cursor-pointer">• Introduction to Faveo Cloud</li>
                  </ul>
                </div>

                {/* Category 2 */}
                <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between font-bold text-slate-900 text-[11px]">
                    <span className="flex items-center gap-1">📁 Pre-releases</span>
                    <span className="text-slate-400 font-mono">(6)</span>
                  </div>
                  <ul className="text-[10px] text-slate-600 space-y-1">
                    <li className="truncate hover:text-blue-600 cursor-pointer">• Faveo Servicedesk Notes v9.4</li>
                    <li className="truncate hover:text-blue-600 cursor-pointer">• Network Discovery v1.0.2</li>
                    <li className="truncate hover:text-blue-600 cursor-pointer">• Multi-Tenant Architecture</li>
                  </ul>
                </div>

                {/* Category 3 */}
                <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between font-bold text-slate-900 text-[11px]">
                    <span className="flex items-center gap-1">📁 Official Releases</span>
                    <span className="text-slate-400 font-mono">(6)</span>
                  </div>
                  <ul className="text-[10px] text-slate-600 space-y-1">
                    <li className="truncate hover:text-blue-600 cursor-pointer">• Faveo Helpdesk Release v9.4</li>
                    <li className="truncate hover:text-blue-600 cursor-pointer">• Core Security Patches</li>
                  </ul>
                </div>

                {/* Category 4 */}
                <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between font-bold text-slate-900 text-[11px]">
                    <span className="flex items-center gap-1">📁 Asset Management</span>
                    <span className="text-slate-400 font-mono">(6)</span>
                  </div>
                  <ul className="text-[10px] text-slate-600 space-y-1">
                    <li className="truncate hover:text-blue-600 cursor-pointer">• How to Monitor Assets</li>
                    <li className="truncate hover:text-blue-600 cursor-pointer">• Agent Software Setup</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* FEATURE 3: Third-Party Integrations (Image 3) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: UI Showcase matching Image 3 screenshot */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-4 shadow-xl text-left text-white space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">Admin Panel / Third Party Apps</span>
                <span className="text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded text-[10px] font-bold">Enabled</span>
              </div>

              {/* Form Input Representation */}
              <div className="bg-white rounded-xl p-4 text-slate-900 space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase">App Name*</label>
                    <div className="bg-slate-50 border border-slate-200 rounded p-1.5 text-[11px] font-mono text-slate-800">
                      DemoOAuthApp
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase">App ID*</label>
                    <div className="bg-slate-50 border border-slate-200 rounded p-1.5 text-[11px] font-mono text-slate-500 truncate">
                      a1b2c3d4-5678-90ef...
                    </div>
                  </div>
                </div>

                {/* Attribute Mapping Table */}
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <div className="bg-slate-100 p-2 text-[10px] font-bold text-slate-700 grid grid-cols-2">
                    <span>Faveo Attributes</span>
                    <span>Third-Party Attributes</span>
                  </div>
                  <div className="divide-y divide-slate-100 text-[10px] text-slate-600 p-1">
                    <div className="grid grid-cols-2 py-1 px-1">
                      <span className="font-medium text-slate-800">Username</span>
                      <span className="font-mono text-blue-600">preferred_username</span>
                    </div>
                    <div className="grid grid-cols-2 py-1 px-1">
                      <span className="font-medium text-slate-800">Email</span>
                      <span className="font-mono text-blue-600">email</span>
                    </div>
                    <div className="grid grid-cols-2 py-1 px-1">
                      <span className="font-medium text-slate-800">Mobile</span>
                      <span className="font-mono text-blue-600">phone_number</span>
                    </div>
                    <div className="grid grid-cols-2 py-1 px-1">
                      <span className="font-medium text-slate-800">Role</span>
                      <span className="font-mono text-blue-600">user_role</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Bi-directional Attribute Sync
                  </span>
                  <span className="text-blue-600 font-semibold">REST API Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content exactly from Image 3 */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Third-Party Integrations
            </h3>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Connect effortlessly with your essential business tools. Faveo Helpdesk Software enables smooth integration with third-party applications, helping you manage support operations more efficiently. Whether it’s automating routine tasks or enhancing team collaboration, you can boost productivity by connecting your helpdesk with the tools you already use.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenDemo('demo')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
              >
                <span>View integration directory</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* FEATURE 4: Mobile-Friendly & Responsive Design (Image 4) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text Content exactly from Image 4 */}
          <div className="lg:col-span-6 space-y-5 text-left order-2 lg:order-1">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Mobile-Friendly & Responsive Design
            </h3>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Faveo is built with a responsive design that works seamlessly on both Android and iOS devices. Whether you’re on the move or working remotely, you can access tickets, respond to customers, track progress, and stay connected with your team—anytime, anywhere. Deliver uninterrupted support, wherever you are.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenDemo('demo')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
              >
                <span>Test mobile responsive view</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: UI Showcase matching Image 4 screenshot */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative flex justify-center items-center">
              {/* Desktop Window in Background */}
              <div className="w-full bg-slate-900 rounded-2xl border border-slate-800 p-4 shadow-lg text-left opacity-90">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
                  <span className="font-semibold text-white">Dashboard / Tickets</span>
                  <span>Desktop Workspace</span>
                </div>
                <div className="bg-white rounded-lg p-3 text-slate-800 space-y-2 mt-2">
                  <div className="flex justify-between items-center text-[10px] text-slate-500">
                    <span className="font-bold text-slate-800">[#HDSK-AAAA-0104]</span>
                    <span className="bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded">Due Today</span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-700">Auto Login Issue (4) · Sarfraz Admin</div>
                </div>
              </div>

              {/* Mobile Phone Mockup in Foreground */}
              <div className="absolute w-52 sm:w-60 bg-slate-950 border-4 border-slate-800 rounded-3xl p-3 shadow-2xl text-left text-white -bottom-4 right-4 sm:right-10">
                <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-2" />
                <div className="bg-slate-900 rounded-2xl p-2.5 space-y-2 border border-slate-800 text-xs">
                  <div className="flex justify-between items-center text-[10px] text-slate-400">
                    <span className="font-bold text-white">Mobile Queue</span>
                    <span className="text-emerald-400 font-bold">Live Sync</span>
                  </div>

                  <div className="bg-slate-800 p-2 rounded-lg text-[10px] space-y-1">
                    <div className="flex justify-between">
                      <span className="font-bold text-blue-300">#0098</span>
                      <span className="text-amber-400 font-bold">Due Today</span>
                    </div>
                    <div className="text-slate-200">Connection Fluctuation</div>
                  </div>

                  <div className="bg-slate-800 p-2 rounded-lg text-[10px] space-y-1">
                    <div className="flex justify-between">
                      <span className="font-bold text-blue-300">#0094</span>
                      <span className="text-rose-400 font-bold">Over Due</span>
                    </div>
                    <div className="text-slate-200">Internet Slow (5)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* FEATURE 5: Reporting & Analytics (Image 5) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: UI Showcase matching Image 5 screenshot */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5 text-left space-y-4">
              <div className="border-b border-slate-100 pb-2 flex justify-between items-center text-xs">
                <span className="font-bold text-slate-900">Reports / Helpdesk Analysis</span>
                <span className="text-[10px] text-slate-500 font-mono">Real-Time BI</span>
              </div>

              {/* Grid of Report Widgets matching Image 5 */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-900 text-[11px] block">Helpdesk In-depth</span>
                  <p className="text-[10px] text-slate-500">Comprehensive overview of received & resolved.</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-900 text-[11px] block">Ticket Volume Trends</span>
                  <p className="text-[10px] text-slate-500">Track trends by day, week, month & year.</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-900 text-[11px] block">Management Report</span>
                  <p className="text-[10px] text-slate-500">Executive metrics & resolution time distribution.</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-900 text-[11px] block">Turn Around Time</span>
                  <p className="text-[10px] text-slate-500">SLA performance based on working hours.</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-900 text-[11px] block">Department Velocity</span>
                  <p className="text-[10px] text-slate-500">Cross-department comparison on ticket closure.</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-900 text-[11px] block">CSAT Rating Analysis</span>
                  <p className="text-[10px] text-slate-500">Customer sentiment & feedback scores.</p>
                </div>
              </div>

              {/* Visual mini-chart */}
              <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[11px] text-blue-900 font-bold block">First Response SLA Adherence</span>
                  <span className="text-blue-700 text-[10px]">98.4% within contract SLA this month</span>
                </div>
                <div className="text-right font-mono font-bold text-blue-800 text-sm">
                  18m MTTR
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content exactly from Image 5 */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Reporting & Analytics
            </h3>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Track key metrics like ticket volume, response times, resolution rates, agent performance, and customer satisfaction within your ticketing support system. Generate custom reports, schedule them for regular updates, and visualise data with clear charts and graphs to improve your ticketing support system and deliver better customer experiences.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenDemo('demo')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
              >
                <span>Schedule a reporting walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClientLogos } from './components/ClientLogos';
import { ValuePillars } from './components/ValuePillars';
import { StatsBanner } from './components/StatsBanner';
import { OnePlatformFeatures } from './components/OnePlatformFeatures';
import { LiveDemoSection } from './components/LiveDemoSection';
import { TeamsHandled } from './components/TeamsHandled';
import { FeatureSections } from './components/FeatureSections';
import { SmarterChoice } from './components/SmarterChoice';
import { CustomerStories } from './components/CustomerStories';
import { AccoladesSection } from './components/AccoladesSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoModalMode, setDemoModalMode] = useState<'demo' | 'trial'>('demo');

  const handleOpenDemo = (mode: 'demo' | 'trial' = 'demo') => {
    setDemoModalMode(mode);
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* 1. Header (Clean top bar with logo and CTA actions) */}
      <Header onOpenDemo={handleOpenDemo} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section (AI-Powered Helpdesk Title + AI Command Console) */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* 3. Over 10,000+ Leading Enterprises Trust Faveo */}
        <ClientLogos />

        {/* 4. Customer support teams choose Faveo when reliability and speed matter most */}
        <ValuePillars />

        {/* 5. Stats Milestone Banner (12+ Years, 5000+ Customers, 50+ Team Size, 50+ Countries) */}
        <StatsBanner />

        {/* 6. One platform. All support channels. Zero chaos. (10 Feature Cards Grid) */}
        <OnePlatformFeatures onOpenDemo={handleOpenDemo} />

        {/* 7. What Makes Faveo Helpdesk a Smarter Choice? with Elea AI */}
        <SmarterChoice onOpenDemo={handleOpenDemo} />

        {/* 8. Authentic Faveo Feature Deep-Dives (Omni-Channel, KB, Integrations, Mobile, Analytics) */}
        <FeatureSections onOpenDemo={handleOpenDemo} />

        {/* 9. Built for every team that handles support (5 Industry Segments) */}
        <TeamsHandled onOpenDemo={handleOpenDemo} />

        {/* 10. What Do Our Valuable Customers Say About Us? (Silafrica, Chester, ABK Teknik, Sanveer) */}
        <CustomerStories onOpenDemo={handleOpenDemo} />

        {/* 11. Accolades and Milestones (SoftwareSuggest, Software Advice, Capterra, GetApp) */}
        <AccoladesSection />

        {/* 12. Primary On-Page Conversion Hub: Dual-Mode Demo & Free Trial Form */}
        <LiveDemoSection />

        {/* 13. Searchable FAQ Accordion */}
        <FAQSection />

        {/* 14. Final Conversion Call-to-Action */}
        <FinalCTA onOpenDemo={handleOpenDemo} />
      </main>

      {/* 16. Footer (Streamlined brand and legal footer) */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* 17. Conversion Modal (Exact Image 1 Demo Form & Image 2 Free Trial Form) */}
      <DemoModal
        isOpen={demoModalOpen}
        initialMode={demoModalMode}
        onClose={handleCloseDemo}
      />
    </div>
  );
}

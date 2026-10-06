import React from 'react';
import { Star, ShieldCheck, Server, Globe2, Award, CheckCircle } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-8 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {/* Proof 1: G2 Rating */}
          <div className="pt-3 md:pt-0 flex flex-col items-center md:items-start text-center md:text-left md:px-4">
            <div className="flex items-center gap-1 text-amber-500 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-slate-800 ml-1">4.6 / 5.0</span>
            </div>
            <p className="text-xs font-semibold text-slate-900">High Performer on G2</p>
            <p className="text-[11px] text-slate-500">Verified B2B Helpdesk Software</p>
          </div>

          {/* Proof 2: Capterra Rating */}
          <div className="pt-3 md:pt-0 flex flex-col items-center md:items-start text-center md:text-left md:px-4">
            <div className="flex items-center gap-1 text-amber-500 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-slate-800 ml-1">4.5 / 5.0</span>
            </div>
            <p className="text-xs font-semibold text-slate-900">Capterra Verified</p>
            <p className="text-[11px] text-slate-500">Based on 118+ customer reviews</p>
          </div>

          {/* Proof 3: Deployment Flexibility */}
          <div className="pt-3 md:pt-0 flex flex-col items-center md:items-start text-center md:text-left md:px-4">
            <div className="flex items-center gap-1.5 text-blue-600 mb-1">
              <Server className="w-4 h-4" />
              <span className="text-xs font-bold text-slate-900">Dual Deployment</span>
            </div>
            <p className="text-xs font-semibold text-slate-900">Self-Hosted or Cloud SaaS</p>
            <p className="text-[11px] text-slate-500">Full database & source access</p>
          </div>

          {/* Proof 4: Security & Compliance */}
          <div className="pt-3 md:pt-0 flex flex-col items-center md:items-start text-center md:text-left md:px-4">
            <div className="flex items-center gap-1.5 text-emerald-600 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold text-slate-900">Enterprise Security</span>
            </div>
            <p className="text-xs font-semibold text-slate-900">GDPR & SSO Ready</p>
            <p className="text-[11px] text-slate-500">LDAP, SAML & Active Directory</p>
          </div>
        </div>

        {/* Industry Sector Trust Bar (Verified Enterprise Adoption Sectors) */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <span className="font-semibold text-slate-700 tracking-wide uppercase text-[11px]">
            Trusted across mission-critical sectors:
          </span>
          <div className="flex flex-wrap items-center gap-6 font-medium text-slate-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
              Higher Education & Universities
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
              Healthcare & Clinical Diagnostics
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
              Telecommunications & ISPs
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
              Enterprise IT Service Operations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

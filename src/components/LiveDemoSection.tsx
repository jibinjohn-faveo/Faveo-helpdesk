import React, { useState } from 'react';
import {
  Presentation,
  Sliders,
  Users2,
  Lock,
  CheckCircle2,
  Loader2,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  Sparkles,
  Cloud,
  Server,
} from 'lucide-react';
import { trackEvent, trackUniqueConversion } from '../utils/analytics';

export const LiveDemoSection: React.FC = () => {
  const [formType, setFormType] = useState<'demo' | 'trial'>('demo');
  const [demoDeployment, setDemoDeployment] = useState<'Cloud' | 'On-Premises'>('Cloud');
  const [trialDeployment, setTrialDeployment] = useState<'Cloud' | 'On-Premises'>('Cloud');

  // Shared / Specific Form Fields
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (formType === 'demo') {
      if (!fullName.trim()) errs.fullName = 'Full Name is required';
      if (!phone.trim()) errs.phone = 'Phone number is required';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.trim() || !emailRegex.test(email)) errs.email = 'Valid work email is required';
    } else {
      // Trial Form
      if (!fullName.trim()) errs.fullName = 'Full Name is required';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.trim() || !emailRegex.test(email)) errs.email = 'Business email is required';
      if (!password.trim() || password.length < 6) errs.password = 'Password (min 6 characters) is required';
      if (!phone.trim()) errs.phone = 'Phone number is required';
      if (!company.trim()) errs.company = 'Company name is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    trackEvent(formType === 'demo' ? 'demo_form_start' : 'trial_registration_click', {
      form_source: 'live_demo_section',
      deployment: formType === 'demo' ? demoDeployment : trialDeployment,
    });

    const payload = {
      type: formType,
      fullName,
      phone,
      email,
      company: company || 'Not provided',
      deployment: formType === 'demo' ? demoDeployment : trialDeployment,
      submittedAt: new Date().toISOString(),
      source: 'on_page_form',
    };

    try {
      try {
        await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.log('[On-Page Form Submission Payload]:', payload);
      }

      trackUniqueConversion(formType, `${email}_${Date.now()}`, {
        company_name: company,
        source: 'on_page_section',
        deployment: trialDeployment,
      });

      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrors({});
    setPassword('');
  };

  return (
    <section id="demo" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column matching Image 5 */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Red Pulse Badge */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping" />
              <span>LIVE DEMO &amp; FREE TRIAL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
              Resolve Tickets Faster · Schedule a 30 Minute Live Faveo Demo
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Get a live, personalized walkthrough to see how teams use AI-powered automation to resolve tickets faster, automate workflows, and meet SLAs with ease.
            </p>

            {/* 3 Value Points matching Image 5 */}
            <div className="space-y-6 pt-2">
              {/* Point 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Presentation className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900">
                    Live demo tailored to your support or IT workflow
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    See Faveo configured to match how your support or IT team actually works. No generic walkthroughs, only relevant use cases.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Sliders className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900">
                    See automation, SLAs, and reporting in real use cases
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Watch automation and SLA tracking in action across real scenarios. Understand how reports help teams stay on track and informed.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Users2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900">
                    Ask questions directly to a product expert
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Get real-time answers from a Faveo product expert. Discuss features, use cases, and next steps with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Toggleable Forms (Image 1 Schedule Demo & Image 2 Free Trial) */}
          <div className="lg:col-span-5">
            <div className="space-y-3">
              {/* Form Switcher Pill */}
              <div className="flex bg-slate-200/80 p-1 rounded-xl text-xs font-semibold select-none shadow-2xs">
                <button
                  type="button"
                  onClick={() => {
                    setFormType('demo');
                    handleReset();
                  }}
                  className={`flex-1 py-2 px-3 rounded-lg transition-all cursor-pointer ${
                    formType === 'demo'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  Schedule a Demo
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormType('trial');
                    handleReset();
                  }}
                  className={`flex-1 py-2 px-3 rounded-lg transition-all cursor-pointer ${
                    formType === 'trial'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  14-Day Free Trial
                </button>
              </div>

              {/* Success View */}
              {isSuccess ? (
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-slate-900">
                      {formType === 'demo' ? 'Demo Scheduled!' : 'Trial Account Ready!'}
                    </h4>
                    <p className="text-xs text-slate-600">
                      Thank you, <strong>{fullName}</strong>. A Faveo product specialist will contact you at <strong>{email}</strong> shortly.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : formType === 'demo' ? (
                /* ========================================================================= */
                /* FORM 1: EXACT MATCH TO IMAGE 1 (BLUE CONTAINER, SCHEDULE A DEMO) */
                /* ========================================================================= */
                <div className="bg-[#0D62FE] text-white rounded-2xl p-7 sm:p-9 shadow-2xl text-left space-y-5">
                  <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight text-white leading-tight">
                    See How Faveo Can Work for Your Support Team
                  </h3>

                  {/* Cloud and On-Premise Deployment Selector */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-xs text-blue-100 font-semibold px-0.5">
                      <span>Deployment Option</span>
                      <span className="text-[11px] font-normal text-blue-200">Select model for live demo</span>
                    </div>
                    <div className="flex bg-blue-800/80 p-1 rounded-xl border border-blue-400/30 select-none shadow-inner">
                      <button
                        type="button"
                        onClick={() => setDemoDeployment('Cloud')}
                        className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          demoDeployment === 'Cloud'
                            ? 'bg-white text-blue-800 shadow-xs'
                            : 'text-blue-100 hover:text-white hover:bg-blue-700/40'
                        }`}
                      >
                        <Cloud className="w-3.5 h-3.5" />
                        <span>Cloud SaaS</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setDemoDeployment('On-Premises')}
                        className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          demoDeployment === 'On-Premises'
                            ? 'bg-white text-blue-800 shadow-xs'
                            : 'text-blue-100 hover:text-white hover:bg-blue-700/40'
                        }`}
                      >
                        <Server className="w-3.5 h-3.5" />
                        <span>On-Premises</span>
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name* */}
                    <div>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name*"
                        className="w-full px-4 py-3 bg-white text-slate-900 text-sm rounded-lg focus:outline-none placeholder:text-slate-400 font-normal shadow-2xs"
                      />
                      {errors.fullName && (
                        <span className="text-[11px] text-amber-200 mt-1 block font-semibold">{errors.fullName}</span>
                      )}
                    </div>

                    {/* Phone with Country Code Selector matching Image 1: IN +91 ▾ | Phone* */}
                    <div className="flex bg-white rounded-lg overflow-hidden shadow-2xs">
                      <div className="px-3.5 py-3 bg-[#F1F5F9] text-slate-800 text-xs font-semibold flex items-center gap-1.5 border-r border-slate-200 shrink-0 select-none">
                        <span className="font-bold text-[11px] text-slate-700">IN</span>
                        <span className="text-slate-800 font-bold">+91</span>
                        <span className="text-slate-500 text-[10px]">▾</span>
                      </div>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone*"
                        className="flex-1 px-4 py-3 bg-white text-slate-900 text-sm focus:outline-none placeholder:text-slate-400 font-normal"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-[11px] text-amber-200 mt-1 block font-semibold">{errors.phone}</span>
                    )}

                    {/* Work Email* */}
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Work Email*"
                        className="w-full px-4 py-3 bg-white text-slate-900 text-sm rounded-lg focus:outline-none placeholder:text-slate-400 font-normal shadow-2xs"
                      />
                      {errors.email && (
                        <span className="text-[11px] text-amber-200 mt-1 block font-semibold">{errors.email}</span>
                      )}
                    </div>

                    {/* Company Name (Optional) */}
                    <div>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company Name"
                        className="w-full px-4 py-3 bg-white text-slate-900 text-sm rounded-lg focus:outline-none placeholder:text-slate-400 font-normal shadow-2xs"
                      />
                    </div>

                    {/* Submit Button matching Image 1 */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#0A47B8] hover:bg-[#083b99] active:bg-[#073280] text-white font-bold text-sm tracking-wide rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <span>SCHEDULE A DEMO</span>
                      )}
                    </button>

                    {/* Security & Terms Notes matching Image 1 */}
                    <div className="space-y-1 pt-2 text-center">
                      <div className="flex items-center justify-center gap-1.5 text-xs text-white/95 font-medium">
                        <Lock className="w-3.5 h-3.5 text-white" />
                        <span>Your information is 100% secure</span>
                      </div>
                      <p className="text-[11px] text-white/80">
                        By clicking "Schedule a Demo" you agree to our{' '}
                        <span className="underline hover:text-white cursor-pointer">Terms</span> &amp;{' '}
                        <span className="underline hover:text-white cursor-pointer">Privacy Policy</span>
                      </p>
                    </div>
                  </form>
                </div>
              ) : (
                /* ========================================================================= */
                /* FORM 2: EXACT MATCH TO IMAGE 2 (WHITE CONTAINER, CLOUD / ON-PREMISES TOGGLE) */
                /* ========================================================================= */
                <div className="p-7 sm:p-9 bg-white rounded-2xl border border-slate-200 shadow-2xl text-left space-y-6">
                  {/* Cloud / On-Premises Pill Toggle matching Image 2 */}
                  <div className="flex border border-blue-500 rounded-full p-0.5 w-fit mx-auto select-none">
                    <button
                      type="button"
                      onClick={() => setTrialDeployment('Cloud')}
                      className={`rounded-full px-6 py-1.5 text-sm font-semibold transition-all cursor-pointer ${
                        trialDeployment === 'Cloud'
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Cloud
                    </button>
                    <button
                      type="button"
                      onClick={() => setTrialDeployment('On-Premises')}
                      className={`rounded-full px-6 py-1.5 text-sm font-semibold transition-all cursor-pointer ${
                        trialDeployment === 'On-Premises'
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      On-Premises
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 placeholder:text-slate-400"
                      />
                      {errors.fullName && (
                        <span className="text-[11px] text-rose-500 mt-1 block">{errors.fullName}</span>
                      )}
                    </div>

                    {/* Business email* */}
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Business email*"
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 placeholder:text-slate-400"
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-500 mt-1 block">{errors.email}</span>
                      )}
                    </div>

                    {/* Password* with Eye Toggle Icon */}
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password*"
                        className="w-full pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 placeholder:text-slate-400"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                      {errors.password && (
                        <span className="text-[11px] text-rose-500 mt-1 block">{errors.password}</span>
                      )}
                    </div>

                    {/* Phone row matching Image 2: +91 box | Phone number* box */}
                    <div className="flex border border-slate-200 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-blue-600">
                      <div className="px-3.5 py-2.5 bg-slate-50 text-slate-700 text-sm font-medium border-r border-slate-200 select-none">
                        +91
                      </div>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone number*"
                        className="flex-1 px-4 py-2.5 bg-white text-slate-900 text-sm focus:outline-none placeholder:text-slate-400"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-[11px] text-rose-500 mt-1 block">{errors.phone}</span>
                    )}

                    {/* Company name* */}
                    <div>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company name*"
                        className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 placeholder:text-slate-400"
                      />
                      {errors.company && (
                        <span className="text-[11px] text-rose-500 mt-1 block">{errors.company}</span>
                      )}
                    </div>

                    {/* Footer text exact match to Image 2 */}
                    <div className="text-[11px] text-slate-600 leading-snug pt-1">
                      Based on your IP, you are in <strong>India</strong> and your data will be in <strong>India</strong> data center.
                    </div>

                    {/* Submit Trial Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm tracking-wide rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Creating Trial...</span>
                        </>
                      ) : (
                        <span>START 14-DAY FREE TRIAL</span>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

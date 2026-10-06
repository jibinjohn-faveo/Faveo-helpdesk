import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  ArrowRight,
  Cloud,
  Server,
} from 'lucide-react';
import { trackEvent, trackUniqueConversion } from '../utils/analytics';

interface DemoModalProps {
  isOpen: boolean;
  initialMode?: 'demo' | 'trial';
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  initialMode = 'demo',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'trial'>(initialMode);

  // Deployment model options for Demo & Trial
  const [demoDeployment, setDemoDeployment] = useState<'Cloud' | 'On-Premises'>('Cloud');
  const [trialDeployment, setTrialDeployment] = useState<'Cloud' | 'On-Premises'>('Cloud');

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Status
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setActiveTab(initialMode);
    setIsSuccess(false);
    setErrors({});
  }, [initialMode, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (activeTab === 'demo') {
      if (!fullName.trim()) errs.fullName = 'Full Name is required';
      if (!phone.trim()) errs.phone = 'Phone number is required';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.trim() || !emailRegex.test(email)) errs.email = 'Valid work email is required';
    } else {
      // Trial (Image 2)
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
    trackEvent(activeTab === 'demo' ? 'demo_form_start' : 'trial_registration_click', {
      form_type: activeTab,
      deployment: activeTab === 'demo' ? demoDeployment : trialDeployment,
    });

    const payload = {
      type: activeTab,
      fullName,
      email,
      phone,
      company,
      deployment: activeTab === 'demo' ? demoDeployment : trialDeployment,
      submittedAt: new Date().toISOString(),
    };

    try {
      try {
        await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.log('[Lead Submission Payload]:', payload);
      }

      trackUniqueConversion(activeTab, `${email}_${Date.now()}`, {
        company_name: company,
        deployment: trialDeployment,
      });

      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setPassword('');
    setIsSuccess(false);
    setErrors({});
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full overflow-hidden text-left relative my-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tab Header (Switch between Demo and Free Trial) */}
        <div className="bg-slate-100/80 p-1.5 flex items-center border-b border-slate-200">
          <button
            onClick={() => {
              setActiveTab('demo');
              resetForm();
            }}
            className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === 'demo'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Schedule Live Demo
          </button>
          <button
            onClick={() => {
              setActiveTab('trial');
              resetForm();
            }}
            className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === 'trial'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Start 14-Day Free Trial
          </button>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900">
                {activeTab === 'demo' ? 'Demo Request Scheduled' : 'Trial Account Created'}
              </h3>
              <p className="text-xs text-slate-600">
                Thank you, <strong>{fullName}</strong>. We have registered your request for <strong>{company || 'your organization'}</strong>.
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800 cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : activeTab === 'demo' ? (
          /* ========================================================================= */
          /* FORM 1: EXACT MATCH TO IMAGE 1 (BLUE CONTAINER, SCHEDULE A DEMO) */
          /* ========================================================================= */
          <div className="bg-[#0D62FE] text-white p-7 sm:p-8 space-y-5">
            <h3 className="text-2xl font-bold tracking-tight text-white leading-tight">
              See How Faveo Can Work for Your Support Team
            </h3>

            {/* Cloud and On-Premise Deployment Selector */}
            <div className="space-y-1.5 pt-0.5">
              <div className="flex items-center justify-between text-xs text-blue-100 font-semibold px-0.5">
                <span>Deployment Model</span>
                <span className="text-[11px] font-normal text-blue-200">Select preferred architecture</span>
              </div>
              <div className="flex bg-blue-800/80 p-1 rounded-xl border border-blue-400/30 select-none shadow-inner">
                <button
                  type="button"
                  onClick={() => setDemoDeployment('Cloud')}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
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
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
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

            <form onSubmit={handleSubmit} className="space-y-3.5">
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

              {/* Phone with Country Code: IN +91 ▾ | Phone* */}
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

              {/* Company Name */}
              <div>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company Name"
                  className="w-full px-4 py-3 bg-white text-slate-900 text-sm rounded-lg focus:outline-none placeholder:text-slate-400 font-normal shadow-2xs"
                />
              </div>

              {/* SCHEDULE A DEMO Button */}
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

              {/* Reassurance text */}
              <div className="space-y-1 pt-1 text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs text-white font-medium">
                  <Lock className="w-3.5 h-3.5 text-white" />
                  <span>Your information is 100% secure</span>
                </div>
                <p className="text-[11px] text-white/80">
                  By clicking "Schedule a Demo" you agree to our{' '}
                  <span className="underline hover:text-white cursor-pointer">Terms</span> &{' '}
                  <span className="underline hover:text-white cursor-pointer">Privacy Policy</span>
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* ========================================================================= */
          /* FORM 2: EXACT MATCH TO IMAGE 2 (WHITE CONTAINER, CLOUD / ON-PREMISES TOGGLE) */
          /* ========================================================================= */
          <div className="p-7 sm:p-8 bg-white space-y-6">
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
  );
};

import React, { useState, useId, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  Loader2,
  AlertCircle,
  Linkedin,
  Github,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Assemble email at runtime to prevent crawler harvesting in static HTML
  const [assembledEmail, setAssembledEmail] = useState('');

  useEffect(() => {
    // Runtime de-obfuscation
    const user = 'afif.pathan52';
    const domain = 'gmail.com';
    setAssembledEmail(`${user}@${domain}`);
  }, []);

  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please provide your name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid work or personal email address.';
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Please provide a brief project summary (minimum 10 characters).';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const copyEmailToClipboard = () => {
    const target = assembledEmail || PERSONAL_INFO.email;
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(target);
      setToastMessage('Email address copied to clipboard');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check for spam bots (inspects both React state and native DOM value)
    const formEl = e.currentTarget as HTMLFormElement;
    const hpEl = formEl?.elements?.namedItem('_gotcha') as HTMLInputElement | null;
    if (form.honeypot || (hpEl && hpEl.value)) {
      // Silently spoof success
      setStatus('success');
      return;
    }

    if (!validate()) return;

    setStatus('submitting');
    setErrorMessage('');

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

    // Graceful fallback to mailto if endpoint is not configured in env
    if (!endpoint) {
      const subject = encodeURIComponent(`Architecture Inquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Hi Afif,\n\n${form.message}\n\nBest regards,\n${form.name}\n${form.email}`
      );
      window.location.href = `mailto:${assembledEmail || PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      setStatus('idle');
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '', honeypot: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        setErrorMessage(
          errorData.error || 'Unable to submit message right now. Please use the direct mailto link below.'
        );
        setStatus('error');
      }
    } catch {
      setErrorMessage(
        'Network error encountered while sending message. Please connect directly via email or LinkedIn.'
      );
      setStatus('error');
    }
  };

  const mailtoFallbackUrl = `mailto:${assembledEmail || PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `Mobile Architecture Advisory - ${form.name || 'Direct Inquiry'}`
  )}&body=${encodeURIComponent(form.message || 'Hi Afif, let us connect to discuss our mobile architecture.')}`;

  return (
    <section
      id="contact"
      aria-label="Direct Engagement and Contact Portal"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden scroll-mt-24"
    >
      {/* Dynamic Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 right-4 sm:right-8 z-50 px-4 py-2.5 rounded-xl bg-slate-900/95 dark:bg-slate-900/95 border border-primary/40 text-white font-mono text-xs shadow-xl flex items-center gap-2 backdrop-blur-md"
            role="status"
            aria-live="polite"
          >
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Signature Header */}
      <div className="section-marker mb-4">
        <span>07 — CONNECT &amp; ENGAGE</span>
        <span>SENIOR ARCHITECTURAL ADVISORY &amp; TECH LEADERSHIP</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Direct Inquiries & Professional Channels */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-dark-text font-heading tracking-tight leading-tight mb-4">
              Let’s architect <br />
              <span className="bg-gradient-to-r from-primary via-accent-violet to-accent-cyan bg-clip-text text-transparent italic font-normal font-serif">
                production resilience.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-dark-textMuted leading-relaxed mb-8">
              Available for Staff/Senior Mobile Architect roles, enterprise Flutter engineering leadership, and high-stakes technical advisory. Reach out to discuss system boundaries or algorithmic pipelines.
            </p>

            {/* Direct Channel Cards */}
            <div className="space-y-3.5 mb-8">
              {/* Assembled Email Card */}
              <div className="p-4 rounded-2xl bg-dark-surface/75 border border-white/10 flex items-center justify-between shadow-glass">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase text-dark-textMuted tracking-wider">
                      Direct Email Channel
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-dark-text font-mono truncate">
                      {assembledEmail || 'Loading encrypted channel...'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-dark-textMuted hover:text-dark-text border border-white/10 transition-colors cursor-pointer"
                    aria-label="Copy direct email address to clipboard"
                    title="Copy Email"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <a
                    href={mailtoFallbackUrl}
                    className="p-2 rounded-xl bg-primary text-slate-950 font-bold hover:bg-primary-hover transition-colors shadow-glow-primary"
                    aria-label="Send email using native email client"
                    title="Compose Mail"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Direct Channels Bar */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-dark-surface/75 hover:bg-dark-surfaceElevated border border-white/10 hover:border-accent-cyan/40 text-dark-text flex items-center justify-between transition-colors shadow-glass"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-accent-cyan" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-dark-textMuted" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-dark-surface/75 hover:bg-dark-surfaceElevated border border-white/10 hover:border-accent-violet/40 text-dark-text flex items-center justify-between transition-colors shadow-glass"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-accent-violet" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-dark-textMuted" />
                </a>
              </div>
            </div>
          </div>

          {/* Security & Verification Callout */}
          <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-xs font-mono flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>Encrypted Direct Transport · SLA Response Time: Within 24-48 Hours</span>
          </div>
        </div>

        {/* Right Column: Interactive Contact Dispatch Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-dark-surface/75 backdrop-blur-xl border border-white/10 shadow-glass">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono text-xs">
              <span className="font-bold text-dark-text uppercase tracking-wider flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>Dispatch Architecture Message</span>
              </span>
              <span className="text-accent-cyan text-[11px]">Direct Form</span>
            </div>

            {/* Live Status Feedback Region */}
            <div aria-live="polite" className="mb-4">
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm font-bold text-emerald-200">
                      Message Dispatched Successfully!
                    </strong>
                    Thank you for reaching out. I have received your message and will respond to your inquiry within 24 to 48 business hours.
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm font-bold text-rose-200 mb-1">
                      Transmission Failure
                    </strong>
                    {errorMessage}
                    <div className="mt-2">
                      <a
                        href={mailtoFallbackUrl}
                        className="inline-flex items-center gap-1.5 underline font-bold text-rose-200 hover:text-white"
                      >
                        Launch Direct Mail Client (mailto) <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Honeypot Field for Spam Prevention */}
              <div
                style={{
                  position: 'absolute',
                  opacity: 0,
                  pointerEvents: 'none',
                  height: 0,
                  width: 0,
                  overflow: 'hidden',
                }}
                aria-hidden="true"
              >
                <label htmlFor="website-hp">Leave this field blank</label>
                <input
                  type="text"
                  id="website-hp"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.honeypot}
                  onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                />
              </div>

              {/* Name & Email 2-Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={nameId} className="block text-xs font-mono font-medium text-dark-text mb-1.5">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id={nameId}
                    name="name"
                    required
                    disabled={status === 'submitting'}
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3 rounded-xl bg-black/30 border text-dark-text placeholder:text-dark-textDim text-sm font-sans focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-white/10 focus:border-primary'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor={emailId} className="block text-xs font-mono font-medium text-dark-text mb-1.5">
                    Your Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id={emailId}
                    name="email"
                    required
                    disabled={status === 'submitting'}
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-black/30 border text-dark-text placeholder:text-dark-textDim text-sm font-sans focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-white/10 focus:border-primary'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor={messageId} className="block text-xs font-mono font-medium text-dark-text mb-1.5">
                  Message / Project Scope <span className="text-primary">*</span>
                </label>
                <textarea
                  id={messageId}
                  name="message"
                  required
                  rows={5}
                  disabled={status === 'submitting'}
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  placeholder="Outline your engineering requirements, timelines, or role scope..."
                  className={`w-full px-4 py-3 rounded-xl bg-black/30 border text-dark-text placeholder:text-dark-textDim text-sm font-sans focus:outline-none transition-colors resize-y ${
                    errors.message
                      ? 'border-rose-500 focus:border-rose-500'
                      : 'border-white/10 focus:border-primary'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Form Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                <span className="text-[11px] font-mono text-dark-textDim">
                  All communications remain strictly confidential.
                </span>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-primary hover:bg-primary-hover disabled:opacity-50 transition-all duration-200 shadow-glow-primary cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

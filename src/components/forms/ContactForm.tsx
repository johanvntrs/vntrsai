'use client';

import { useState } from 'react';
import type { Locale, Dictionary } from '@/lib/i18n';

interface ContactFormProps {
  lang: Locale;
  dict: Dictionary;
}

export function ContactForm({ lang, dict }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [utmParams] = useState(() => {
    if (typeof window === 'undefined') {
      return {
        utm_source: '',
        utm_medium: '',
        utm_campaign: '',
      };
    }

    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
    };
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
      language: lang,
      ...utmParams,
    };

    try {
      // Replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        // Track form submission
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as unknown as { gtag: (type: string, event: string, params: Record<string, string>) => void }).gtag('event', 'form_submit', {
            form_name: 'contact',
            language: lang,
          });
        }
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-[#b9dec8] bg-[linear-gradient(140deg,#eaf8ef_0%,#f2fcf6_100%)] p-8 text-center">
        <svg
          className="mx-auto h-12 w-12 text-[#2f7f54]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="mt-4 text-lg font-medium text-[#1e4d33]">
          {dict.contact.form.success}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-[var(--border)] bg-white/75 p-6 shadow-[0_22px_40px_-34px_rgba(26,35,55,0.9)]">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)]">
          {dict.contact.form.name}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">
          {dict.contact.form.email}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-[var(--foreground)]">
          {dict.contact.form.company}
        </label>
        <input
          type="text"
          name="company"
          id="company"
          className="mt-1 block w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)]">
          {dict.contact.form.message}
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]"
        />
      </div>

      {/* Hidden UTM fields */}
      <input type="hidden" name="utm_source" value={utmParams.utm_source} />
      <input type="hidden" name="utm_medium" value={utmParams.utm_medium} />
      <input type="hidden" name="utm_campaign" value={utmParams.utm_campaign} />
      <input type="hidden" name="language" value={lang} />

      {status === 'error' && (
        <p className="text-sm text-[#b53b5a]">{dict.contact.form.error}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-strong)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'submitting'
          ? '...'
          : dict.contact.form.submit}
      </button>
    </form>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Locale, Dictionary } from '@/lib/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  lang: Locale;
  dict: Dictionary;
}

export function Header({ lang, dict }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: dict.nav.services, href: `/${lang}/${lang === 'sv' ? 'tjanster' : 'services'}` },
    { name: dict.nav.contact, href: `/${lang}/${lang === 'sv' ? 'kontakt' : 'contact'}` },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)]/70 bg-[var(--surface)]/78 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link
            href={`/${lang}`}
            className="-m-1.5 inline-flex items-center rounded-full p-1.5 transition-colors hover:bg-white/60"
          >
            <Image
              src="/logos/made-by-vntrs-logo.svg"
              alt="VNTRS AI"
              width={256}
              height={256}
              className="h-10 w-10"
              priority
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/80 p-2.5 text-[var(--muted)] shadow-[0_8px_24px_-16px_rgba(26,35,55,0.8)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:bg-white/60 hover:text-[var(--foreground)]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
          <LanguageSwitcher currentLang={lang} />
          <Link
            href={`/${lang}/${lang === 'sv' ? 'kontakt' : 'contact'}`}
            className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-medium text-white shadow-[0_10px_28px_-18px_rgba(26,35,55,0.9)] transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
          >
            {dict.common.bookCall}
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-6 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-xl border border-transparent px-3 py-2 text-base font-medium text-[var(--muted)] transition-colors hover:border-[var(--border)] hover:bg-white/70 hover:text-[var(--foreground)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex items-center gap-4">
              <LanguageSwitcher currentLang={lang} />
              <Link
                href={`/${lang}/${lang === 'sv' ? 'kontakt' : 'contact'}`}
                className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {dict.common.bookCall}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

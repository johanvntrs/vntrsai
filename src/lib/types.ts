import type { Locale } from './i18n';

// Page props type for all [lang] pages
export interface LangPageProps {
  params: Promise<{ lang: string }>;
}

// Helper to safely cast lang param to Locale
export function asLocale(lang: string): Locale {
  return lang as Locale;
}

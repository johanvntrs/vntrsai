export const i18n = {
  defaultLocale: 'sv',
  locales: ['sv', 'en'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  sv: 'Svenska',
};

// URL mappings for each route per locale
export const routeMappings: Record<string, Record<Locale, string>> = {
  // Main sections
  services: { en: 'services', sv: 'tjanster' },
  industries: { en: 'industries', sv: 'branscher' },
  'case-studies': { en: 'case-studies', sv: 'case' },
  resources: { en: 'resources', sv: 'resurser' },
  contact: { en: 'contact', sv: 'kontakt' },
  guides: { en: 'guides', sv: 'guider' },

  // Services
  'ai-consulting': { en: 'ai-consulting', sv: 'ai-konsulting' },
  'ai-workshops': { en: 'ai-workshops', sv: 'ai-workshops' },
  'ai-inspiration-talks': { en: 'ai-inspiration-talks', sv: 'ai-inspirationsforelasning' },

  // Industries
  'event-industry': { en: 'event-industry', sv: 'eventbranschen' },
  'private-equity': { en: 'private-equity', sv: 'private-equity' },
  'niche-saas': { en: 'niche-saas', sv: 'nischad-saas' },
};

// Get localized path
export function getLocalizedPath(path: string, locale: Locale): string {
  const segments = path.split('/').filter(Boolean);
  const localizedSegments = segments.map(segment => {
    const mapping = routeMappings[segment];
    return mapping ? mapping[locale] : segment;
  });
  return `/${locale}/${localizedSegments.join('/')}`;
}

// Get canonical path from localized path
export function getCanonicalSegment(localizedSegment: string): string | null {
  for (const [canonical, mappings] of Object.entries(routeMappings)) {
    if (Object.values(mappings).includes(localizedSegment)) {
      return canonical;
    }
  }
  return null;
}

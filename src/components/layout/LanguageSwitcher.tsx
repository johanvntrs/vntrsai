'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { localeNames, routeMappings } from '@/lib/i18n';

interface LanguageSwitcherProps {
  currentLang: Locale;
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const targetLang: Locale = currentLang === 'en' ? 'sv' : 'en';

  // Convert the path to the target language
  const getTargetPath = () => {
    // Remove current locale prefix
    const pathWithoutLocale = pathname.replace(`/${currentLang}`, '') || '/';

    if (pathWithoutLocale === '/') {
      return `/${targetLang}`;
    }

    // Split path into segments and convert each
    const segments = pathWithoutLocale.split('/').filter(Boolean);
    const convertedSegments = segments.map((segment) => {
      // Find if this segment exists in route mappings
      for (const [canonical, mappings] of Object.entries(routeMappings)) {
        if (mappings[currentLang] === segment) {
          return mappings[targetLang];
        }
      }
      // If not in mappings, keep as-is (like slugs for case studies)
      return segment;
    });

    return `/${targetLang}/${convertedSegments.join('/')}`;
  };

  return (
    <Link
      href={getTargetPath()}
      className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
    >
      {localeNames[targetLang]}
    </Link>
  );
}

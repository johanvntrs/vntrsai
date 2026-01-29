import Link from 'next/link';
import type { Locale, Dictionary } from '@/lib/i18n';

interface FooterProps {
  lang: Locale;
  dict: Dictionary;
}

export function Footer({ lang, dict }: FooterProps) {
  const servicesPath = lang === 'sv' ? 'tjanster' : 'services';
  const industriesPath = lang === 'sv' ? 'branscher' : 'industries';
  const contactPath = lang === 'sv' ? 'kontakt' : 'contact';

  const footerLinks = {
    services: [
      { name: lang === 'sv' ? 'AI-konsulting' : 'AI Consulting', href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-konsulting' : 'ai-consulting'}` },
      { name: lang === 'sv' ? 'AI-workshop' : 'AI Workshop', href: `/${lang}/${servicesPath}/ai-workshops` },
      { name: lang === 'sv' ? 'AI-föreläsning' : 'AI Talk', href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-inspirationsforelasning' : 'ai-inspiration-talks'}` },
    ],
    industries: [
      { name: lang === 'sv' ? 'Eventbranschen' : 'Event Industry', href: `/${lang}/${industriesPath}/${lang === 'sv' ? 'eventbranschen' : 'event-industry'}` },
      { name: 'Private Equity', href: `/${lang}/${industriesPath}/private-equity` },
      { name: lang === 'sv' ? 'Nischad SaaS' : 'Niche SaaS', href: `/${lang}/${industriesPath}/${lang === 'sv' ? 'nischad-saas' : 'niche-saas'}` },
    ],
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href={`/${lang}`} className="text-xl font-bold text-gray-900">
              VNTRS AI
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              {dict.metadata.siteDescription}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{dict.nav.services}</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{dict.nav.industries}</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{dict.nav.contact}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href={`/${lang}/${contactPath}`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {dict.common.bookCall}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-500">{dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

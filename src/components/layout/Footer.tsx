import Link from 'next/link';
import type { Locale, Dictionary } from '@/lib/i18n';

interface FooterProps {
  lang: Locale;
  dict: Dictionary;
}

export function Footer({ lang, dict }: FooterProps) {
  const servicesPath = lang === 'sv' ? 'tjanster' : 'services';
  const contactPath = lang === 'sv' ? 'kontakt' : 'contact';

  const footerLinks = {
    services: [
      { name: lang === 'sv' ? 'AI-utbildning' : 'AI Training', href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-utbildning' : 'ai-training'}` },
      { name: lang === 'sv' ? 'AI-workshop' : 'AI Workshop', href: `/${lang}/${servicesPath}/ai-workshops` },
      { name: lang === 'sv' ? 'AI-föreläsning' : 'AI Talk', href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-inspirationsforelasning' : 'ai-inspiration-talks'}` },
    ],
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[linear-gradient(180deg,#f8f9fa_0%,#f2f3f4_100%)]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href={`/${lang}`} className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
              VNTRS AI
            </Link>
            <p className="mt-4 max-w-xs text-sm text-[var(--muted)]">
              {dict.metadata.siteDescription}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">{dict.nav.services}</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">{dict.nav.contact}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href={`/${lang}/${contactPath}`} className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
                  {dict.common.bookCall}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--border)] pt-8">
          <p className="text-xs text-[var(--muted)]/85">{dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

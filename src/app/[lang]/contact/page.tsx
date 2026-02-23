import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { type Locale, getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  return {
    title: dict.contact.title,
    description: dict.contact.metaDescription,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  const servicesPath = lang === 'sv' ? 'tjanster' : 'services';

  const breadcrumbs = [
    { label: lang === 'sv' ? 'Hem' : 'Home', href: `/${lang}` },
    { label: dict.nav.contact },
  ];

  const quickLinks = [
    {
      name: dict.home.offerings.consulting.title,
      href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-utbildning' : 'ai-training'}`,
    },
    {
      name: dict.home.offerings.opportunitySession.title,
      href: `/${lang}/${servicesPath}/ai-opportunity-session`,
    },
    {
      name: dict.home.offerings.workshop.title,
      href: `/${lang}/${servicesPath}/ai-workshops`,
    },
    {
      name: dict.home.offerings.talk.title,
      href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-inspirationsforelasning' : 'ai-inspiration-talks'}`,
    },
  ];

  const tallySrc =
    lang === 'sv'
      ? 'https://tally.so/embed/7R2xJ0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'
      : 'https://tally.so/embed/0Q6ORQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1';

  const tallyTitle = lang === 'sv' ? 'Kontakta oss' : 'Contact us';

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <Hero
        title={dict.contact.h1}
        subtitle={dict.contact.heroSub}
      />

      <Section>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white/75 p-2 shadow-[0_20px_36px_-32px_rgba(26,35,55,0.9)] md:p-3">
              <iframe
                data-tally-src={tallySrc}
                loading="lazy"
                width="100%"
                height="472"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title={tallyTitle}
                className="w-full"
              />
            </div>
          </div>
          <div className="space-y-8 rounded-3xl border border-[var(--border)] bg-white/70 p-6 shadow-[0_20px_36px_-32px_rgba(26,35,55,0.9)]">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-[var(--foreground)]">
                {lang === 'sv' ? 'Våra tjänster' : 'Our services'}
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block rounded-lg px-2 py-1 text-[var(--muted)] transition-colors hover:bg-white/75 hover:text-[var(--foreground)]"
                  >
                    {link.name} &rarr;
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
                {lang === 'sv' ? 'Direktkontakt' : 'Direct contact'}
              </h3>
              <p className="text-[var(--muted)]">
                {lang === 'sv'
                  ? 'Eller maila oss direkt på '
                  : 'Or email us directly at '}
                <a href="mailto:hello@vntrs.com" className="text-[var(--foreground)] underline hover:no-underline">
                  hello@vntrs.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Script id="tally-embed" strategy="afterInteractive">
        {`var d=document,w="https://tally.so/widgets/embed.js",v=function(){if(typeof Tally!=="undefined"){Tally.loadEmbeds();}else{d.querySelectorAll('iframe[data-tally-src]:not([src])').forEach(function(e){e.src=e.dataset.tallySrc;});}};if(typeof Tally!=="undefined"){v();}else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w;s.onload=v;s.onerror=v;d.body.appendChild(s);}`}
      </Script>
    </>
  );
}

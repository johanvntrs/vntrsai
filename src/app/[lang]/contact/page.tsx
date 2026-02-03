import type { Metadata } from 'next';
import Link from 'next/link';
import { type Locale, getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/forms/ContactForm';

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
      name: dict.home.offerings.workshop.title,
      href: `/${lang}/${servicesPath}/ai-workshops`,
    },
    {
      name: dict.home.offerings.talk.title,
      href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-inspirationsforelasning' : 'ai-inspiration-talks'}`,
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <Hero
        title={dict.contact.h1}
        subtitle={dict.contact.heroSub}
      />

      <Section>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <ContactForm lang={lang} dict={dict} />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {lang === 'sv' ? 'Våra tjänster' : 'Our services'}
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name} &rarr;
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {lang === 'sv' ? 'Direktkontakt' : 'Direct contact'}
              </h3>
              <p className="text-gray-600">
                {lang === 'sv'
                  ? 'Eller maila oss direkt på '
                  : 'Or email us directly at '}
                <a href="mailto:hello@vntrs.ai" className="text-gray-900 underline hover:no-underline">
                  hello@vntrs.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

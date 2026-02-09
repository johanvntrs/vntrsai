import type { Metadata } from 'next';
import { type Locale, getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { Card, CardGrid } from '@/components/ui/Card';
import { CTA } from '@/components/ui/CTA';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  return {
    title: dict.services.index.title,
    description: dict.services.index.metaDescription,
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  const servicesPath = lang === 'sv' ? 'tjanster' : 'services';
  const contactPath = lang === 'sv' ? 'kontakt' : 'contact';

  const services = [
    {
      title: dict.home.offerings.consulting.title,
      description: dict.home.offerings.consulting.description,
      href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-utbildning' : 'ai-training'}`,
    },
    {
      title: dict.home.offerings.workshop.title,
      description: dict.home.offerings.workshop.description,
      href: `/${lang}/${servicesPath}/ai-workshops`,
    },
    {
      title: dict.home.offerings.talk.title,
      description: dict.home.offerings.talk.description,
      href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-inspirationsforelasning' : 'ai-inspiration-talks'}`,
    },
  ];

  const breadcrumbs = [
    { label: lang === 'sv' ? 'Hem' : 'Home', href: `/${lang}` },
    { label: dict.nav.services },
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <Hero title={dict.services.index.h1} />

      <Section>
        <CardGrid columns={3}>
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              href={service.href}
              linkText={dict.common.learnMore}
            />
          ))}
        </CardGrid>
      </Section>

      <CTA
        title={dict.home.footerCta}
        primaryCta={{
          text: dict.common.bookIntro,
          href: `/${lang}/${contactPath}`,
        }}
      />
    </>
  );
}

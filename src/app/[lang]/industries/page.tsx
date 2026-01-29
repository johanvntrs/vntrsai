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
    title: dict.industries.index.title,
    description: dict.industries.index.metaDescription,
  };
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  const industriesPath = lang === 'sv' ? 'branscher' : 'industries';
  const contactPath = lang === 'sv' ? 'kontakt' : 'contact';

  const breadcrumbs = [
    { label: lang === 'sv' ? 'Hem' : 'Home', href: `/${lang}` },
    { label: dict.nav.industries },
  ];

  const industries = [
    {
      title: lang === 'sv' ? 'Eventbranschen' : 'Event Industry',
      description: lang === 'sv'
        ? 'Minska manuellt arbete i planering och drift med AI-automatisering.'
        : 'Reduce manual work across planning and operations with AI automation.',
      href: `/${lang}/${industriesPath}/${lang === 'sv' ? 'eventbranschen' : 'event-industry'}`,
    },
    {
      title: 'Private Equity',
      description: lang === 'sv'
        ? 'Snabbare deal-arbete och värdeskapande i portföljbolag.'
        : 'Faster deal work and portfolio value creation.',
      href: `/${lang}/${industriesPath}/private-equity`,
    },
    {
      title: lang === 'sv' ? 'Nischad SaaS' : 'Niche SaaS',
      description: lang === 'sv'
        ? 'Leverera differentierade AI-features utan att öka komplexiteten.'
        : 'Ship differentiated AI features without blowing up complexity.',
      href: `/${lang}/${industriesPath}/${lang === 'sv' ? 'nischad-saas' : 'niche-saas'}`,
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <Hero title={dict.industries.index.h1} />

      <Section>
        <CardGrid columns={3}>
          {industries.map((industry) => (
            <Card
              key={industry.title}
              title={industry.title}
              description={industry.description}
              href={industry.href}
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

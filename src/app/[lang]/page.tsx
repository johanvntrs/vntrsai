import type { Metadata } from 'next';
import { type Locale, getDictionary } from '@/lib/i18n';
import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { Card, CardGrid } from '@/components/ui/Card';
import { ProcessSteps } from '@/components/ui/ProcessSteps';
import { FAQ } from '@/components/ui/FAQ';
import { CTA } from '@/components/ui/CTA';
import { TrustedLogosCarousel } from '@/components/ui/TrustedLogosCarousel';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  return {
    title: dict.home.title,
    description: dict.home.metaDescription,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: '/en',
        sv: '/sv',
        'x-default': '/sv',
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  const servicesPath = lang === 'sv' ? 'tjanster' : 'services';
  const contactPath = lang === 'sv' ? 'kontakt' : 'contact';

  const offeringsCards = [
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

  const placeholderLogos = [
    {
      name: 'NORDIC FLOW',
      src: '/logos/nordic-flow.svg',
    },
    {
      name: 'AURORA LABS',
      src: '/logos/aurora-labs.svg',
    },
    {
      name: 'PULSE OPS',
      src: '/logos/pulse-ops.svg',
    },
    {
      name: 'LUMEN GRID',
      src: '/logos/lumen-grid.svg',
    },
    {
      name: 'NOVA CORE',
      src: '/logos/nova-core.svg',
    },
  ];

  return (
    <>
      <Hero
        title={dict.home.h1}
        subtitle={dict.home.heroSub}
        primaryCta={{
          text: dict.home.primaryCta,
          href: `/${lang}/${contactPath}`,
        }}
        secondaryCta={{
          text: dict.home.secondaryCta,
          href: `/${lang}/${servicesPath}`,
        }}
      />

      {/* Offerings */}
      <Section title={dict.home.offeringsTitle} background="gray">
        <CardGrid columns={3}>
          {offeringsCards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              href={card.href}
              linkText={dict.common.learnMore}
            />
          ))}
        </CardGrid>
      </Section>

      {/* How we work */}
      <Section title={dict.home.howWeWorkTitle}>
        <ProcessSteps steps={dict.home.howWeWorkSteps} />
      </Section>

      {/* Trusted by */}
      <Section title={dict.home.trustedByTitle} background="gray">
        <TrustedLogosCarousel logos={placeholderLogos} />
      </Section>

      {/* FAQ Preview */}
      <Section title={dict.home.faqTitle}>
        <div className="max-w-3xl mx-auto">
          <FAQ items={dict.home.faqs} schemaId="home-faq" />
        </div>
      </Section>

      {/* CTA */}
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

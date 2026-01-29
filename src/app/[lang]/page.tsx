import type { Metadata } from 'next';
import Link from 'next/link';
import { type Locale, getDictionary } from '@/lib/i18n';
import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { Card, CardGrid } from '@/components/ui/Card';
import { ProcessSteps } from '@/components/ui/ProcessSteps';
import { FAQ } from '@/components/ui/FAQ';
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
    title: dict.home.title,
    description: dict.home.metaDescription,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: '/en',
        sv: '/sv',
        'x-default': '/en',
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
  const industriesPath = lang === 'sv' ? 'branscher' : 'industries';
  const contactPath = lang === 'sv' ? 'kontakt' : 'contact';

  const offeringsCards = [
    {
      title: dict.home.offerings.consulting.title,
      description: dict.home.offerings.consulting.description,
      href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-konsulting' : 'ai-consulting'}`,
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

  const industryCards = [
    {
      title: dict.home.industries[0],
      href: `/${lang}/${industriesPath}/${lang === 'sv' ? 'eventbranschen' : 'event-industry'}`,
    },
    {
      title: dict.home.industries[1],
      href: `/${lang}/${industriesPath}/private-equity`,
    },
    {
      title: dict.home.industries[2],
      href: `/${lang}/${industriesPath}/${lang === 'sv' ? 'nischad-saas' : 'niche-saas'}`,
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

      {/* Industries */}
      <Section title={dict.home.industriesTitle}>
        <div className="flex flex-wrap justify-center gap-4">
          {industryCards.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              {industry.title}
            </Link>
          ))}
        </div>
      </Section>

      {/* How we work */}
      <Section title={dict.home.howWeWorkTitle} background="gray">
        <ProcessSteps steps={dict.home.howWeWorkSteps} />
      </Section>

      {/* Trusted by */}
      <Section title={dict.home.trustedByTitle}>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {/* Placeholder logos - replace with actual client logos */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs"
            >
              Logo {i}
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Preview */}
      <Section title={dict.home.faqTitle} background="gray">
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

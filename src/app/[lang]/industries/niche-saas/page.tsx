import type { Metadata } from 'next';
import Link from 'next/link';
import { type Locale, getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { BulletList } from '@/components/ui/BulletList';
import { CTA } from '@/components/ui/CTA';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import { getCaseStudiesByIndustry } from '@/lib/case-studies';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  return {
    title: dict.industries.nicheSaas.title,
    description: dict.industries.nicheSaas.metaDescription,
  };
}

export default async function NicheSaasPage({
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
  const casePath = lang === 'sv' ? 'case' : 'case-studies';

  const saasCaseStudies = getCaseStudiesByIndustry('saas');

  const breadcrumbs = [
    { label: lang === 'sv' ? 'Hem' : 'Home', href: `/${lang}` },
    { label: dict.nav.industries, href: `/${lang}/${industriesPath}` },
    { label: lang === 'sv' ? 'Nischad SaaS' : 'Niche SaaS' },
  ];

  const challenges = lang === 'sv'
    ? [
        'Kunder förväntar sig AI-features men resurserna är begränsade',
        'Svårt att bygga säkra AI-funktioner utan att öka komplexiteten',
        'Supportteam överbelastade med repetitiva frågor',
        'Onboardingprocessen tar för lång tid',
      ]
    : [
        'Customers expect AI features but resources are limited',
        'Difficult to build secure AI features without increasing complexity',
        'Support teams overwhelmed with repetitive questions',
        'Onboarding process takes too long',
      ];

  const securityConsiderations = lang === 'sv'
    ? [
        'Kunders data måste isoleras—multi-tenant AI-arkitektur',
        '"Bring your own data" kräver säker datahantering',
        'Tydliga gränser för vad AI-copiloter kan göra',
        'Audit logs för alla AI-interaktioner',
        'GDPR-compliance för europeiska kunder',
        'Möjlighet att köra på kundens egen infrastruktur',
      ]
    : [
        'Customer data must be isolated—multi-tenant AI architecture',
        '"Bring your own data" requires secure data handling',
        'Clear boundaries for what AI copilots can do',
        'Audit logs for all AI interactions',
        'GDPR compliance for European customers',
        'Option to run on customer\'s own infrastructure',
      ];

  const relatedServices = [
    {
      name: lang === 'sv' ? 'AI-konsulting' : 'AI Consulting',
      description: lang === 'sv' ? 'Bygg AI-features i er produkt' : 'Build AI features into your product',
      href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-konsulting' : 'ai-consulting'}`,
    },
    {
      name: lang === 'sv' ? 'AI-workshop' : 'AI Workshop',
      description: lang === 'sv' ? 'Kartlägg vilka AI-features som ger mest värde' : 'Map which AI features deliver most value',
      href: `/${lang}/${servicesPath}/ai-workshops`,
    },
    {
      name: lang === 'sv' ? 'AI-föreläsning' : 'AI Inspiration Talk',
      description: lang === 'sv' ? 'AI-översikt för produktteam' : 'AI overview for product teams',
      href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-inspirationsforelasning' : 'ai-inspiration-talks'}`,
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <Hero
        title={dict.industries.nicheSaas.h1}
        primaryCta={{
          text: dict.common.bookIntro,
          href: `/${lang}/${contactPath}`,
        }}
      />

      {/* Challenges */}
      <Section title={lang === 'sv' ? 'Vanliga utmaningar' : 'Common challenges'}>
        <div className="max-w-2xl mx-auto">
          <BulletList items={challenges} icon="dot" />
        </div>
      </Section>

      <Section title={lang === 'sv' ? 'AI use cases' : 'Use cases'} background="gray">
        <div className="max-w-2xl mx-auto">
          <BulletList items={dict.industries.nicheSaas.useCases} icon="check" />
        </div>
      </Section>

      <Section title={lang === 'sv' ? 'KPIer vi påverkar' : 'KPIs we impact'}>
        <div className="flex flex-wrap justify-center gap-4">
          {dict.industries.nicheSaas.kpis.map((kpi) => (
            <span
              key={kpi}
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
            >
              {kpi}
            </span>
          ))}
        </div>
      </Section>

      {/* Case Studies */}
      <Section title={lang === 'sv' ? 'Case studies' : 'Case studies'} background="gray">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {saasCaseStudies.map((cs) => (
            <CaseStudyCard
              key={cs.slug}
              caseStudy={cs}
              lang={lang}
              basePath={`/${lang}/${casePath}`}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href={`/${lang}/${casePath}`}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {lang === 'sv' ? 'Se alla case studies' : 'View all case studies'} &rarr;
          </Link>
        </div>
      </Section>

      {/* Security & GDPR */}
      <Section title={lang === 'sv' ? 'Säkerhet & GDPR' : 'Security & GDPR'}>
        <div className="max-w-2xl mx-auto">
          <BulletList items={securityConsiderations} icon="check" />
        </div>
      </Section>

      {/* Related services */}
      <Section title={lang === 'sv' ? 'Relevanta tjänster' : 'Relevant services'}>
        <div className="max-w-2xl mx-auto space-y-4">
          {relatedServices.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="block p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="font-medium text-gray-900">{service.name}</div>
              <div className="mt-1 text-sm text-gray-600">{service.description}</div>
            </Link>
          ))}
        </div>
      </Section>

      <CTA
        title={lang === 'sv' ? 'Redo att bygga AI-features i er SaaS-produkt?' : 'Ready to build AI features into your SaaS product?'}
        primaryCta={{
          text: dict.common.bookIntro,
          href: `/${lang}/${contactPath}`,
        }}
      />
    </>
  );
}

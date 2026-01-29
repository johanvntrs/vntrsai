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
    title: dict.industries.eventIndustry.title,
    description: dict.industries.eventIndustry.metaDescription,
  };
}

export default async function EventIndustryPage({
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

  const eventCaseStudies = getCaseStudiesByIndustry('event');

  const breadcrumbs = [
    { label: lang === 'sv' ? 'Hem' : 'Home', href: `/${lang}` },
    { label: dict.nav.industries, href: `/${lang}/${industriesPath}` },
    { label: lang === 'sv' ? 'Eventbranschen' : 'Event Industry' },
  ];

  const securityConsiderations = lang === 'sv'
    ? [
        'Deltagardata kräver GDPR-medveten hantering',
        'Lokala modeller kan användas för känslig information',
        'Anonymisering av feedback och supportdata',
        'Tydlig datapolicy för AI-assistenter som interagerar med kunder',
        'Audit trail för automatiserade beslut',
      ]
    : [
        'Attendee data requires GDPR-compliant handling',
        'Local models can be used for sensitive information',
        'Anonymization of feedback and support data',
        'Clear data policy for AI assistants interacting with customers',
        'Audit trail for automated decisions',
      ];

  const relatedServices = [
    {
      name: lang === 'sv' ? 'AI-workshop' : 'AI Workshop',
      description: lang === 'sv' ? 'Kartlägg AI-möjligheter för er eventverksamhet' : 'Map AI opportunities for your event business',
      href: `/${lang}/${servicesPath}/ai-workshops`,
    },
    {
      name: lang === 'sv' ? 'AI-konsulting' : 'AI Consulting',
      description: lang === 'sv' ? 'Full implementation av AI-lösningar' : 'Full implementation of AI solutions',
      href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-konsulting' : 'ai-consulting'}`,
    },
    {
      name: lang === 'sv' ? 'AI-föreläsning' : 'AI Inspiration Talk',
      description: lang === 'sv' ? 'Inspiration för ledning och team' : 'Inspiration for leadership and teams',
      href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-inspirationsforelasning' : 'ai-inspiration-talks'}`,
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <Hero
        title={dict.industries.eventIndustry.h1}
        primaryCta={{
          text: lang === 'sv' ? 'Boka eventbransch-session' : 'Book an event-industry AI session',
          href: `/${lang}/${contactPath}`,
        }}
      />

      <Section title={lang === 'sv' ? 'Vanliga utmaningar' : 'Common challenges'}>
        <div className="max-w-2xl mx-auto">
          <BulletList items={dict.industries.eventIndustry.challenges} icon="dot" />
        </div>
      </Section>

      <Section title={lang === 'sv' ? 'AI use cases' : 'Use cases'} background="gray">
        <div className="max-w-2xl mx-auto">
          <BulletList items={dict.industries.eventIndustry.useCases} icon="check" />
        </div>
      </Section>

      <Section title={lang === 'sv' ? 'KPIer vi påverkar' : 'KPIs we impact'}>
        <div className="flex flex-wrap justify-center gap-4">
          {dict.industries.eventIndustry.kpis.map((kpi) => (
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
          {eventCaseStudies.map((cs) => (
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
      <Section title={lang === 'sv' ? 'Säkerhet & GDPR' : 'Security & GDPR'} background="gray">
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
        title={lang === 'sv' ? 'Redo att utforska AI för er eventverksamhet?' : 'Ready to explore AI for your event business?'}
        primaryCta={{
          text: dict.common.bookIntro,
          href: `/${lang}/${contactPath}`,
        }}
      />
    </>
  );
}

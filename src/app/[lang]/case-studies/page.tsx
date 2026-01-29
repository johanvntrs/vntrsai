import type { Metadata } from 'next';
import Link from 'next/link';
import { type Locale, getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import { CTA } from '@/components/ui/CTA';
import { caseStudies, getCaseStudiesByIndustry } from '@/lib/case-studies';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;

  return {
    title: lang === 'sv' ? 'Case Studies | AI-projekt som ger resultat' : 'Case Studies | AI projects that deliver results',
    description: lang === 'sv'
      ? 'Se hur vi hjälpt team inom event, PE och SaaS implementera AI-lösningar som sparar tid och pengar.'
      : 'See how we have helped teams in events, PE and SaaS implement AI solutions that save time and money.',
  };
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  const casePath = lang === 'sv' ? 'case' : 'case-studies';
  const contactPath = lang === 'sv' ? 'kontakt' : 'contact';
  const industriesPath = lang === 'sv' ? 'branscher' : 'industries';

  const breadcrumbs = [
    { label: lang === 'sv' ? 'Hem' : 'Home', href: `/${lang}` },
    { label: lang === 'sv' ? 'Case' : 'Case Studies' },
  ];

  const eventCases = getCaseStudiesByIndustry('event');
  const peCases = getCaseStudiesByIndustry('pe');
  const saasCases = getCaseStudiesByIndustry('saas');

  const industries = [
    {
      key: 'event',
      title: lang === 'sv' ? 'Eventbranschen' : 'Event Industry',
      href: `/${lang}/${industriesPath}/${lang === 'sv' ? 'eventbranschen' : 'event-industry'}`,
      cases: eventCases,
    },
    {
      key: 'pe',
      title: 'Private Equity',
      href: `/${lang}/${industriesPath}/private-equity`,
      cases: peCases,
    },
    {
      key: 'saas',
      title: lang === 'sv' ? 'Nischad SaaS' : 'Niche SaaS',
      href: `/${lang}/${industriesPath}/${lang === 'sv' ? 'nischad-saas' : 'niche-saas'}`,
      cases: saasCases,
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <Hero
        title={lang === 'sv' ? 'Case studies: AI som ger mätbara resultat' : 'Case studies: AI that delivers measurable results'}
        subtitle={lang === 'sv'
          ? 'Se hur team inom event, private equity och SaaS använder AI för att spara tid, minska kostnader och förbättra kundupplevelsen.'
          : 'See how teams in events, private equity and SaaS use AI to save time, reduce costs and improve customer experience.'}
      />

      {industries.map((industry, index) => (
        <Section
          key={industry.key}
          title={industry.title}
          background={index % 2 === 1 ? 'gray' : 'white'}
        >
          <div className="mb-4">
            <Link
              href={industry.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {lang === 'sv' ? 'Se alla lösningar för' : 'See all solutions for'} {industry.title} &rarr;
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {industry.cases.map((cs) => (
              <CaseStudyCard
                key={cs.slug}
                caseStudy={cs}
                lang={lang}
                basePath={`/${lang}/${casePath}`}
              />
            ))}
          </div>
        </Section>
      ))}

      <CTA
        title={lang === 'sv' ? 'Redo att skapa ert eget case?' : 'Ready to create your own case?'}
        primaryCta={{
          text: dict.common.bookIntro,
          href: `/${lang}/${contactPath}`,
        }}
      />
    </>
  );
}

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
    title: dict.industries.privateEquity.title,
    description: dict.industries.privateEquity.metaDescription,
  };
}

export default async function PrivateEquityPage({
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

  const peCaseStudies = getCaseStudiesByIndustry('pe');

  const breadcrumbs = [
    { label: lang === 'sv' ? 'Hem' : 'Home', href: `/${lang}` },
    { label: dict.nav.industries, href: `/${lang}/${industriesPath}` },
    { label: 'Private Equity' },
  ];

  const challenges = lang === 'sv'
    ? [
        'Tidskrävande manuell research och dokumentgranskning',
        'Inkonsistent kvalitet på deal memos och analyser',
        'Svårighet att snabbt bedöma portföljbolags AI-mognad',
        'Fragmenterade verktyg och arbetsflöden',
      ]
    : [
        'Time-consuming manual research and document review',
        'Inconsistent quality of deal memos and analyses',
        'Difficulty quickly assessing portfolio company AI readiness',
        'Fragmented tools and workflows',
      ];

  const securityConsiderations = lang === 'sv'
    ? [
        'Deal-data är extremt känslig—lokala modeller ofta ett krav',
        'Strikt åtkomstkontroll för AI-assistenter',
        'Dokumentation av alla AI-genererade analyser',
        'Guardrails för att förhindra hallucinerande citat',
        'Separation mellan portföljbolagsdata',
      ]
    : [
        'Deal data is extremely sensitive—local models often required',
        'Strict access control for AI assistants',
        'Documentation of all AI-generated analyses',
        'Guardrails to prevent hallucinated citations',
        'Separation between portfolio company data',
      ];

  const relatedServices = [
    {
      name: lang === 'sv' ? 'AI-konsulting' : 'AI Consulting',
      description: lang === 'sv' ? 'Bygg säkra AI-workflows för deal-arbete' : 'Build secure AI workflows for deal work',
      href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-konsulting' : 'ai-consulting'}`,
    },
    {
      name: lang === 'sv' ? 'AI-workshop' : 'AI Workshop',
      description: lang === 'sv' ? 'Kartlägg AI-möjligheter för ert team' : 'Map AI opportunities for your team',
      href: `/${lang}/${servicesPath}/ai-workshops`,
    },
    {
      name: lang === 'sv' ? 'AI-föreläsning' : 'AI Inspiration Talk',
      description: lang === 'sv' ? 'AI-översikt för IC eller portföljbolag' : 'AI overview for IC or portfolio companies',
      href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-inspirationsforelasning' : 'ai-inspiration-talks'}`,
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <Hero
        title={dict.industries.privateEquity.h1}
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
          <BulletList items={dict.industries.privateEquity.useCases} icon="check" />
        </div>
      </Section>

      <Section title={lang === 'sv' ? 'KPIer vi påverkar' : 'KPIs we impact'}>
        <div className="flex flex-wrap justify-center gap-4">
          {dict.industries.privateEquity.kpis.map((kpi) => (
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
          {peCaseStudies.map((cs) => (
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

      {/* Security & Compliance */}
      <Section title={lang === 'sv' ? 'Säkerhet & Compliance' : 'Security & Compliance'}>
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
        title={lang === 'sv' ? 'Redo att utforska AI för deal-arbete och portföljvärde?' : 'Ready to explore AI for deal work and portfolio value?'}
        primaryCta={{
          text: dict.common.bookIntro,
          href: `/${lang}/${contactPath}`,
        }}
      />
    </>
  );
}

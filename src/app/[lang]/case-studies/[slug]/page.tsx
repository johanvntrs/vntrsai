import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { type Locale, getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Section } from '@/components/ui/Section';
import { BulletList } from '@/components/ui/BulletList';
import { CTA } from '@/components/ui/CTA';
import { getCaseStudyBySlug, getAllCaseStudySlugs, getCaseStudiesByIndustry } from '@/lib/case-studies';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  const params: { lang: string; slug: string }[] = [];

  for (const slug of slugs) {
    params.push({ lang: 'en', slug });
    params.push({ lang: 'sv', slug });
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: langParam, slug } = await params;
  const lang = langParam as Locale;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.title[lang]} | VNTRS AI Case Study`,
    description: caseStudy.challenge[lang].slice(0, 160),
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: langParam, slug } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const casePath = lang === 'sv' ? 'case' : 'case-studies';
  const contactPath = lang === 'sv' ? 'kontakt' : 'contact';
  const industriesPath = lang === 'sv' ? 'branscher' : 'industries';

  const industryNames: Record<string, { en: string; sv: string; path: string }> = {
    event: { en: 'Event Industry', sv: 'Eventbranschen', path: lang === 'sv' ? 'eventbranschen' : 'event-industry' },
    pe: { en: 'Private Equity', sv: 'Private Equity', path: 'private-equity' },
    saas: { en: 'Niche SaaS', sv: 'Nischad SaaS', path: lang === 'sv' ? 'nischad-saas' : 'niche-saas' },
  };

  const industryInfo = industryNames[caseStudy.industry];

  const breadcrumbs = [
    { label: lang === 'sv' ? 'Hem' : 'Home', href: `/${lang}` },
    { label: lang === 'sv' ? 'Case' : 'Case Studies', href: `/${lang}/${casePath}` },
    { label: caseStudy.title[lang] },
  ];

  // Get related case studies from the same industry
  const relatedCases = getCaseStudiesByIndustry(caseStudy.industry)
    .filter((cs) => cs.slug !== caseStudy.slug)
    .slice(0, 2);

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title[lang],
    description: caseStudy.challenge[lang],
    author: {
      '@type': 'Organization',
      name: 'VNTRS AI',
    },
    publisher: {
      '@type': 'Organization',
      name: 'VNTRS AI',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {caseStudy.tags[lang].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {caseStudy.title[lang]}
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              {caseStudy.client} &middot; {caseStudy.clientType[lang]}
            </p>

            <Link
              href={`/${lang}/${industriesPath}/${industryInfo.path}`}
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {lang === 'sv' ? 'Se fler lösningar för' : 'See more solutions for'} {industryInfo[lang]} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <Section background="gray">
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudy.results.map((result) => (
            <div key={result.metric} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {result.value}
              </div>
              <div className="text-gray-600">{result.description[lang]}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Challenge */}
      <Section title={lang === 'sv' ? 'Utmaningen' : 'The Challenge'}>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            {caseStudy.challenge[lang]}
          </p>
        </div>
      </Section>

      {/* Solution */}
      <Section title={lang === 'sv' ? 'Lösningen' : 'The Solution'} background="gray">
        <div className="max-w-3xl mx-auto">
          <BulletList items={caseStudy.solution[lang]} icon="check" />
        </div>
      </Section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <Section>
          <div className="max-w-3xl mx-auto">
            <blockquote className="relative">
              <div className="text-4xl text-gray-300 absolute -top-4 -left-4">&ldquo;</div>
              <p className="text-xl md:text-2xl text-gray-700 italic mb-6 pl-8">
                {caseStudy.testimonial.quote[lang]}
              </p>
              <footer className="pl-8">
                <div className="font-semibold text-gray-900">
                  {caseStudy.testimonial.author}
                </div>
                <div className="text-gray-600">
                  {caseStudy.testimonial.role[lang]}, {caseStudy.client}
                </div>
              </footer>
            </blockquote>
          </div>
        </Section>
      )}

      {/* Related Case Studies */}
      {relatedCases.length > 0 && (
        <Section
          title={lang === 'sv' ? 'Relaterade case' : 'Related case studies'}
          background="gray"
        >
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {relatedCases.map((cs) => (
              <CaseStudyCard
                key={cs.slug}
                caseStudy={cs}
                lang={lang}
                basePath={`/${lang}/${casePath}`}
              />
            ))}
          </div>
        </Section>
      )}

      <CTA
        title={lang === 'sv' ? 'Redo att skapa liknande resultat?' : 'Ready to create similar results?'}
        primaryCta={{
          text: dict.common.bookIntro,
          href: `/${lang}/${contactPath}`,
        }}
      />
    </>
  );
}

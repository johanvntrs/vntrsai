import type { Metadata } from 'next';
import Link from 'next/link';
import { type Locale, getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { BulletList } from '@/components/ui/BulletList';
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
    title: dict.services.consulting.title,
    description: dict.services.consulting.metaDescription,
  };
}

export default async function AIConsultingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const servicesPath = lang === 'sv' ? 'tjanster' : 'services';
  const contactPath = lang === 'sv' ? 'kontakt' : 'contact';
  const industriesPath = lang === 'sv' ? 'branscher' : 'industries';

  const breadcrumbs = [
    { label: lang === 'sv' ? 'Hem' : 'Home', href: `/${lang}` },
    { label: dict.nav.services, href: `/${lang}/${servicesPath}` },
    { label: dict.home.offerings.consulting.title },
  ];

  const whoItsFor = lang === 'sv'
    ? [
        'Ledningsgrupper som vill förstå AI-möjligheter',
        'Operativa team som vill automatisera repetitiva uppgifter',
        'Produktteam som vill integrera AI i sina tjänster',
        'Organisationer som behöver GDPR-säker AI-implementation',
      ]
    : [
        'Leadership teams looking to understand AI opportunities',
        'Operations teams wanting to automate repetitive tasks',
        'Product teams looking to integrate AI into their services',
        'Organizations needing GDPR-compliant AI implementation',
      ];

  const outcomes = lang === 'sv'
    ? [
        'Tydlig prioriterad lista över AI use cases för er verksamhet',
        'Fungerande prototyper och proof-of-concepts',
        'Dokumenterade arbetsflöden med AI-agenter',
        'Team som förstår och kan underhålla lösningarna',
        'Governance-ramverk för ansvarsfull AI-användning',
      ]
    : [
        'Clear prioritized list of AI use cases for your business',
        'Working prototypes and proof-of-concepts',
        'Documented workflows with AI agents',
        'Team members who understand and can maintain the solutions',
        'Governance framework for responsible AI use',
      ];

  const process = lang === 'sv'
    ? ['Upptäck', 'Prioritera', 'Prototypa', 'Implementera', 'Enablement']
    : ['Discover', 'Prioritize', 'Prototype', 'Implement', 'Enable'];

  const faqs = lang === 'sv'
    ? [
        { question: 'Hur lång tid tar ett typiskt konsultuppdrag?', answer: 'Från en veckas discovery till 3 månaders full implementation. Vi börjar alltid med en kortare discovery-fas för att förstå era behov.' },
        { question: 'Kan ni arbeta med våra befintliga system?', answer: 'Ja, vi integrerar med era befintliga verktyg och system. Vi har erfarenhet av de flesta större plattformar och kan bygga skräddarsydda integrationer.' },
        { question: 'Hur hanterar ni GDPR och datasäkerhet?', answer: 'Vi designar alltid lösningar med GDPR i åtanke. Vi kan köra lokala modeller, anonymisera data och dokumentera alla dataflöden.' },
        { question: 'Vad händer efter projektet är klart?', answer: 'Vi överlämnar dokumentation och tränar ert team. Vi erbjuder också löpande support och vidareutveckling vid behov.' },
        { question: 'Arbetar ni med proof-of-concept först?', answer: 'Ja, vi rekommenderar alltid att börja med ett avgränsat PoC för att validera värde innan full implementation.' },
        { question: 'Kan ni hjälpa oss välja rätt AI-modeller?', answer: 'Absolut. Vi utvärderar kostnader, prestanda, säkerhet och compliance för att rekommendera rätt modeller för era use cases.' },
        { question: 'Hur mäter ni framgång?', answer: 'Vi definierar tydliga KPIer tillsammans med er i början av projektet—tid sparad, kostnadsminskning, kvalitetsförbättringar, etc.' },
        { question: 'Erbjuder ni workshops som del av konsultingen?', answer: 'Ja, vi börjar ofta med en workshop för att kartlägga möjligheter innan vi går vidare med djupare konsulting.' },
      ]
    : [
        { question: 'How long does a typical consulting engagement take?', answer: 'From one week of discovery to 3 months of full implementation. We always start with a shorter discovery phase to understand your needs.' },
        { question: 'Can you work with our existing systems?', answer: 'Yes, we integrate with your existing tools and systems. We have experience with most major platforms and can build custom integrations.' },
        { question: 'How do you handle GDPR and data security?', answer: 'We always design solutions with GDPR in mind. We can run local models, anonymize data, and document all data flows.' },
        { question: 'What happens after the project is complete?', answer: 'We hand over documentation and train your team. We also offer ongoing support and further development as needed.' },
        { question: 'Do you work with proof-of-concept first?', answer: 'Yes, we always recommend starting with a scoped PoC to validate value before full implementation.' },
        { question: 'Can you help us choose the right AI models?', answer: 'Absolutely. We evaluate costs, performance, security, and compliance to recommend the right models for your use cases.' },
        { question: 'How do you measure success?', answer: 'We define clear KPIs together with you at the start of the project—time saved, cost reduction, quality improvements, etc.' },
        { question: 'Do you offer workshops as part of consulting?', answer: 'Yes, we often start with a workshop to map opportunities before moving into deeper consulting work.' },
      ];

  const industries = [
    {
      name: lang === 'sv' ? 'Eventbranschen' : 'Event Industry',
      href: `/${lang}/${industriesPath}/${lang === 'sv' ? 'eventbranschen' : 'event-industry'}`,
    },
    {
      name: 'Private Equity',
      href: `/${lang}/${industriesPath}/private-equity`,
    },
    {
      name: lang === 'sv' ? 'Nischad SaaS' : 'Niche SaaS',
      href: `/${lang}/${industriesPath}/${lang === 'sv' ? 'nischad-saas' : 'niche-saas'}`,
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: dict.services.consulting.title,
    serviceType: 'AI Consulting',
    provider: {
      '@type': 'Organization',
      name: 'VNTRS AI',
    },
    areaServed: 'SE',
    offers: {
      '@type': 'Offer',
      url: `https://vntrs.ai/${lang}/${lang === 'sv' ? 'tjanster/ai-konsulting' : 'services/ai-consulting'}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <Hero
        title={dict.services.consulting.h1}
        subtitle={dict.services.consulting.heroSub}
        primaryCta={{
          text: dict.common.bookIntro,
          href: `/${lang}/${contactPath}`,
        }}
      />

      {/* Who it's for */}
      <Section title={lang === 'sv' ? 'Vem det passar' : 'Who it\'s for'}>
        <div className="max-w-2xl mx-auto">
          <BulletList items={whoItsFor} icon="arrow" />
        </div>
      </Section>

      {/* Outcomes */}
      <Section title={lang === 'sv' ? 'Vad ni får' : 'Outcomes'} background="gray">
        <div className="max-w-2xl mx-auto">
          <BulletList items={outcomes} icon="check" />
        </div>
      </Section>

      {/* Deliverables */}
      <Section title={lang === 'sv' ? 'Leverabler' : 'Deliverables'}>
        <div className="max-w-2xl mx-auto">
          <BulletList items={dict.services.consulting.keyPoints} icon="check" />
        </div>
      </Section>

      {/* Process */}
      <Section title={lang === 'sv' ? 'Vårt arbetssätt' : 'Our process'} background="gray">
        <ProcessSteps steps={process} />
      </Section>

      {/* Where this works best - Industry links */}
      <Section title={lang === 'sv' ? 'Branscher vi fokuserar på' : 'Where this works best'}>
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              href={industry.href}
              className="rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              {industry.name}
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section title={lang === 'sv' ? 'Vanliga frågor' : 'Frequently asked questions'} background="gray">
        <div className="max-w-3xl mx-auto">
          <FAQ items={faqs} schemaId="consulting-faq" />
        </div>
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

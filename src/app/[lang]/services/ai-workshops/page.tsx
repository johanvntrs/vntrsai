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
    title: dict.services.workshops.title,
    description: dict.services.workshops.metaDescription,
  };
}

export default async function AIWorkshopsPage({
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
    { label: dict.home.offerings.workshop.title },
  ];

  const whoItsFor = lang === 'sv'
    ? [
        'Ledningsgrupper som vill förstå AI-möjligheter',
        'Team som behöver prioritera bland många AI-idéer',
        'Organisationer som vill kickstarta sin AI-resa',
        'Företag som behöver alignment kring AI-strategi',
      ]
    : [
        'Leadership teams wanting to understand AI opportunities',
        'Teams needing to prioritize among many AI ideas',
        'Organizations wanting to kickstart their AI journey',
        'Companies needing alignment around AI strategy',
      ];

  const outcomes = lang === 'sv'
    ? [
        '3–5 prioriterade use cases rankade efter Impact × Effort',
        'Gemensam förståelse för AI-möjligheter i teamet',
        'Konkret roadmap för nästa 30/60/90 dagar',
        'Dokumentation att dela med resten av organisationen',
      ]
    : [
        '3–5 prioritized use cases ranked by Impact × Effort',
        'Shared understanding of AI opportunities across the team',
        'Concrete roadmap for the next 30/60/90 days',
        'Documentation to share with the rest of the organization',
      ];

  const faqs = lang === 'sv'
    ? [
        { question: 'Vem bör delta?', answer: 'Ledning plus 2–6 operatörer från nyckelarbetsflöden. Ha med personer som känner till de dagliga processerna och smärtpunkterna.' },
        { question: 'Behöver vi förbereda data?', answer: 'Nej, men det hjälper om ni kan beskriva era arbetsflöden och pain points i förväg. Vi skickar en kort förberedelseenkät.' },
        { question: 'Kan ni köra detta GDPR-säkert / med lokala modeller?', answer: 'Ja, vi kan demonstrera lokala AI-modeller som körs helt på era egna servrar och diskutera GDPR-säkra implementationer.' },
        { question: 'Vad händer efter workshopen?', answer: 'Ni får en dokumenterad roadmap och kan boka uppföljande konsulting för implementation. Vi finns tillgängliga för frågor.' },
        { question: 'Hur lång tid tar workshopen?', answer: '2 timmar är standard. Vi kan anpassa till 3 timmar om ni har komplexa arbetsflöden eller vill gå djupare.' },
        { question: 'Kan workshopen köras på distans?', answer: 'Ja, vi kör workshops både på plats och digitalt via Teams/Zoom. Fysiska workshops ger ofta bättre energi.' },
        { question: 'Vad kostar en workshop?', answer: 'Kontakta oss för prisuppgift. Priset beror på förberedelser, deltagare och om det är fysiskt eller digitalt.' },
        { question: 'Passar detta för ett litet team?', answer: 'Ja, vi har kört workshops för allt från 3 till 20 deltagare. Formatet anpassas efter gruppstorlek.' },
        { question: 'Vilka demos visar ni?', answer: 'Vi anpassar demos efter er bransch—dokumentbearbetning, automatisering, AI-agenter, chatbotar, etc.' },
        { question: 'Får vi en inspelning av workshopen?', answer: 'Vid digitala workshops kan vi spela in om ni önskar. Ni får alltid dokumentation och slides efteråt.' },
        { question: 'Kan ni kombinera workshop med föreläsning?', answer: 'Absolut. Många väljer att börja med en 1-timmes inspirationsföreläsning och sedan köra workshop samma dag.' },
        { question: 'Behöver vi teknisk personal på plats?', answer: 'Nej, workshopen kräver ingen teknisk bakgrund. Vi förklarar allt i affärstermer.' },
      ]
    : [
        { question: 'Who should attend?', answer: 'Leadership plus 2–6 operators from key workflows. Include people who know the daily processes and pain points.' },
        { question: 'Do we need data prepared?', answer: 'No, but it helps if you can describe your workflows and pain points beforehand. We send a short preparation survey.' },
        { question: 'Can you run this GDPR-safe / with local models?', answer: 'Yes, we can demonstrate local AI models that run entirely on your own servers and discuss GDPR-compliant implementations.' },
        { question: 'What happens after the workshop?', answer: 'You receive a documented roadmap and can book follow-up consulting for implementation. We are available for questions.' },
        { question: 'How long is the workshop?', answer: '2 hours is standard. We can extend to 3 hours if you have complex workflows or want to go deeper.' },
        { question: 'Can the workshop be run remotely?', answer: 'Yes, we run workshops both on-site and digitally via Teams/Zoom. Physical workshops often generate better energy.' },
        { question: 'What does a workshop cost?', answer: 'Contact us for pricing. The cost depends on preparation, participants, and whether it is physical or digital.' },
        { question: 'Is this suitable for a small team?', answer: 'Yes, we have run workshops for anywhere from 3 to 20 participants. The format adapts to group size.' },
        { question: 'What demos do you show?', answer: 'We customize demos for your industry—document processing, automation, AI agents, chatbots, etc.' },
        { question: 'Do we get a recording of the workshop?', answer: 'For digital workshops, we can record if you wish. You always receive documentation and slides afterward.' },
        { question: 'Can you combine workshop with a talk?', answer: 'Absolutely. Many choose to start with a 1-hour inspiration talk and then run the workshop the same day.' },
        { question: 'Do we need technical staff present?', answer: 'No, the workshop requires no technical background. We explain everything in business terms.' },
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
    name: dict.services.workshops.title,
    serviceType: 'AI Workshop',
    provider: {
      '@type': 'Organization',
      name: 'VNTRS AI',
    },
    areaServed: 'SE',
    offers: {
      '@type': 'Offer',
      url: `https://vntrs.ai/${lang}/${lang === 'sv' ? 'tjanster' : 'services'}/ai-workshops`,
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
        title={dict.services.workshops.h1}
        subtitle={dict.services.workshops.heroSub}
        primaryCta={{
          text: lang === 'sv' ? 'Boka workshop' : 'Book workshop',
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
      <Section title={lang === 'sv' ? 'Resultat' : 'Outcomes'} background="gray">
        <div className="max-w-2xl mx-auto">
          <BulletList items={outcomes} icon="check" />
        </div>
      </Section>

      {/* What you get */}
      <Section title={lang === 'sv' ? 'Det här får ni' : 'What you get'}>
        <div className="max-w-2xl mx-auto">
          <BulletList items={dict.services.workshops.whatYouGet} icon="check" />
        </div>
      </Section>

      {/* Agenda */}
      <Section title={lang === 'sv' ? 'Agenda' : 'Agenda'} background="gray">
        <ProcessSteps steps={dict.services.workshops.agenda} />
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
          <FAQ items={faqs} schemaId="workshop-faq" />
        </div>
      </Section>

      <CTA
        title={dict.home.footerCta}
        primaryCta={{
          text: lang === 'sv' ? 'Boka workshop' : 'Book workshop',
          href: `/${lang}/${contactPath}`,
        }}
      />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { type Locale, getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { BulletList } from '@/components/ui/BulletList';
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
    title: dict.services.talks.title,
    description: dict.services.talks.metaDescription,
  };
}

export default async function AITalksPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const servicesPath = lang === 'sv' ? 'tjanster' : 'services';
  const contactPath = lang === 'sv' ? 'kontakt' : 'contact';

  const breadcrumbs = [
    { label: lang === 'sv' ? 'Hem' : 'Home', href: `/${lang}` },
    { label: dict.nav.services, href: `/${lang}/${servicesPath}` },
    { label: dict.home.offerings.talk.title },
  ];

  const whoItsFor = lang === 'sv'
    ? [
        'Ledningsgrupper som behöver AI-översikt',
        'Team som vill förstå möjligheterna',
        'Kickoff-events och konferenser',
        'Styrelsemöten och strategidagar',
      ]
    : [
        'Leadership teams needing an AI overview',
        'Teams wanting to understand the opportunities',
        'Kickoff events and conferences',
        'Board meetings and strategy days',
      ];

  const topics = lang === 'sv'
    ? [
        'Senaste AI-trenderna och vad de betyder för er bransch',
        'Praktiska demonstrationer av AI-verktyg och agenter',
        'Konkreta exempel från liknande organisationer',
        'Diskussion om möjligheter specifika för ert team',
        'Översikt av lokala vs molnbaserade AI-modeller',
        'GDPR-överväganden och ansvarsfull AI',
      ]
    : [
        'Latest AI trends and what they mean for your industry',
        'Practical demonstrations of AI tools and agents',
        'Real examples from similar organizations',
        'Discussion of opportunities specific to your team',
        'Overview of local vs cloud-based AI models',
        'GDPR considerations and responsible AI',
      ];

  const outcomes = lang === 'sv'
    ? [
        'Gemensam förståelse för AI-landskapet',
        'Inspiration och idéer för nästa steg',
        'Demomaterial att visa kollegor',
        'Möjlighet till Q&A med expert',
      ]
    : [
        'Shared understanding of the AI landscape',
        'Inspiration and ideas for next steps',
        'Demo materials to show colleagues',
        'Opportunity for Q&A with an expert',
      ];

  const faqs = lang === 'sv'
    ? [
        { question: 'Hur lång är föreläsningen?', answer: '1 timme är standard, inklusive Q&A. Vi kan anpassa till 45 min eller 90 min beroende på behov.' },
        { question: 'Kan föreläsningen anpassas till vår bransch?', answer: 'Ja, vi anpassar alltid innehåll och demos efter er bransch och de frågor ni har.' },
        { question: 'Fungerar det digitalt?', answer: 'Ja, vi kör föreläsningar både på plats och digitalt. Fysiskt ger bättre engagemang men digitalt fungerar utmärkt.' },
        { question: 'Vilken teknisk nivå har föreläsningen?', answer: 'Vi anpassar efter publiken. Vanligtvis riktar vi oss mot beslutsfattare och förklarar i affärstermer.' },
        { question: 'Kan ni kombinera med workshop?', answer: 'Absolut, det är populärt att köra en föreläsning på förmiddagen och workshop på eftermiddagen.' },
        { question: 'Vad kostar en föreläsning?', answer: 'Kontakta oss för prisuppgift. Priset beror på anpassning, plats och om det kombineras med workshop.' },
        { question: 'Får deltagarna material efteråt?', answer: 'Ja, ni får slides och relevanta resurslänkar efter föreläsningen.' },
        { question: 'Hur många kan delta?', answer: 'Ingen övre gräns—vi har hållit föreläsningar för allt från 5 till 500 personer.' },
      ]
    : [
        { question: 'How long is the talk?', answer: '1 hour is standard, including Q&A. We can adjust to 45 min or 90 min depending on needs.' },
        { question: 'Can the talk be customized to our industry?', answer: 'Yes, we always customize content and demos to your industry and the questions you have.' },
        { question: 'Does it work digitally?', answer: 'Yes, we run talks both on-site and digitally. Physical creates better engagement but digital works great.' },
        { question: 'What technical level is the talk?', answer: 'We adapt to the audience. Usually we target decision-makers and explain in business terms.' },
        { question: 'Can you combine with a workshop?', answer: 'Absolutely, it is popular to run a talk in the morning and workshop in the afternoon.' },
        { question: 'What does a talk cost?', answer: 'Contact us for pricing. The cost depends on customization, location, and whether combined with a workshop.' },
        { question: 'Do participants get materials afterward?', answer: 'Yes, you receive slides and relevant resource links after the talk.' },
        { question: 'How many can attend?', answer: 'No upper limit—we have held talks for anywhere from 5 to 500 people.' },
      ];

  const relatedServices = [
    {
      name: lang === 'sv' ? 'AI-workshop' : 'AI Workshop',
      description: lang === 'sv' ? 'Gå djupare med en heldags interaktiv session' : 'Go deeper with a full-day interactive session',
      href: `/${lang}/${servicesPath}/ai-workshops`,
    },
    {
      name: lang === 'sv' ? 'AI-utbildning' : 'AI Training',
      description: lang === 'sv' ? 'Djupare AI-utbildning för er ledningsgrupp' : 'Deeper AI training for your leadership team',
      href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-utbildning' : 'ai-training'}`,
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: dict.services.talks.title,
    serviceType: 'AI Inspiration Talk',
    provider: {
      '@type': 'Organization',
      name: 'VNTRS AI',
    },
    areaServed: 'SE',
    offers: {
      '@type': 'Offer',
      url: `https://vntrs.ai/${lang}/${lang === 'sv' ? 'tjanster/ai-inspirationsforelasning' : 'services/ai-inspiration-talks'}`,
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
        title={dict.services.talks.h1}
        subtitle={dict.services.talks.heroSub}
        primaryCta={{
          text: lang === 'sv' ? 'Boka föreläsning' : 'Book a talk',
          href: `/${lang}/${contactPath}`,
        }}
      />

      {/* Who it's for */}
      <Section title={lang === 'sv' ? 'Vem det passar' : 'Who it\'s for'}>
        <div className="max-w-2xl mx-auto">
          <BulletList items={whoItsFor} icon="arrow" />
        </div>
      </Section>

      {/* What's included */}
      <Section title={lang === 'sv' ? 'Vad som ingår' : 'What\'s included'} background="gray">
        <div className="max-w-2xl mx-auto">
          <BulletList items={topics} icon="check" />
        </div>
      </Section>

      {/* Outcomes */}
      <Section title={lang === 'sv' ? 'Vad ni får' : 'Outcomes'}>
        <div className="max-w-2xl mx-auto">
          <BulletList items={outcomes} icon="check" />
        </div>
      </Section>

      {/* Next steps */}
      <Section title={lang === 'sv' ? 'Vill ni gå vidare?' : 'Want to go further?'} background="gray">
        <div className="max-w-2xl mx-auto space-y-4">
          {relatedServices.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="block p-6 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="font-medium text-gray-900">{service.name}</div>
              <div className="mt-1 text-sm text-gray-600">{service.description}</div>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section title={lang === 'sv' ? 'Vanliga frågor' : 'Frequently asked questions'}>
        <div className="max-w-3xl mx-auto">
          <FAQ items={faqs} schemaId="talks-faq" />
        </div>
      </Section>

      <CTA
        title={dict.home.footerCta}
        primaryCta={{
          text: lang === 'sv' ? 'Boka föreläsning' : 'Book a talk',
          href: `/${lang}/${contactPath}`,
        }}
      />
    </>
  );
}

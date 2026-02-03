import type { Metadata } from 'next';
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

export default async function AITrainingPage({
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
    { label: dict.home.offerings.consulting.title },
  ];

  const whoItsFor = lang === 'sv'
    ? [
        'C-suite som utvärderar AI-investeringar',
        'Avdelningschefer som implementerar AI i sina team',
        'Styrelseledamöter som behöver AI-kompetens',
        'Ledningsgrupper som driver digital transformation',
      ]
    : [
        'C-suite executives evaluating AI investments',
        'Department heads implementing AI in their teams',
        'Board members needing AI literacy',
        'Management teams driving digital transformation',
      ];

  const outcomes = lang === 'sv'
    ? [
        'Säkra AI-beslut på ledningsnivå',
        'Tydlig förståelse för AI:s möjligheter och begränsningar',
        'Praktiska färdigheter att utvärdera AI-lösningar',
        'Ramverk för ansvarsfull AI-adoption',
        'Förmåga att leda AI-initiativ effektivt',
      ]
    : [
        'Confident AI decision-making at leadership level',
        'Clear understanding of AI capabilities and limitations',
        'Practical skills to evaluate AI solutions',
        'Framework for responsible AI adoption',
        'Ability to lead AI initiatives effectively',
      ];

  const process = lang === 'sv'
    ? ['Kartlägg', 'Designa', 'Leverera', 'Tillämpa', 'Följ upp']
    : ['Assess', 'Design', 'Deliver', 'Apply', 'Follow-up'];

  const processDescriptions = lang === 'sv'
    ? [
        'Förstå er organisations AI-mognad och mål',
        'Skapa anpassat innehåll för er ledningsgrupp',
        'Hybridsessioner som kombinerar fysiskt och digitalt',
        'Praktiska övningar med verkliga affärsscenarier',
        'Stöd och resurser för fortsatt lärande',
      ]
    : [
        'Understand your organization\'s AI maturity and goals',
        'Create customized curriculum for your leadership team',
        'Hybrid sessions combining on-site and online learning',
        'Hands-on exercises with real business scenarios',
        'Support and resources for continued learning',
      ];

  const faqs = lang === 'sv'
    ? [
        { question: 'Hur levereras utbildningen?', answer: 'Vi erbjuder flexibla format: på plats hos er, online, eller en kombination av båda. Formatet anpassas efter era behov och deltagarnas tillgänglighet.' },
        { question: 'Hur lång är utbildningen?', answer: 'Längden anpassas efter era mål. Det kan vara allt från en halvdag för en introduktion till ett flertal sessioner över flera veckor för djupare kompetensbyggande.' },
        { question: 'Vilken förkunskap krävs?', answer: 'Ingen teknisk bakgrund krävs. Utbildningen är designad för beslutsfattare och fokuserar på strategiska och praktiska aspekter av AI.' },
        { question: 'Kan innehållet anpassas efter vår bransch?', answer: 'Ja, vi skräddarsyr alltid innehåll och exempel efter er bransch och de specifika utmaningar ni står inför.' },
        { question: 'Vad ingår i utbildningen?', answer: 'AI-strategi, prompt engineering, verktygsöversikt, riskhantering och praktiska övningar. Ni får även material och resurser för fortsatt lärande.' },
        { question: 'Hur många kan delta?', answer: 'Vi rekommenderar grupper om 5-15 personer för bästa interaktion, men kan anpassa för större grupper vid behov.' },
        { question: 'Erbjuder ni uppföljning?', answer: 'Ja, vi erbjuder uppföljningssessioner och löpande stöd för att säkerställa att kunskapen implementeras i praktiken.' },
        { question: 'Hur mäter ni effekten av utbildningen?', answer: 'Vi sätter tydliga mål i början och följer upp med deltagarna för att mäta kunskapsökning och praktisk tillämpning.' },
      ]
    : [
        { question: 'How is the training delivered?', answer: 'We offer flexible formats: on-site at your location, online, or a combination of both. The format is adapted to your needs and participants\' availability.' },
        { question: 'How long is the training?', answer: 'Duration is customized to your goals. It can range from a half-day introduction to multiple sessions over several weeks for deeper skill building.' },
        { question: 'What prior knowledge is required?', answer: 'No technical background required. The training is designed for decision-makers and focuses on strategic and practical aspects of AI.' },
        { question: 'Can the content be customized to our industry?', answer: 'Yes, we always tailor content and examples to your industry and the specific challenges you face.' },
        { question: 'What\'s included in the training?', answer: 'AI strategy, prompt engineering, tool landscape overview, risk management, and hands-on exercises. You also receive materials and resources for continued learning.' },
        { question: 'How many can participate?', answer: 'We recommend groups of 5-15 people for best interaction, but can adapt for larger groups when needed.' },
        { question: 'Do you offer follow-up?', answer: 'Yes, we offer follow-up sessions and ongoing support to ensure the knowledge is implemented in practice.' },
        { question: 'How do you measure the impact of the training?', answer: 'We set clear goals at the start and follow up with participants to measure knowledge gains and practical application.' },
      ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: dict.services.consulting.title,
    serviceType: 'AI Training',
    provider: {
      '@type': 'Organization',
      name: 'VNTRS AI',
    },
    areaServed: 'SE',
    offers: {
      '@type': 'Offer',
      url: `https://vntrs.ai/${lang}/${lang === 'sv' ? 'tjanster/ai-utbildning' : 'services/ai-training'}`,
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
      <Section title={lang === 'sv' ? 'Innehåll' : 'What\'s included'}>
        <div className="max-w-2xl mx-auto">
          <BulletList items={dict.services.consulting.keyPoints} icon="check" />
        </div>
      </Section>

      {/* Process */}
      <Section title={lang === 'sv' ? 'Vårt upplägg' : 'Our approach'} background="gray">
        <ProcessSteps steps={process} />
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processDescriptions.map((desc, index) => (
              <div key={index} className="text-center text-sm text-gray-600">
                {desc}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section title={lang === 'sv' ? 'Vanliga frågor' : 'Frequently asked questions'}>
        <div className="max-w-3xl mx-auto">
          <FAQ items={faqs} schemaId="training-faq" />
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

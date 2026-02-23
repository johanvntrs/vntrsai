import type { Metadata } from 'next';
import Link from 'next/link';
import { type Locale, getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServiceHero } from '@/components/ui/ServiceHero';
import { Section } from '@/components/ui/Section';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { Stats } from '@/components/ui/Stats';
import { BulletList } from '@/components/ui/BulletList';
import { TestimonialCard } from '@/components/ui/Testimonial';
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

  const badges = lang === 'sv'
    ? ['1 timme', 'Anpassad för er bransch', 'På plats eller digitalt']
    : ['1 hour', 'Customized for your industry', 'On-site or remote'];

  const highlights = lang === 'sv'
    ? [
        { icon: 'clock' as const, text: '45-90 min flexibelt format' },
        { icon: 'users' as const, text: '5-500 deltagare' },
        { icon: 'check' as const, text: 'Inkl. live-demos' },
      ]
    : [
        { icon: 'clock' as const, text: '45-90 min flexible format' },
        { icon: 'users' as const, text: '5-500 participants' },
        { icon: 'check' as const, text: 'Incl. live demos' },
      ];

  const stats = lang === 'sv'
    ? [
        { value: '100+', label: 'Genomförda föreläsningar' },
        { value: '4.9', label: 'Genomsnittligt betyg' },
        { value: '500', label: 'Max antal deltagare' },
        { value: '1h', label: 'Standardformat' },
      ]
    : [
        { value: '100+', label: 'Talks delivered' },
        { value: '4.9', label: 'Average rating' },
        { value: '500', label: 'Max participants' },
        { value: '1h', label: 'Standard format' },
      ];

  const whoItsForFeatures = lang === 'sv'
    ? [
        { icon: 'users' as const, title: 'Ledningsgrupper', description: 'Som behöver en snabb men djup AI-översikt för strategiska beslut' },
        { icon: 'rocket' as const, title: 'Kickoff-events', description: 'Perfekt för att inspirera hela organisationen på konferenser och events' },
        { icon: 'chart' as const, title: 'Strategidagar', description: 'Ge styrelsen och ledningen en uppdaterad bild av AI-möjligheter' },
        { icon: 'lightbulb' as const, title: 'Team-möten', description: 'Spark av idéer och skapa engagemang kring AI i mindre grupper' },
      ]
    : [
        { icon: 'users' as const, title: 'Leadership teams', description: 'Needing a quick but deep AI overview for strategic decisions' },
        { icon: 'rocket' as const, title: 'Kickoff events', description: 'Perfect for inspiring the entire organization at conferences and events' },
        { icon: 'chart' as const, title: 'Strategy days', description: 'Give the board and leadership an updated view of AI opportunities' },
        { icon: 'lightbulb' as const, title: 'Team meetings', description: 'Spark ideas and create engagement around AI in smaller groups' },
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
        { icon: 'lightbulb' as const, title: 'Gemensam förståelse', description: 'Hela teamet får samma bild av AI-landskapet och möjligheterna' },
        { icon: 'sparkles' as const, title: 'Inspiration och idéer', description: 'Konkreta exempel som väcker tankar om vad ni kan åstadkomma' },
        { icon: 'document' as const, title: 'Material att dela', description: 'Slides och resurslänkar att sprida vidare i organisationen' },
        { icon: 'users' as const, title: 'Q&A med expert', description: 'Möjlighet att ställa era specifika frågor direkt' },
      ]
    : [
        { icon: 'lightbulb' as const, title: 'Shared understanding', description: 'The whole team gets the same picture of the AI landscape and opportunities' },
        { icon: 'sparkles' as const, title: 'Inspiration and ideas', description: 'Concrete examples that spark thoughts about what you can achieve' },
        { icon: 'document' as const, title: 'Materials to share', description: 'Slides and resource links to spread further in the organization' },
        { icon: 'users' as const, title: 'Q&A with expert', description: 'Opportunity to ask your specific questions directly' },
      ];

  const testimonial = lang === 'sv'
    ? {
        quote: 'Den bästa AI-föreläsningen jag varit på. Ingen fluff, bara konkreta exempel och demos som verkligen visade vad som är möjligt. Halva ledningsgruppen ville boka workshop direkt efteråt.',
        author: 'Erik Svensson',
        role: 'VD',
        company: 'Nordic Solutions',
      }
    : {
        quote: 'The best AI talk I have attended. No fluff, just concrete examples and demos that really showed what is possible. Half the leadership team wanted to book a workshop right after.',
        author: 'Erik Svensson',
        role: 'CEO',
        company: 'Nordic Solutions',
      };

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
      name: 'AI Opportunity Session',
      description: lang === 'sv' ? 'Nästa steg efter föreläsningen: prioritera 2-3 konkreta AI-initiativ' : 'Next step after the talk: prioritize 2-3 concrete AI initiatives',
      href: `/${lang}/${servicesPath}/ai-opportunity-session`,
    },
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

      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <ServiceHero
        title={dict.services.talks.h1}
        subtitle={dict.services.talks.heroSub}
        badges={badges}
        highlights={highlights}
        primaryCta={{
          text: lang === 'sv' ? 'Boka föreläsning' : 'Book a talk',
          href: `/${lang}/${contactPath}`,
        }}
        secondaryCta={{
          text: lang === 'sv' ? 'Se ämnen' : 'See topics',
          href: '#topics',
        }}
      />

      {/* Stats */}
      <Section background="gray">
        <Stats stats={stats} variant="cards" />
      </Section>

      {/* Who it's for */}
      <Section
        title={lang === 'sv' ? 'Perfekt för' : 'Perfect for'}
        subtitle={lang === 'sv' ? 'En föreläsning som passar olika sammanhang och publiker' : 'A talk that fits different contexts and audiences'}
      >
        <FeatureGrid features={whoItsForFeatures} columns={4} />
      </Section>

      {/* What's included */}
      <Section
        title={lang === 'sv' ? 'Vad som ingår' : "What's included"}
        subtitle={lang === 'sv' ? 'En timme fullspäckad med insikter och praktiska exempel' : 'One hour packed with insights and practical examples'}
        background="gray"
      >
        <div id="topics" className="max-w-4xl mx-auto">
          <BulletList items={topics} icon="check" variant="showcase" />
        </div>
      </Section>

      {/* Outcomes */}
      <Section
        title={lang === 'sv' ? 'Vad ni får med er' : 'What you take away'}
        subtitle={lang === 'sv' ? 'Konkreta resultat efter föreläsningen' : 'Concrete results after the talk'}
      >
        <FeatureGrid features={outcomes} columns={4} />
      </Section>

      {/* Testimonial */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <TestimonialCard {...testimonial} />
        </div>
      </Section>

      {/* Next steps */}
      <Section
        title={lang === 'sv' ? 'Vill ni gå vidare?' : 'Want to go further?'}
        subtitle={lang === 'sv' ? 'Kombinera föreläsningen med våra andra tjänster' : 'Combine the talk with our other services'}
      >
        <div className="max-w-2xl mx-auto space-y-4">
          {relatedServices.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="group block rounded-3xl border border-[var(--border)] bg-[linear-gradient(170deg,#ffffff_0%,#f7f9fc_100%)] p-6 shadow-[0_20px_36px_-32px_rgba(26,35,55,0.9)] transition-all hover:-translate-y-0.5 hover:shadow-[0_28px_46px_-34px_rgba(26,35,55,0.8)]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)]">{service.name}</div>
                  <div className="mt-1 text-sm text-[var(--muted)]">{service.description}</div>
                </div>
                <svg className="h-5 w-5 text-[var(--muted)]/75 transition-colors group-hover:text-[var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        title={lang === 'sv' ? 'Vanliga frågor' : 'Frequently asked questions'}
        background="gray"
      >
        <div className="max-w-3xl mx-auto">
          <FAQ items={faqs} schemaId="talks-faq" />
        </div>
      </Section>

      <CTA
        title={lang === 'sv' ? 'Ge ert team en AI-injektion' : 'Give your team an AI injection'}
        description={lang === 'sv' ? 'Boka en inspirationsföreläsning och skapa engagemang kring AI.' : 'Book an inspiration talk and create engagement around AI.'}
        primaryCta={{
          text: lang === 'sv' ? 'Boka föreläsning' : 'Book a talk',
          href: `/${lang}/${contactPath}`,
        }}
      />
    </>
  );
}

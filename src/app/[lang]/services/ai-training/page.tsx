import type { Metadata } from 'next';
import Link from 'next/link';
import { type Locale, getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServiceHero } from '@/components/ui/ServiceHero';
import { Section } from '@/components/ui/Section';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { Stats } from '@/components/ui/Stats';
import { AgendaBlocks } from '@/components/ui/Timeline';
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

  const badges = lang === 'sv'
    ? ['Skräddarsytt program', 'På plats eller online', 'För ledningsgrupper']
    : ['Customized program', 'On-site or online', 'For leadership teams'];

  const highlights = lang === 'sv'
    ? [
        { icon: 'clock' as const, text: 'Flexibel längd' },
        { icon: 'users' as const, text: '5-15 deltagare' },
        { icon: 'target' as const, text: 'Praktiska övningar' },
      ]
    : [
        { icon: 'clock' as const, text: 'Flexible duration' },
        { icon: 'users' as const, text: '5-15 participants' },
        { icon: 'target' as const, text: 'Hands-on exercises' },
      ];

  const stats = lang === 'sv'
    ? [
        { value: '200+', label: 'Utbildade ledare' },
        { value: '95%', label: 'Rekommenderar oss' },
        { value: '40+', label: 'Företag' },
        { value: '4.9', label: 'Snittbetyg' },
      ]
    : [
        { value: '200+', label: 'Leaders trained' },
        { value: '95%', label: 'Recommend us' },
        { value: '40+', label: 'Companies' },
        { value: '4.9', label: 'Avg. rating' },
      ];

  const whoItsForFeatures = lang === 'sv'
    ? [
        { icon: 'users' as const, title: 'C-suite & VD', description: 'Som utvärderar AI-investeringar och sätter strategisk riktning' },
        { icon: 'chart' as const, title: 'Avdelningschefer', description: 'Som ska implementera AI i sina team och processer' },
        { icon: 'shield' as const, title: 'Styrelseledamöter', description: 'Som behöver AI-kompetens för informerade beslut' },
        { icon: 'rocket' as const, title: 'Ledningsgrupper', description: 'Som driver digital transformation och innovation' },
      ]
    : [
        { icon: 'users' as const, title: 'C-suite & CEO', description: 'Evaluating AI investments and setting strategic direction' },
        { icon: 'chart' as const, title: 'Department heads', description: 'Implementing AI in their teams and processes' },
        { icon: 'shield' as const, title: 'Board members', description: 'Needing AI literacy for informed decisions' },
        { icon: 'rocket' as const, title: 'Leadership teams', description: 'Driving digital transformation and innovation' },
      ];

  const curriculum = lang === 'sv'
    ? [
        { icon: 'lightbulb' as const, title: 'AI-strategi för ledare', description: 'Förstå AI-landskapet, identifiera möjligheter och skapa en hållbar AI-strategi' },
        { icon: 'sparkles' as const, title: 'Prompt Engineering', description: 'Praktiska tekniker för att få ut maximalt värde från AI-verktyg' },
        { icon: 'chart' as const, title: 'Verktygslandskapet', description: 'Överblick av tillgängliga AI-verktyg och hur ni väljer rätt för era behov' },
        { icon: 'shield' as const, title: 'Risk & Governance', description: 'GDPR, etik, säkerhet och ramverk för ansvarsfull AI-adoption' },
      ]
    : [
        { icon: 'lightbulb' as const, title: 'AI Strategy for Leaders', description: 'Understand the AI landscape, identify opportunities, and create a sustainable AI strategy' },
        { icon: 'sparkles' as const, title: 'Prompt Engineering', description: 'Practical techniques to get maximum value from AI tools' },
        { icon: 'chart' as const, title: 'Tool Landscape', description: 'Overview of available AI tools and how to choose the right ones for your needs' },
        { icon: 'shield' as const, title: 'Risk & Governance', description: 'GDPR, ethics, security, and frameworks for responsible AI adoption' },
      ];

  const outcomes = lang === 'sv'
    ? [
        { icon: 'check' as const, title: 'Säkra AI-beslut', description: 'Fatta informerade beslut om AI-investeringar och initiativ på ledningsnivå' },
        { icon: 'lightbulb' as const, title: 'Tydlig förståelse', description: 'Förstå AI:s möjligheter, begränsningar och var det skapar mest värde' },
        { icon: 'target' as const, title: 'Praktiska färdigheter', description: 'Utvärdera AI-lösningar och leverantörer med rätt kriterier' },
        { icon: 'rocket' as const, title: 'Leda AI-initiativ', description: 'Driva AI-projekt framåt med rätt kompetens och självförtroende' },
      ]
    : [
        { icon: 'check' as const, title: 'Confident AI decisions', description: 'Make informed decisions about AI investments and initiatives at leadership level' },
        { icon: 'lightbulb' as const, title: 'Clear understanding', description: 'Understand AI capabilities, limitations, and where it creates the most value' },
        { icon: 'target' as const, title: 'Practical skills', description: 'Evaluate AI solutions and vendors with the right criteria' },
        { icon: 'rocket' as const, title: 'Lead AI initiatives', description: 'Drive AI projects forward with the right competence and confidence' },
      ];

  const process = lang === 'sv'
    ? [
        { time: 'Steg 1', title: 'Kartlägg', items: ['Förstå er AI-mognad', 'Identifiera mål och utmaningar', 'Analysera befintliga processer'] },
        { time: 'Steg 2', title: 'Designa', items: ['Skräddarsytt program', 'Branschanpassade exempel', 'Praktiska övningar'] },
        { time: 'Steg 3', title: 'Leverera', items: ['Interaktiva sessioner', 'Hands-on workshops', 'Live-demonstrationer'] },
        { time: 'Steg 4', title: 'Tillämpa & Följ upp', items: ['Implementeringsstöd', 'Uppföljningssessioner', 'Resurser för fortsatt lärande'] },
      ]
    : [
        { time: 'Step 1', title: 'Assess', items: ['Understand your AI maturity', 'Identify goals and challenges', 'Analyze existing processes'] },
        { time: 'Step 2', title: 'Design', items: ['Customized curriculum', 'Industry-specific examples', 'Practical exercises'] },
        { time: 'Step 3', title: 'Deliver', items: ['Interactive sessions', 'Hands-on workshops', 'Live demonstrations'] },
        { time: 'Step 4', title: 'Apply & Follow-up', items: ['Implementation support', 'Follow-up sessions', 'Resources for continued learning'] },
      ];

  const testimonial = lang === 'sv'
    ? {
        quote: 'Utbildningen förändrade helt hur vår ledningsgrupp ser på AI. Vi gick från osäkerhet till att ha en tydlig strategi och tre konkreta initiativ igång inom en månad.',
        author: 'Anna Karlsson',
        role: 'VD',
        company: 'Industribolaget AB',
      }
    : {
        quote: 'The training completely changed how our leadership team views AI. We went from uncertainty to having a clear strategy and three concrete initiatives running within a month.',
        author: 'Anna Karlsson',
        role: 'CEO',
        company: 'Industribolaget AB',
      };

  const relatedServices = [
    {
      name: 'AI Opportunity Session',
      description: lang === 'sv' ? 'Ett snabbare insteg för att identifiera 2-3 AI-initiativ innan utbildning eller workshop' : 'A faster entry offer to identify 2-3 AI initiatives before training or a workshop',
      href: `/${lang}/${servicesPath}/ai-opportunity-session`,
    },
    {
      name: lang === 'sv' ? 'AI-workshop' : 'AI Workshop',
      description: lang === 'sv' ? 'En intensiv heldagsworkshop för att identifiera use cases' : 'An intensive full-day workshop to identify use cases',
      href: `/${lang}/${servicesPath}/ai-workshops`,
    },
    {
      name: lang === 'sv' ? 'AI-inspirationsföreläsning' : 'AI Inspiration Talk',
      description: lang === 'sv' ? 'En timmes inspirerande överblick för hela organisationen' : 'One hour inspiring overview for the entire organization',
      href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-inspirationsforelasning' : 'ai-inspiration-talks'}`,
    },
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

      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <ServiceHero
        title={dict.services.consulting.h1}
        subtitle={dict.services.consulting.heroSub}
        badges={badges}
        highlights={highlights}
        primaryCta={{
          text: lang === 'sv' ? 'Boka utbildning' : 'Book training',
          href: `/${lang}/${contactPath}`,
        }}
        secondaryCta={{
          text: lang === 'sv' ? 'Se innehåll' : 'See curriculum',
          href: '#curriculum',
        }}
      />

      {/* Stats */}
      <Section background="gray">
        <Stats stats={stats} variant="cards" />
      </Section>

      {/* Who it's for */}
      <Section
        title={lang === 'sv' ? 'Vem passar utbildningen för?' : 'Who is the training for?'}
        subtitle={lang === 'sv' ? 'Utbildningen är designad för beslutsfattare som vill leda AI-transformation' : 'The training is designed for decision-makers who want to lead AI transformation'}
      >
        <FeatureGrid features={whoItsForFeatures} columns={4} />
      </Section>

      {/* Curriculum */}
      <Section
        title={lang === 'sv' ? 'Vad ni lär er' : 'What you learn'}
        subtitle={lang === 'sv' ? 'Ett komplett program för AI-kompetens på ledningsnivå' : 'A complete program for AI competence at leadership level'}
        background="gray"
      >
        <div id="curriculum">
          <FeatureGrid features={curriculum} columns={2} />
        </div>
      </Section>

      {/* Outcomes */}
      <Section
        title={lang === 'sv' ? 'Resultat efter utbildningen' : 'Outcomes after training'}
        subtitle={lang === 'sv' ? 'Konkreta färdigheter ni tar med er' : 'Concrete skills you take away'}
      >
        <FeatureGrid features={outcomes} columns={4} />
      </Section>

      {/* Process */}
      <Section
        title={lang === 'sv' ? 'Vårt upplägg' : 'Our approach'}
        subtitle={lang === 'sv' ? 'En beprövad process för effektivt lärande' : 'A proven process for effective learning'}
        background="gray"
      >
        <AgendaBlocks blocks={process} variant="approach" />
      </Section>

      {/* Testimonial */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <TestimonialCard {...testimonial} />
        </div>
      </Section>

      {/* Related services */}
      <Section
        title={lang === 'sv' ? 'Kombinera med' : 'Combine with'}
        subtitle={lang === 'sv' ? 'Förstärk utbildningen med våra andra tjänster' : 'Enhance the training with our other services'}
        background="gray"
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
      <Section title={lang === 'sv' ? 'Vanliga frågor' : 'Frequently asked questions'}>
        <div className="max-w-3xl mx-auto">
          <FAQ items={faqs} schemaId="training-faq" />
        </div>
      </Section>

      <CTA
        title={lang === 'sv' ? 'Ge er ledning AI-kompetens som gör skillnad' : 'Give your leadership AI competence that makes a difference'}
        description={lang === 'sv' ? 'Boka en utbildning anpassad efter era behov och mål.' : 'Book a training customized to your needs and goals.'}
        primaryCta={{
          text: lang === 'sv' ? 'Boka utbildning' : 'Book training',
          href: `/${lang}/${contactPath}`,
        }}
      />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { type Locale, getDictionary } from '@/lib/i18n';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServiceHero } from '@/components/ui/ServiceHero';
import { Section } from '@/components/ui/Section';
import { FeatureGrid } from '@/components/ui/FeatureGrid';
import { Stats } from '@/components/ui/Stats';
import { AgendaBlocks } from '@/components/ui/Timeline';
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
    title: dict.services.opportunitySession.title,
    description: dict.services.opportunitySession.metaDescription,
  };
}

export default async function AIOpportunitySessionPage({
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
    { label: dict.home.offerings.opportunitySession.title },
  ];

  const badges = lang === 'sv'
    ? ['120 minuter', '3-5 personer', 'Fysiskt eller digitalt']
    : ['120 minutes', '3-5 people', 'On-site or remote'];

  const highlights = lang === 'sv'
    ? [
        { icon: 'clock' as const, text: '120 min fokuserad session' },
        { icon: 'users' as const, text: 'Ledningsgrupp 3-5 personer' },
        { icon: 'target' as const, text: '2-3 prioriterade initiativ' },
      ]
    : [
        { icon: 'clock' as const, text: '120 min focused session' },
        { icon: 'users' as const, text: 'Leadership team of 3-5' },
        { icon: 'target' as const, text: '2-3 prioritized initiatives' },
      ];

  const stats = lang === 'sv'
    ? [
        { value: '120m', label: 'Sessionstid' },
        { value: '3-5', label: 'Deltagare från ledningen' },
        { value: '2-3', label: 'Lovande AI-initiativ' },
        { value: '3-6', label: 'Månader till möjlig effekt' },
      ]
    : [
        { value: '120m', label: 'Session length' },
        { value: '3-5', label: 'Leadership participants' },
        { value: '2-3', label: 'Promising AI initiatives' },
        { value: '3-6', label: 'Months to potential impact' },
      ];

  const whoItsForFeatures = lang === 'sv'
    ? [
        { icon: 'users' as const, title: 'Ledningsgrupper', description: 'Som vill få en gemensam bild av var AI kan skapa konkret affärsvärde först' },
        { icon: 'rocket' as const, title: 'Företag i startfas', description: 'Som behöver ett tydligt instegserbjudande innan större AI-investeringar' },
        { icon: 'target' as const, title: 'Beslutsfattare', description: 'Som vill prioritera få initiativ med hög effekt istället för många idéer' },
        { icon: 'chart' as const, title: 'Team med tidspress', description: 'Som behöver riktning och nästa steg inom en kort, fokuserad session' },
      ]
    : [
        { icon: 'users' as const, title: 'Leadership teams', description: 'Wanting a shared view of where AI can create practical business value first' },
        { icon: 'rocket' as const, title: 'Companies at the start', description: 'Needing a clear entry offer before making larger AI investments' },
        { icon: 'target' as const, title: 'Decision-makers', description: 'Wanting to prioritize a few high-impact initiatives instead of many ideas' },
        { icon: 'chart' as const, title: 'Time-constrained teams', description: 'Needing direction and next steps in a short, focused session' },
      ];

  const formatFeatures = lang === 'sv'
    ? [
        { icon: 'clock' as const, title: '120 minuter', description: 'Ett effektivt format som passar ledningens kalender utan att tappa djup' },
        { icon: 'users' as const, title: '3-5 deltagare', description: 'Vi rekommenderar nyckelpersoner från ledningen för snabb alignment och beslut' },
        { icon: 'check' as const, title: 'Fysiskt eller digitalt', description: 'Sessionen kan genomföras på plats hos er eller digitalt beroende på upplägg' },
      ]
    : [
        { icon: 'clock' as const, title: '120 minutes', description: 'An efficient format that fits leadership calendars without losing depth' },
        { icon: 'users' as const, title: '3-5 participants', description: 'We recommend key people from leadership for fast alignment and decisions' },
        { icon: 'check' as const, title: 'On-site or remote', description: 'The session can be delivered in person or digitally depending on your setup' },
      ];

  const agenda = lang === 'sv'
    ? [
        { time: '01', title: 'Introduktion', items: ['Hur AI används i företag idag', 'Relevanta exempel och förväntansbild'] },
        { time: '02', title: 'Nuläge', items: ['Genomgång av ert nuläge', 'Mål, utmaningar och förutsättningar'] },
        { time: '03', title: 'Möjligheter', items: ['Identifiering av möjliga AI-möjligheter', 'Diskussion kring effekt och genomförbarhet'] },
        { time: '04', title: 'Prioritering', items: ['Prioritering av de mest relevanta casen', 'Val av 2-3 initiativ att gå vidare med'] },
        { time: '05', title: 'Nästa steg', items: ['Rekommendation om nästa steg', 'Underlag för eventuell pilot eller workshop'] },
      ]
    : [
        { time: '01', title: 'Introduction', items: ['How AI is used in companies today', 'Relevant examples and expectations'] },
        { time: '02', title: 'Current state', items: ['Review of your current state', 'Goals, challenges, and constraints'] },
        { time: '03', title: 'Opportunities', items: ['Identify possible AI opportunities', 'Discuss impact and feasibility'] },
        { time: '04', title: 'Prioritization', items: ['Prioritize the most relevant cases', 'Select 2-3 initiatives to move forward with'] },
        { time: '05', title: 'Next steps', items: ['Recommendation for next steps', 'Input for a possible pilot or workshop'] },
      ];

  const afterSessionBullets = lang === 'sv'
    ? [
        'VNTRS skickar en kort sammanfattning efter sessionen.',
        'De 2-3 mest lovande AI-initiativen sammanfattas tydligt.',
        'Vi lämnar rekommendation om eventuell AI-pilot som nästa steg.',
      ]
    : [
        'VNTRS sends a short summary after the session.',
        'The 2-3 most promising AI initiatives are clearly summarized.',
        'We include a recommendation on a possible AI pilot as the next step.',
      ];

  const relatedServices = [
    {
      name: lang === 'sv' ? 'AI-utbildning' : 'AI Training',
      description: lang === 'sv' ? 'Bygg vidare med AI-kompetens i ledningsgruppen efter att ni valt initiativ' : 'Build leadership AI capability after selecting your initial initiatives',
      href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-utbildning' : 'ai-training'}`,
    },
    {
      name: lang === 'sv' ? 'AI-workshop' : 'AI Workshop',
      description: lang === 'sv' ? 'Gå djupare i use cases, prioritering och roadmap i heldagsformat' : 'Go deeper on use cases, prioritization, and roadmap in a full-day format',
      href: `/${lang}/${servicesPath}/ai-workshops`,
    },
    {
      name: lang === 'sv' ? 'AI-inspirationsföreläsning' : 'AI Inspiration Talk',
      description: lang === 'sv' ? 'Skapa bredare engagemang i organisationen med en inspirerande överblick' : 'Create broader organizational engagement with an inspiring overview',
      href: `/${lang}/${servicesPath}/${lang === 'sv' ? 'ai-inspirationsforelasning' : 'ai-inspiration-talks'}`,
    },
  ];

  const faqs = lang === 'sv'
    ? [
        { question: 'Vem bör delta i sessionen?', answer: 'Vi rekommenderar 3-5 personer från ledningen eller andra beslutsfattare som kan prioritera och besluta om nästa steg.' },
        { question: 'Är detta en workshop eller rådgivning?', answer: 'Det är en fokuserad strategisk session som hjälper er identifiera och prioritera möjligheter. Om ni vill gå djupare kan vi följa upp med workshop eller pilot.' },
        { question: 'Behöver vi förbereda något?', answer: 'Nej, men det hjälper om ni delar era viktigaste mål och utmaningar i förväg. Då kan vi anpassa exemplen bättre.' },
        { question: 'Kan sessionen köras digitalt?', answer: 'Ja, formatet fungerar både fysiskt och digitalt. Vi anpassar upplägget efter deltagare och tillgänglighet.' },
        { question: 'Vad får vi efteråt?', answer: 'Ni får en kort sammanfattning med 2-3 prioriterade AI-initiativ och rekommendation om nästa steg, inklusive eventuell pilot.' },
        { question: 'När passar det att boka en AI Opportunity Session?', answer: 'Det passar när ni vill komma igång snabbt och få tydlig riktning innan ni investerar i större program eller implementationer.' },
      ]
    : [
        { question: 'Who should attend the session?', answer: 'We recommend 3-5 people from leadership or other decision-makers who can prioritize and decide on next steps.' },
        { question: 'Is this a workshop or advisory session?', answer: 'It is a focused strategic session to identify and prioritize opportunities. If you want to go deeper, we can follow up with a workshop or pilot.' },
        { question: 'Do we need to prepare anything?', answer: 'No, but it helps if you share your main goals and challenges beforehand so we can tailor the examples.' },
        { question: 'Can the session be run remotely?', answer: 'Yes, the format works both on-site and digitally. We adapt the setup to participants and availability.' },
        { question: 'What do we receive afterward?', answer: 'You get a short summary with 2-3 prioritized AI initiatives and a recommendation for next steps, including a possible pilot.' },
        { question: 'When is an AI Opportunity Session the right fit?', answer: 'It is a good fit when you want to get moving quickly and get direction before investing in larger programs or implementations.' },
      ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: dict.services.opportunitySession.title,
    serviceType: 'AI Opportunity Session',
    provider: {
      '@type': 'Organization',
      name: 'VNTRS AI',
    },
    areaServed: 'SE',
    offers: {
      '@type': 'Offer',
      url: `https://vntrs.ai/${lang}/${lang === 'sv' ? 'tjanster' : 'services'}/ai-opportunity-session`,
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
        title={dict.services.opportunitySession.h1}
        subtitle={dict.services.opportunitySession.heroSub}
        badges={badges}
        highlights={highlights}
        primaryCta={{
          text: lang === 'sv' ? 'Boka session' : 'Book session',
          href: `/${lang}/${contactPath}`,
        }}
        secondaryCta={{
          text: lang === 'sv' ? 'Se upplägg' : 'See format',
          href: '#format',
        }}
      />

      <Section background="gray">
        <Stats stats={stats} variant="cards" />
      </Section>

      <Section
        title={lang === 'sv' ? 'Vad är en AI Opportunity Session?' : 'What is an AI Opportunity Session?'}
        subtitle={lang === 'sv'
          ? 'Ett tydligt instegserbjudande som hjälper er hitta konkreta AI-initiativ med effekt inom 3-6 månader.'
          : 'A clear entry offer that helps you identify concrete AI initiatives with impact potential within 3-6 months.'}
      >
        <FeatureGrid features={whoItsForFeatures} columns={4} />
      </Section>

      <Section
        title={lang === 'sv' ? 'Format' : 'Format'}
        subtitle={lang === 'sv' ? 'Ett effektivt upplägg för att skapa samsyn och beslut snabbt' : 'An efficient setup for creating alignment and decisions quickly'}
        background="gray"
      >
        <div id="format">
          <FeatureGrid features={formatFeatures} columns={3} />
        </div>
      </Section>

      <Section
        title={lang === 'sv' ? 'Innehåll i sessionen' : 'What happens in the session'}
        subtitle={lang === 'sv' ? 'Vi går från nuläge till prioriterade AI-initiativ och rekommenderade nästa steg' : 'We move from current state to prioritized AI initiatives and recommended next steps'}
      >
        <AgendaBlocks blocks={agenda} />
      </Section>

      <Section
        title={lang === 'sv' ? 'Efter sessionen' : 'After the session'}
        subtitle={lang === 'sv' ? 'Ni får ett kort beslutsunderlag att arbeta vidare från' : 'You receive a short decision-ready summary to continue from'}
        background="gray"
      >
        <div className="mx-auto max-w-4xl">
          <BulletList items={afterSessionBullets} icon="check" variant="showcase" />
        </div>
      </Section>

      <Section
        title={lang === 'sv' ? 'Kombinera med' : 'Combine with'}
        subtitle={lang === 'sv' ? 'Fortsätt med rätt nästa steg beroende på ambition och tempo' : 'Continue with the right next step based on ambition and pace'}
      >
        <div className="max-w-2xl mx-auto space-y-4">
          {relatedServices.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="group block rounded-3xl border border-[var(--border)] bg-[linear-gradient(170deg,#ffffff_0%,#f7f9fc_100%)] p-6 shadow-[0_20px_36px_-32px_rgba(26,35,55,0.9)] transition-all hover:-translate-y-0.5 hover:shadow-[0_28px_46px_-34px_rgba(26,35,55,0.8)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)]">{service.name}</div>
                  <div className="mt-1 text-sm text-[var(--muted)]">{service.description}</div>
                </div>
                <svg className="h-5 w-5 flex-shrink-0 text-[var(--muted)]/75 transition-colors group-hover:text-[var(--accent)]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section title={lang === 'sv' ? 'Vanliga frågor' : 'Frequently asked questions'} background="gray">
        <div className="max-w-3xl mx-auto">
          <FAQ items={faqs} schemaId="opportunity-session-faq" />
        </div>
      </Section>

      <CTA
        title={lang === 'sv' ? 'Vill ni identifiera era bästa AI-initiativ snabbt?' : 'Want to identify your best AI initiatives quickly?'}
        description={lang === 'sv' ? 'Boka en AI Opportunity Session och få 2-3 prioriterade initiativ med rekommenderat nästa steg.' : 'Book an AI Opportunity Session and leave with 2-3 prioritized initiatives plus a recommended next step.'}
        primaryCta={{
          text: lang === 'sv' ? 'Boka session' : 'Book session',
          href: `/${lang}/${contactPath}`,
        }}
      />
    </>
  );
}

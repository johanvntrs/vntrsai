import type { Metadata } from 'next';
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

  const breadcrumbs = [
    { label: lang === 'sv' ? 'Hem' : 'Home', href: `/${lang}` },
    { label: dict.nav.services, href: `/${lang}/${servicesPath}` },
    { label: dict.home.offerings.workshop.title },
  ];

  const badges = lang === 'sv'
    ? ['Heldag (8 timmar)', 'På plats eller digitalt', 'Skräddarsytt']
    : ['Full Day (8 hours)', 'On-site or remote', 'Customized'];

  const highlights = lang === 'sv'
    ? [
        { icon: 'clock' as const, text: '8 timmars intensiv session' },
        { icon: 'users' as const, text: '3-20 deltagare' },
        { icon: 'target' as const, text: 'Konkret roadmap' },
      ]
    : [
        { icon: 'clock' as const, text: '8-hour intensive session' },
        { icon: 'users' as const, text: '3-20 participants' },
        { icon: 'target' as const, text: 'Concrete roadmap' },
      ];

  const stats = lang === 'sv'
    ? [
        { value: '50+', label: 'Genomförda workshops' },
        { value: '3-5', label: 'Prioriterade use cases' },
        { value: '90%', label: 'Implementerar inom 90 dagar' },
        { value: '8h', label: 'Intensiv heldagssession' },
      ]
    : [
        { value: '50+', label: 'Workshops delivered' },
        { value: '3-5', label: 'Prioritized use cases' },
        { value: '90%', label: 'Implement within 90 days' },
        { value: '8h', label: 'Intensive full-day session' },
      ];

  const whoItsForFeatures = lang === 'sv'
    ? [
        { icon: 'users' as const, title: 'Ledningsgrupper', description: 'Som vill förstå AI-möjligheter och skapa strategisk alignment' },
        { icon: 'lightbulb' as const, title: 'Innovationsteam', description: 'Som behöver prioritera bland många AI-idéer och hitta quick wins' },
        { icon: 'rocket' as const, title: 'Organisationer', description: 'Som vill kickstarta sin AI-resa med en strukturerad approach' },
        { icon: 'target' as const, title: 'Företag', description: 'Som behöver en gemensam bild av AI-strategi och nästa steg' },
      ]
    : [
        { icon: 'users' as const, title: 'Leadership teams', description: 'Wanting to understand AI opportunities and create strategic alignment' },
        { icon: 'lightbulb' as const, title: 'Innovation teams', description: 'Needing to prioritize among many AI ideas and find quick wins' },
        { icon: 'rocket' as const, title: 'Organizations', description: 'Wanting to kickstart their AI journey with a structured approach' },
        { icon: 'target' as const, title: 'Companies', description: 'Needing a shared view of AI strategy and next steps' },
      ];

  const outcomes = lang === 'sv'
    ? [
        { icon: 'chart' as const, title: 'Prioriterad use case-lista', description: '3–5 AI-initiativ rankade efter Impact × Effort med tydlig ROI-potential' },
        { icon: 'users' as const, title: 'Team-alignment', description: 'Gemensam förståelse för AI-möjligheter och utmaningar i hela teamet' },
        { icon: 'document' as const, title: '30/60/90-dagars roadmap', description: 'Konkret handlingsplan med milstolpar och ansvariga' },
        { icon: 'shield' as const, title: 'Risk & GDPR-checklista', description: 'Dokumentation kring dataskydd och rekommenderade guardrails' },
      ]
    : [
        { icon: 'chart' as const, title: 'Prioritized use case list', description: '3–5 AI initiatives ranked by Impact × Effort with clear ROI potential' },
        { icon: 'users' as const, title: 'Team alignment', description: 'Shared understanding of AI opportunities and challenges across the team' },
        { icon: 'document' as const, title: '30/60/90-day roadmap', description: 'Concrete action plan with milestones and owners' },
        { icon: 'shield' as const, title: 'Risk & GDPR checklist', description: 'Documentation on data protection and recommended guardrails' },
      ];

  const agenda = lang === 'sv'
    ? [
        { time: '09:00 - 10:30', title: 'Introduktion & Mål', items: ['Presentation av deltagare och förväntningar', 'AI-trendspaning relevant för er bransch', 'Gemensam målbild för dagen'] },
        { time: '10:45 - 12:00', title: 'Workflow-kartläggning', items: ['Identifiera nyckelprocesser och pain points', 'Mappa datakällor och system', 'Hitta automationsmöjligheter'] },
        { time: '13:00 - 14:30', title: 'Use case-idéer & Scoring', items: ['Brainstorming av AI-möjligheter', 'Impact × Effort-prioritering', 'Diskussion kring genomförbarhet'] },
        { time: '14:45 - 16:00', title: 'Demos & Roadmap', items: ['Skräddarsydda AI-demonstrationer', 'Diskussion om lokala vs moln-modeller', 'Skapa 30/60/90-dagars handlingsplan'] },
      ]
    : [
        { time: '09:00 - 10:30', title: 'Introduction & Goals', items: ['Participant introductions and expectations', 'AI trend scan relevant to your industry', 'Shared vision for the day'] },
        { time: '10:45 - 12:00', title: 'Workflow mapping', items: ['Identify key processes and pain points', 'Map data sources and systems', 'Find automation opportunities'] },
        { time: '13:00 - 14:30', title: 'Use case ideation & Scoring', items: ['Brainstorming AI opportunities', 'Impact × Effort prioritization', 'Discussion on feasibility'] },
        { time: '14:45 - 16:00', title: 'Demos & Roadmap', items: ['Customized AI demonstrations', 'Discussion on local vs cloud models', 'Create 30/60/90-day action plan'] },
      ];

  const testimonial = lang === 'sv'
    ? {
        quote: 'Workshopen gav oss exakt den struktur vi behövde. På en dag gick vi från vaga AI-idéer till en konkret plan med prioriterade initiativ. Tre månader senare hade vi implementerat vårt första AI-projekt.',
        author: 'Maria Lindström',
        role: 'COO',
        company: 'TechScale AB',
      }
    : {
        quote: 'The workshop gave us exactly the structure we needed. In one day we went from vague AI ideas to a concrete plan with prioritized initiatives. Three months later we had implemented our first AI project.',
        author: 'Maria Lindström',
        role: 'COO',
        company: 'TechScale AB',
      };

  const faqs = lang === 'sv'
    ? [
        { question: 'Vem bör delta?', answer: 'Ledning plus 2–6 operatörer från nyckelarbetsflöden. Ha med personer som känner till de dagliga processerna och smärtpunkterna.' },
        { question: 'Behöver vi förbereda data?', answer: 'Nej, men det hjälper om ni kan beskriva era arbetsflöden och pain points i förväg. Vi skickar en kort förberedelseenkät.' },
        { question: 'Kan ni köra detta GDPR-säkert / med lokala modeller?', answer: 'Ja, vi kan demonstrera lokala AI-modeller som körs helt på era egna servrar och diskutera GDPR-säkra implementationer.' },
        { question: 'Vad händer efter workshopen?', answer: 'Ni får en dokumenterad roadmap och kan boka uppföljande konsulting för implementation. Vi finns tillgängliga för frågor.' },
        { question: 'Hur lång tid tar workshopen?', answer: '8 timmar (heldag) är standard. Vi kan anpassa formatet efter era behov om ni vill ha en kortare eller delad session.' },
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
        { question: 'How long is the workshop?', answer: '8 hours (full day) is standard. We can adapt the format to your needs if you prefer a shorter or split session.' },
        { question: 'Can the workshop be run remotely?', answer: 'Yes, we run workshops both on-site and digitally via Teams/Zoom. Physical workshops often generate better energy.' },
        { question: 'What does a workshop cost?', answer: 'Contact us for pricing. The cost depends on preparation, participants, and whether it is physical or digital.' },
        { question: 'Is this suitable for a small team?', answer: 'Yes, we have run workshops for anywhere from 3 to 20 participants. The format adapts to group size.' },
        { question: 'What demos do you show?', answer: 'We customize demos for your industry—document processing, automation, AI agents, chatbots, etc.' },
        { question: 'Do we get a recording of the workshop?', answer: 'For digital workshops, we can record if you wish. You always receive documentation and slides afterward.' },
        { question: 'Can you combine workshop with a talk?', answer: 'Absolutely. Many choose to start with a 1-hour inspiration talk and then run the workshop the same day.' },
        { question: 'Do we need technical staff present?', answer: 'No, the workshop requires no technical background. We explain everything in business terms.' },
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

      <ServiceHero
        title={dict.services.workshops.h1}
        subtitle={dict.services.workshops.heroSub}
        badges={badges}
        highlights={highlights}
        primaryCta={{
          text: lang === 'sv' ? 'Boka workshop' : 'Book workshop',
          href: `/${lang}/${contactPath}`,
        }}
        secondaryCta={{
          text: lang === 'sv' ? 'Se agenda' : 'See agenda',
          href: '#agenda',
        }}
      />

      {/* Stats */}
      <Section background="gray">
        <Stats stats={stats} variant="cards" />
      </Section>

      {/* Who it's for */}
      <Section
        title={lang === 'sv' ? 'Vem passar workshopen för?' : 'Who is the workshop for?'}
        subtitle={lang === 'sv' ? 'Vår workshop är designad för team som vill ta steget från AI-hype till konkret handling' : 'Our workshop is designed for teams wanting to move from AI hype to concrete action'}
      >
        <FeatureGrid features={whoItsForFeatures} columns={4} />
      </Section>

      {/* What you get */}
      <Section
        title={lang === 'sv' ? 'Vad ni får ut av dagen' : 'What you get from the day'}
        subtitle={lang === 'sv' ? 'Konkreta leverabler ni kan agera på direkt' : 'Concrete deliverables you can act on immediately'}
        background="gray"
      >
        <FeatureGrid features={outcomes} columns={2} />
      </Section>

      {/* Agenda */}
      <Section
        title={lang === 'sv' ? 'Agenda' : 'Agenda'}
        subtitle={lang === 'sv' ? 'En intensiv dag som tar er från idé till handlingsplan' : 'An intensive day that takes you from idea to action plan'}
      >
        <div id="agenda">
          <AgendaBlocks blocks={agenda} />
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <TestimonialCard {...testimonial} />
        </div>
      </Section>

      {/* FAQ */}
      <Section title={lang === 'sv' ? 'Vanliga frågor' : 'Frequently asked questions'}>
        <div className="max-w-3xl mx-auto">
          <FAQ items={faqs} schemaId="workshop-faq" />
        </div>
      </Section>

      <CTA
        title={lang === 'sv' ? 'Redo att ta er AI-strategi till nästa nivå?' : 'Ready to take your AI strategy to the next level?'}
        description={lang === 'sv' ? 'Boka en workshop och få en konkret roadmap på en dag.' : 'Book a workshop and get a concrete roadmap in one day.'}
        primaryCta={{
          text: lang === 'sv' ? 'Boka workshop' : 'Book workshop',
          href: `/${lang}/${contactPath}`,
        }}
      />
    </>
  );
}

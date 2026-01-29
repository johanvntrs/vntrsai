import type { Locale } from './config';

// Dictionary type for type safety
export interface Dictionary {
  metadata: {
    siteName: string;
    siteDescription: string;
  };
  nav: {
    services: string;
    industries: string;
    caseStudies: string;
    resources: string;
    contact: string;
  };
  common: {
    bookCall: string;
    bookIntro: string;
    seeOfferings: string;
    learnMore: string;
    readMore: string;
    viewCase: string;
    contactUs: string;
    getStarted: string;
    downloadGuide: string;
  };
  home: {
    title: string;
    metaDescription: string;
    h1: string;
    heroSub: string;
    primaryCta: string;
    secondaryCta: string;
    offeringsTitle: string;
    offerings: {
      consulting: { title: string; description: string };
      workshop: { title: string; description: string };
      talk: { title: string; description: string };
    };
    industriesTitle: string;
    industries: string[];
    howWeWorkTitle: string;
    howWeWorkSteps: string[];
    trustedByTitle: string;
    faqTitle: string;
    faqs: { question: string; answer: string }[];
    footerCta: string;
  };
  services: {
    index: {
      title: string;
      metaDescription: string;
      h1: string;
    };
    consulting: {
      title: string;
      metaDescription: string;
      h1: string;
      heroSub: string;
      keyPoints: string[];
    };
    workshops: {
      title: string;
      metaDescription: string;
      h1: string;
      heroSub: string;
      whatYouGet: string[];
      agenda: string[];
    };
    talks: {
      title: string;
      metaDescription: string;
      h1: string;
      heroSub: string;
    };
  };
  industries: {
    index: {
      title: string;
      metaDescription: string;
      h1: string;
    };
    eventIndustry: {
      title: string;
      metaDescription: string;
      h1: string;
      challenges: string[];
      useCases: string[];
      kpis: string[];
    };
    privateEquity: {
      title: string;
      metaDescription: string;
      h1: string;
      useCases: string[];
      kpis: string[];
    };
    nicheSaas: {
      title: string;
      metaDescription: string;
      h1: string;
      useCases: string[];
      kpis: string[];
    };
  };
  contact: {
    title: string;
    metaDescription: string;
    h1: string;
    heroSub: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
  };
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
  };
}

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    metadata: {
      siteName: 'VNTRS AI',
      siteDescription: 'Practical AI consulting, hands-on workshops and inspiration talks for teams in events, private equity and niche SaaS.',
    },
    nav: {
      services: 'Services',
      industries: 'Industries',
      caseStudies: 'Case Studies',
      resources: 'Resources',
      contact: 'Contact',
    },
    common: {
      bookCall: 'Book a Call',
      bookIntro: 'Book a 20-min intro',
      seeOfferings: 'See offerings',
      learnMore: 'Learn more',
      readMore: 'Read more',
      viewCase: 'View case study',
      contactUs: 'Contact us',
      getStarted: 'Get started',
      downloadGuide: 'Download guide',
    },
    home: {
      title: 'AI Consulting, Workshops & Talks That Turn Hype Into Outcomes',
      metaDescription: 'Practical AI consulting, hands-on workshops and inspiration talks for teams in events, private equity and niche SaaS. GDPR-aware delivery. Book a call.',
      h1: 'AI offerings that move from inspiration to measurable impact',
      heroSub: 'We help teams identify high-ROI use cases, build AI agents and workflows, and implement responsibly—with GDPR and security in mind.',
      primaryCta: 'Book a 20-min intro',
      secondaryCta: 'See offerings',
      offeringsTitle: 'Our offerings',
      offerings: {
        consulting: {
          title: 'AI Consulting',
          description: 'Strategy to implementation. Use case discovery, agent workflows, governance, build & ship, enablement.',
        },
        workshop: {
          title: 'AI Workshop',
          description: '2 hours, interactive. Leave with prioritized use cases and a concrete action plan.',
        },
        talk: {
          title: 'AI Inspiration Talk',
          description: '1 hour of trends, tools, and real-world examples. Spark ideas across your team.',
        },
      },
      industriesTitle: 'Industries we focus on',
      industries: ['Event Industry', 'Private Equity', 'Niche SaaS'],
      howWeWorkTitle: 'How we work',
      howWeWorkSteps: ['Discover', 'Prioritize', 'Prototype', 'Implement', 'Enable'],
      trustedByTitle: 'Trusted by teams building with AI',
      faqTitle: 'Frequently asked questions',
      faqs: [
        { question: 'What types of AI solutions do you help implement?', answer: 'We focus on practical AI applications: AI agents for automation, document processing, customer support bots, internal knowledge assistants, and AI-powered features for SaaS products.' },
        { question: 'Do you work with sensitive data and GDPR requirements?', answer: 'Yes. We specialize in GDPR-aware implementations and can help you deploy local AI models that keep sensitive data on your own infrastructure.' },
        { question: 'How quickly can we get started?', answer: 'A workshop can be scheduled within 1-2 weeks. For consulting engagements, we typically start with a discovery phase that takes 2-4 weeks.' },
        { question: 'What industries do you specialize in?', answer: 'We focus on three areas: event industry (planning, operations, support), private equity (deal work, portfolio value), and niche SaaS (product AI features, support automation).' },
      ],
      footerCta: 'Tell us what you\'re trying to automate.',
    },
    services: {
      index: {
        title: 'AI Services | Consulting, Workshops & Talks',
        metaDescription: 'AI consulting, hands-on workshops and inspiration talks. From strategy to implementation with GDPR-aware delivery.',
        h1: 'AI services for modern teams',
      },
      consulting: {
        title: 'AI Consulting | Strategy to Implementation',
        metaDescription: 'End-to-end AI consulting: use case discovery, agent workflows, governance, implementation, and team enablement. GDPR-aware.',
        h1: 'AI consulting: from strategy to implementation',
        heroSub: 'We help you identify the right use cases, design agent workflows, and implement responsibly.',
        keyPoints: [
          'Use case discovery',
          'Agent workflows',
          'Governance',
          'Build & ship',
          'Enablement',
        ],
      },
      workshops: {
        title: 'AI Workshop for Companies (2 hours) | Use Cases + Roadmap',
        metaDescription: 'A hands-on 2-hour AI workshop for leadership and teams. Needs analysis, trend scan and tailored demos. Leave with prioritized use cases and next steps.',
        h1: 'AI Workshop (2 hours): identify 3–5 high-ROI use cases',
        heroSub: 'An interactive session that aligns stakeholders, maps workflows, and produces a practical action plan.',
        whatYouGet: [
          'Prioritized use case list (Impact × Effort)',
          '"AI agent opportunities" map for your workflows',
          'Risk/GDPR checklist and recommended guardrails',
          'Next-step roadmap (30/60/90 days)',
        ],
        agenda: [
          'Goals & constraints',
          'Workflow mapping + pain points',
          'Use case ideation + scoring',
          'Tailored demos (local agents, automation examples)',
          'Roadmap + ownership',
        ],
      },
      talks: {
        title: 'AI Inspiration Talk (1 hour) | Trends, Tools & What\'s Next',
        metaDescription: 'A fast-paced AI talk for leadership and teams: latest trends, tools, real-world examples and practical takeaways.',
        h1: 'AI Inspiration Talk (1 hour): what\'s possible right now',
        heroSub: 'The latest developments explained in business terms—plus demos that spark ideas.',
      },
    },
    industries: {
      index: {
        title: 'Industries We Serve | AI for Events, PE & SaaS',
        metaDescription: 'AI solutions tailored for the event industry, private equity firms, and niche SaaS companies. GDPR-aware implementation.',
        h1: 'Industries we serve',
      },
      eventIndustry: {
        title: 'AI for the Event Industry | Automation, Planning & Operations',
        metaDescription: 'Use AI to streamline event planning, staffing, logistics, customer support and post-event reporting. GDPR-aware workflows and practical delivery.',
        h1: 'AI for the Event Industry: reduce manual work across planning and operations',
        challenges: [
          'Last-minute changes, fragmented tools, manual coordination',
          'High support load before events',
          'Staffing and logistics complexity',
        ],
        useCases: [
          'Automated customer support (FAQ + booking changes)',
          'Vendor & logistics coordination assistant',
          'Staffing planning and shift optimization',
          'Contract and invoice extraction + reconciliation',
          'Post-event insights: sentiment, NPS themes, cost drivers',
          'Internal knowledge assistant (policies, venues, checklists)',
        ],
        kpis: ['Time-to-plan', 'Support response time', 'Staffing accuracy', 'Cost overruns', 'NPS'],
      },
      privateEquity: {
        title: 'AI for Private Equity | Deal Work & Portfolio Value',
        metaDescription: 'AI tools for faster deal work and portfolio value creation. Deal memos, market research, due diligence automation.',
        h1: 'AI for Private Equity: faster deal work and portfolio value creation',
        useCases: [
          'Deal memo drafting assistant (with citations + guardrails)',
          'Market research summarization workflows',
          'Portfolio "AI readiness" assessment',
          'Operational playbooks: pricing, support, sales enablement agents',
          'Document processing: DD checklists, contracts, board packs',
        ],
        kpis: ['Analyst hours saved', 'Cycle time to IC', 'Portfolio efficiency gains'],
      },
      nicheSaas: {
        title: 'AI for Niche SaaS | Ship Features Without Complexity',
        metaDescription: 'Build AI copilots, automate onboarding, and create intelligent features for your SaaS product. Secure and scalable.',
        h1: 'AI for Niche SaaS: ship differentiated features without blowing up complexity',
        useCases: [
          'AI copilots inside product (support, setup, reporting)',
          'Automated onboarding and help center agent',
          'Internal agent for support teams (ticket triage, suggested replies)',
          'Data-to-insight summaries for customers',
          'Secure "bring your own data" workflows',
        ],
        kpis: ['Activation', 'Churn', 'Support deflection', 'ARPA', 'Time-to-value'],
      },
    },
    contact: {
      title: 'Contact | Book a Call',
      metaDescription: 'Get in touch to discuss AI consulting, workshops, or talks. Book a 20-minute intro call.',
      h1: 'Let\'s talk about your AI opportunities',
      heroSub: 'Tell us about your challenges and we\'ll help you identify the right approach.',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        message: 'Tell us about your challenge or question',
        submit: 'Send message',
        success: 'Thank you! We\'ll be in touch within 24 hours.',
        error: 'Something went wrong. Please try again or email us directly.',
      },
    },
    footer: {
      copyright: '© 2025 VNTRS AI. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
  sv: {
    metadata: {
      siteName: 'VNTRS AI',
      siteDescription: 'Praktisk AI-konsulting, hands-on workshops och inspirationsföreläsningar för eventbranschen, private equity och nischad SaaS.',
    },
    nav: {
      services: 'Tjänster',
      industries: 'Branscher',
      caseStudies: 'Case',
      resources: 'Resurser',
      contact: 'Kontakt',
    },
    common: {
      bookCall: 'Boka ett samtal',
      bookIntro: 'Boka 20 min intro',
      seeOfferings: 'Se erbjudanden',
      learnMore: 'Läs mer',
      readMore: 'Läs mer',
      viewCase: 'Se case study',
      contactUs: 'Kontakta oss',
      getStarted: 'Kom igång',
      downloadGuide: 'Ladda ner guide',
    },
    home: {
      title: 'AI-konsulting, workshops & föreläsningar som ger resultat',
      metaDescription: 'Praktisk AI-konsulting, hands-on workshops och inspirationsföreläsningar för eventbranschen, private equity och nischad SaaS. GDPR-medvetet. Boka intro.',
      h1: 'AI-erbjudanden som tar er från hype till mätbar effekt',
      heroSub: 'Vi hjälper team att hitta hög-ROI use cases, bygga AI-agenter och förbättra arbetsflöden—med säkerhet och GDPR i fokus.',
      primaryCta: 'Boka 20 min intro',
      secondaryCta: 'Se erbjudanden',
      offeringsTitle: 'Våra erbjudanden',
      offerings: {
        consulting: {
          title: 'AI-konsulting',
          description: 'Strategi till implementation. Use case discovery, agent-flöden, governance, bygg & leverera, enablement.',
        },
        workshop: {
          title: 'AI-workshop',
          description: '2 timmar, interaktiv. Gå därifrån med prioriterade use cases och en konkret plan.',
        },
        talk: {
          title: 'AI-inspirationsföreläsning',
          description: '1 timme med trender, verktyg och exempel. Skapa idéer i hela teamet.',
        },
      },
      industriesTitle: 'Fokusbranscher',
      industries: ['Eventbranschen', 'Private Equity', 'Nischad SaaS'],
      howWeWorkTitle: 'Vårt arbetssätt',
      howWeWorkSteps: ['Upptäck', 'Prioritera', 'Prototypa', 'Implementera', 'Enablement'],
      trustedByTitle: 'Används av team som bygger med AI',
      faqTitle: 'Vanliga frågor',
      faqs: [
        { question: 'Vilka typer av AI-lösningar hjälper ni implementera?', answer: 'Vi fokuserar på praktiska AI-tillämpningar: AI-agenter för automatisering, dokumentbearbetning, kundsupportbottar, interna kunskapsassistenter och AI-drivna features för SaaS-produkter.' },
        { question: 'Arbetar ni med känslig data och GDPR-krav?', answer: 'Ja. Vi specialiserar oss på GDPR-medvetna implementationer och kan hjälpa er köra lokala AI-modeller som håller känslig data på er egen infrastruktur.' },
        { question: 'Hur snabbt kan vi komma igång?', answer: 'En workshop kan bokas inom 1-2 veckor. För konsultuppdrag börjar vi vanligtvis med en discovery-fas som tar 2-4 veckor.' },
        { question: 'Vilka branscher specialiserar ni er på?', answer: 'Vi fokuserar på tre områden: eventbranschen (planering, drift, support), private equity (deal-arbete, portföljvärde) och nischad SaaS (produkt-AI-features, supportautomatisering).' },
      ],
      footerCta: 'Beskriv er process—vi hittar agent-möjligheter.',
    },
    services: {
      index: {
        title: 'AI-tjänster | Konsulting, Workshops & Föreläsningar',
        metaDescription: 'AI-konsulting, hands-on workshops och inspirationsföreläsningar. Från strategi till implementation med GDPR-medveten leverans.',
        h1: 'AI-tjänster för moderna team',
      },
      consulting: {
        title: 'AI-konsulting | Strategi till Implementation',
        metaDescription: 'End-to-end AI-konsulting: use case discovery, agent-flöden, governance, implementation och team enablement. GDPR-medvetet.',
        h1: 'AI-konsulting: från strategi till implementation',
        heroSub: 'Vi hjälper er identifiera rätt use cases, designa agent-flöden och implementera ansvarsfullt.',
        keyPoints: [
          'Use case discovery',
          'Agent-flöden',
          'Governance',
          'Bygg & leverera',
          'Enablement',
        ],
      },
      workshops: {
        title: 'AI-workshop för företag (2 timmar) | Use cases + roadmap',
        metaDescription: 'En praktisk 2-timmars AI-workshop. Behovsanalys, trendspaning och skräddarsydda demos. Ni går därifrån med prioriterade use cases och nästa steg.',
        h1: 'AI-workshop (2 timmar): hitta 3–5 hög-ROI use cases',
        heroSub: 'En interaktiv session som skapar samsyn, kartlägger arbetsflöden och ger en konkret plan.',
        whatYouGet: [
          'Prioriterad lista (Impact × Effort)',
          '"Agent-möjligheter" kopplat till era arbetsflöden',
          'Risk- och GDPR-checklista + rekommenderade guardrails',
          'Next-step roadmap (30/60/90 dagar)',
        ],
        agenda: [
          'Mål & constraints',
          'Arbetsflödeskartläggning + pain points',
          'Use case-idéer + scoring',
          'Skräddarsydda demos (lokala agenter, automatiseringsexempel)',
          'Roadmap + ägarskap',
        ],
      },
      talks: {
        title: 'AI-inspirationsföreläsning (1 timme) | Trender, verktyg & möjligheter',
        metaDescription: 'En snabb AI-dragning för ledning och team: senaste trenderna, verktygen, exempel och konkreta takeaways.',
        h1: 'AI-inspirationsföreläsning (1 timme): vad som är möjligt just nu',
        heroSub: 'De senaste utvecklingarna förklarade i affärstermer—plus demos som skapar idéer.',
      },
    },
    industries: {
      index: {
        title: 'Branscher vi fokuserar på | AI för Event, PE & SaaS',
        metaDescription: 'AI-lösningar anpassade för eventbranschen, private equity och nischad SaaS. GDPR-medveten implementation.',
        h1: 'Branscher vi fokuserar på',
      },
      eventIndustry: {
        title: 'AI för Eventbranschen | Automatisering, Planering & Drift',
        metaDescription: 'Använd AI för att effektivisera eventplanering, bemanning, logistik, kundsupport och rapportering. GDPR-medvetna flöden.',
        h1: 'AI för Eventbranschen: minska manuellt arbete i planering och drift',
        challenges: [
          'Sista-minuten-ändringar, fragmenterade verktyg, manuell koordinering',
          'Hög supportbelastning inför event',
          'Komplex bemanning och logistik',
        ],
        useCases: [
          'Automatiserad kundsupport (FAQ + bokningsändringar)',
          'Leverantörs- och logistikkoordineringsassistent',
          'Bemanningsplanering och skiftoptimering',
          'Kontrakt- och fakturaextraktion + avstämning',
          'Post-event-insikter: sentiment, NPS-teman, kostnadsdrivare',
          'Intern kunskapsassistent (policyer, lokaler, checklistor)',
        ],
        kpis: ['Time-to-plan', 'Svarstid support', 'Bemanningsprecision', 'Kostnadsöverskridanden', 'NPS'],
      },
      privateEquity: {
        title: 'AI för Private Equity | Deal-arbete & Portföljvärde',
        metaDescription: 'AI-verktyg för snabbare deal-arbete och värdeskapande i portföljbolag. Deal memos, marknadsanalys, due diligence-automatisering.',
        h1: 'AI för Private Equity: snabbare deal-arbete och portföljvärdeskapande',
        useCases: [
          'Deal memo-assistent (med citat + guardrails)',
          'Marknadsundersökning-sammanfattningsflöden',
          'Portfölj "AI-readiness"-bedömning',
          'Operativa playbooks: prissättning, support, sales enablement-agenter',
          'Dokumentbearbetning: DD-checklistor, kontrakt, styrelsepaket',
        ],
        kpis: ['Analysttimmar sparade', 'Cykeltid till IC', 'Portföljeffektivitetsvinster'],
      },
      nicheSaas: {
        title: 'AI för Nischad SaaS | Leverera Features Utan Komplexitet',
        metaDescription: 'Bygg AI-copiloter, automatisera onboarding och skapa intelligenta features för din SaaS-produkt. Säkert och skalbart.',
        h1: 'AI för Nischad SaaS: leverera differentierade features utan att öka komplexiteten',
        useCases: [
          'AI-copiloter i produkten (support, setup, rapportering)',
          'Automatiserad onboarding och help center-agent',
          'Intern agent för supportteam (ärendetriage, föreslagna svar)',
          'Data-till-insikt-sammanfattningar för kunder',
          'Säkra "bring your own data"-flöden',
        ],
        kpis: ['Aktivering', 'Churn', 'Support deflection', 'ARPA', 'Time-to-value'],
      },
    },
    contact: {
      title: 'Kontakt | Boka ett samtal',
      metaDescription: 'Kontakta oss för att diskutera AI-konsulting, workshops eller föreläsningar. Boka ett 20-minuters intro.',
      h1: 'Låt oss prata om era AI-möjligheter',
      heroSub: 'Berätta om era utmaningar så hjälper vi er hitta rätt approach.',
      form: {
        name: 'Namn',
        email: 'E-post',
        company: 'Företag',
        message: 'Berätta om er utmaning eller fråga',
        submit: 'Skicka meddelande',
        success: 'Tack! Vi återkommer inom 24 timmar.',
        error: 'Något gick fel. Försök igen eller maila oss direkt.',
      },
    },
    footer: {
      copyright: '© 2025 VNTRS AI. Alla rättigheter förbehållna.',
      privacy: 'Integritetspolicy',
      terms: 'Användarvillkor',
    },
  },
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale];
}

export interface CaseStudy {
  slug: string;
  industry: 'event' | 'pe' | 'saas';
  title: {
    en: string;
    sv: string;
  };
  client: string;
  clientType: {
    en: string;
    sv: string;
  };
  challenge: {
    en: string;
    sv: string;
  };
  solution: {
    en: string[];
    sv: string[];
  };
  results: {
    metric: string;
    value: string;
    description: {
      en: string;
      sv: string;
    };
  }[];
  testimonial?: {
    quote: {
      en: string;
      sv: string;
    };
    author: string;
    role: {
      en: string;
      sv: string;
    };
  };
  tags: {
    en: string[];
    sv: string[];
  };
}

export const caseStudies: CaseStudy[] = [
  // Event Industry Cases
  {
    slug: 'nordic-conference-support-automation',
    industry: 'event',
    title: {
      en: 'Automated Support for Nordic Conference Series',
      sv: 'Automatiserad support för nordisk konferensserie',
    },
    client: 'Nordic Events Group',
    clientType: {
      en: 'Conference organizer (5,000+ attendees/year)',
      sv: 'Konferensarrangör (5 000+ deltagare/år)',
    },
    challenge: {
      en: 'The support team was overwhelmed with repetitive questions before each event—ticket changes, venue directions, schedule inquiries. Response times exceeded 48 hours during peak periods, leading to frustrated attendees and stressed staff.',
      sv: 'Supportteamet var överbelastat med repetitiva frågor inför varje event—biljettändringar, vägbeskrivningar, schemafrågor. Svarstider översteg 48 timmar under högsäsong, vilket ledde till frustrerade deltagare och stressad personal.',
    },
    solution: {
      en: [
        'Deployed an AI support agent handling FAQ, booking changes, and schedule queries',
        'Integrated with existing ticketing system for real-time booking modifications',
        'Built escalation workflows for complex issues requiring human attention',
        'Created multilingual support (EN, SV, NO, DK, FI)',
      ],
      sv: [
        'Implementerade en AI-supportagent för FAQ, bokningsändringar och schemafrågor',
        'Integrerade med befintligt biljettsystem för realtidsbokningar',
        'Byggde eskaleringsflöden för komplexa ärenden som kräver mänsklig hantering',
        'Skapade flerspråkig support (EN, SV, NO, DK, FI)',
      ],
    },
    results: [
      {
        metric: '73%',
        value: '73%',
        description: {
          en: 'of inquiries handled automatically',
          sv: 'av förfrågningar hanterades automatiskt',
        },
      },
      {
        metric: '<5 min',
        value: '<5 min',
        description: {
          en: 'average response time (from 48h)',
          sv: 'genomsnittlig svarstid (från 48h)',
        },
      },
      {
        metric: '2 FTE',
        value: '2 FTE',
        description: {
          en: 'support capacity freed up for VIP handling',
          sv: 'supportkapacitet frigjord för VIP-hantering',
        },
      },
    ],
    testimonial: {
      quote: {
        en: 'Our team can finally focus on the attendee experience instead of answering the same questions thousands of times.',
        sv: 'Vårt team kan äntligen fokusera på deltagarupplevelsen istället för att svara på samma frågor tusentals gånger.',
      },
      author: 'Maria L.',
      role: {
        en: 'Head of Operations',
        sv: 'Operativ chef',
      },
    },
    tags: {
      en: ['Customer Support', 'Automation', 'Multilingual'],
      sv: ['Kundsupport', 'Automatisering', 'Flerspråkig'],
    },
  },
  {
    slug: 'festival-staffing-optimization',
    industry: 'event',
    title: {
      en: 'AI-Powered Staffing for Summer Festival',
      sv: 'AI-driven bemanning för sommarfestival',
    },
    client: 'Scandinavian Festival Co',
    clientType: {
      en: 'Music festival (30,000 attendees)',
      sv: 'Musikfestival (30 000 besökare)',
    },
    challenge: {
      en: 'Manual staffing planning took weeks and still resulted in overstaffing some areas while leaving others understaffed. Last-minute changes caused chaos, and historical data was scattered across spreadsheets.',
      sv: 'Manuell bemanningsplanering tog veckor och resulterade ändå i överbemanning på vissa områden medan andra var underbemannade. Sista-minuten-ändringar skapade kaos, och historisk data låg utspridd i kalkylblad.',
    },
    solution: {
      en: [
        'Built predictive staffing model using historical attendance and weather data',
        'Created real-time adjustment dashboard for day-of operations',
        'Automated shift notifications and swap requests via mobile app',
        'Integrated contractor invoicing based on actual hours',
      ],
      sv: [
        'Byggde prediktiv bemanningsmodell baserad på historisk besöksdata och väder',
        'Skapade realtids-dashboard för justeringar under eventdagen',
        'Automatiserade skiftnotifikationer och bytesförfrågningar via mobilapp',
        'Integrerade fakturering för inhyrd personal baserat på faktiska timmar',
      ],
    },
    results: [
      {
        metric: '22%',
        value: '22%',
        description: {
          en: 'reduction in staffing costs',
          sv: 'minskning av bemanningskostnader',
        },
      },
      {
        metric: '85%',
        value: '85%',
        description: {
          en: 'faster planning cycle (weeks to days)',
          sv: 'snabbare planeringsprocess (veckor till dagar)',
        },
      },
      {
        metric: '0',
        value: '0',
        description: {
          en: 'critical understaffing incidents (vs 12 previous year)',
          sv: 'kritiska underbemanningsincidenter (jmf 12 föregående år)',
        },
      },
    ],
    tags: {
      en: ['Staffing', 'Predictive Analytics', 'Operations'],
      sv: ['Bemanning', 'Prediktiv analys', 'Drift'],
    },
  },

  // Private Equity Cases
  {
    slug: 'pe-deal-memo-assistant',
    industry: 'pe',
    title: {
      en: 'Deal Memo Assistant for Mid-Market PE',
      sv: 'Deal memo-assistent för mid-market PE',
    },
    client: 'Nordic Capital Partners',
    clientType: {
      en: 'Private equity firm (€500M AUM)',
      sv: 'Private equity-bolag (€500M AUM)',
    },
    challenge: {
      en: 'Analysts spent 60% of their time on research compilation and first-draft writing instead of analysis. Deal memo quality varied significantly between team members, and junior analysts often missed key risk factors.',
      sv: 'Analytiker spenderade 60% av sin tid på research-sammanställning och första utkast istället för analys. Kvaliteten på deal memos varierade kraftigt mellan teammedlemmar, och juniora analytiker missade ofta viktiga riskfaktorer.',
    },
    solution: {
      en: [
        'Built secure deal memo drafting assistant with firm-specific templates',
        'Integrated market research aggregation from approved data sources',
        'Created automated risk flagging based on historical deal patterns',
        'Implemented citation tracking to prevent hallucinations',
      ],
      sv: [
        'Byggde säker deal memo-assistent med bolagsspecifika mallar',
        'Integrerade marknadsresearch-aggregering från godkända datakällor',
        'Skapade automatisk riskflaggning baserad på historiska affärsmönster',
        'Implementerade källspårning för att förhindra hallucinationer',
      ],
    },
    results: [
      {
        metric: '40%',
        value: '40%',
        description: {
          en: 'reduction in time-to-IC',
          sv: 'minskning av tid till IC',
        },
      },
      {
        metric: '3x',
        value: '3x',
        description: {
          en: 'more deals screened per analyst',
          sv: 'fler affärer screenade per analytiker',
        },
      },
      {
        metric: '100%',
        value: '100%',
        description: {
          en: 'citation compliance (audit requirement)',
          sv: 'källhänvisning (revisionskrav)',
        },
      },
    ],
    testimonial: {
      quote: {
        en: 'Our analysts now spend their time on what matters—finding insights and building conviction—not compiling data.',
        sv: 'Våra analytiker lägger nu sin tid på det som spelar roll—att hitta insikter och bygga övertygelse—inte sammanställa data.',
      },
      author: 'Henrik S.',
      role: {
        en: 'Partner',
        sv: 'Partner',
      },
    },
    tags: {
      en: ['Deal Work', 'Document Processing', 'Research'],
      sv: ['Deal-arbete', 'Dokumentbearbetning', 'Research'],
    },
  },
  {
    slug: 'portfolio-ai-readiness',
    industry: 'pe',
    title: {
      en: 'Portfolio AI Readiness Assessment',
      sv: 'AI-mognadsbedömning för portföljbolag',
    },
    client: 'Growth Equity Fund',
    clientType: {
      en: 'Growth equity firm (12 portfolio companies)',
      sv: 'Growth equity-bolag (12 portföljbolag)',
    },
    challenge: {
      en: 'The fund wanted to identify AI opportunities across their portfolio but lacked a systematic approach. Each company had different tech stacks, data maturity, and operational challenges.',
      sv: 'Fonden ville identifiera AI-möjligheter i hela portföljen men saknade ett systematiskt tillvägagångssätt. Varje bolag hade olika tech-stackar, datamognad och operativa utmaningar.',
    },
    solution: {
      en: [
        'Developed standardized AI readiness framework with 40 assessment criteria',
        'Conducted workshops with each portfolio company leadership team',
        'Created prioritized use case roadmaps per company',
        'Built shared playbooks for common patterns (support, sales, ops)',
      ],
      sv: [
        'Utvecklade standardiserat AI-moghetsramverk med 40 bedömningskriterier',
        'Genomförde workshops med varje portföljbolags ledningsgrupp',
        'Skapade prioriterade use case-roadmaps per bolag',
        'Byggde delade playbooks för vanliga mönster (support, sälj, drift)',
      ],
    },
    results: [
      {
        metric: '8/12',
        value: '8/12',
        description: {
          en: 'companies launched AI initiatives within 6 months',
          sv: 'bolag startade AI-initiativ inom 6 månader',
        },
      },
      {
        metric: '€2.1M',
        value: '€2.1M',
        description: {
          en: 'estimated annual efficiency gains identified',
          sv: 'uppskattade årliga effektivitetsvinster identifierade',
        },
      },
      {
        metric: '4',
        value: '4',
        description: {
          en: 'shared AI vendors negotiated at portfolio level',
          sv: 'gemensamma AI-leverantörer förhandlade på portföljnivå',
        },
      },
    ],
    tags: {
      en: ['Portfolio Value', 'Strategy', 'Assessment'],
      sv: ['Portföljvärde', 'Strategi', 'Bedömning'],
    },
  },

  // SaaS Cases
  {
    slug: 'saas-support-copilot',
    industry: 'saas',
    title: {
      en: 'In-Product Support Copilot for HR SaaS',
      sv: 'Inbyggd support-copilot för HR-SaaS',
    },
    client: 'TalentFlow',
    clientType: {
      en: 'HR software startup (2,500 customers)',
      sv: 'HR-mjukvarustartup (2 500 kunder)',
    },
    challenge: {
      en: 'Support tickets were growing 40% faster than revenue. Most questions were about feature usage and configuration—things that could be self-served. The 4-person support team was burned out.',
      sv: 'Supportärenden växte 40% snabbare än intäkterna. De flesta frågor handlade om funktionsanvändning och konfiguration—saker som kunde vara självbetjäning. Det 4-personer stora supportteamet var utbrända.',
    },
    solution: {
      en: [
        'Built contextual AI assistant embedded in the product UI',
        'Trained on product documentation, help center, and resolved tickets',
        'Added ability to perform guided configuration changes',
        'Created seamless handoff to human support when needed',
      ],
      sv: [
        'Byggde kontextuell AI-assistent inbäddad i produkt-UI:t',
        'Tränade på produktdokumentation, hjälpcenter och lösta ärenden',
        'Lade till möjlighet att utföra guidade konfigurationsändringar',
        'Skapade sömlös överlämning till mänsklig support vid behov',
      ],
    },
    results: [
      {
        metric: '62%',
        value: '62%',
        description: {
          en: 'reduction in support tickets',
          sv: 'minskning av supportärenden',
        },
      },
      {
        metric: '+18',
        value: '+18',
        description: {
          en: 'NPS points increase (users love instant help)',
          sv: 'NPS-poängs ökning (användare älskar snabb hjälp)',
        },
      },
      {
        metric: '0',
        value: '0',
        description: {
          en: 'additional support hires needed despite 2x growth',
          sv: 'ytterligare supportanställningar trots 2x tillväxt',
        },
      },
    ],
    testimonial: {
      quote: {
        en: 'The copilot became our most-loved feature. Users tell us they feel supported 24/7 without waiting for email responses.',
        sv: 'Copiloten blev vår mest älskade funktion. Användare säger att de känner sig supportade dygnet runt utan att vänta på mejlsvar.',
      },
      author: 'Emma K.',
      role: {
        en: 'CPO',
        sv: 'CPO',
      },
    },
    tags: {
      en: ['Product AI', 'Support', 'Customer Experience'],
      sv: ['Produkt-AI', 'Support', 'Kundupplevelse'],
    },
  },
  {
    slug: 'saas-onboarding-automation',
    industry: 'saas',
    title: {
      en: 'Automated Onboarding for Project Management Tool',
      sv: 'Automatiserad onboarding för projekthanteringsverktyg',
    },
    client: 'ProjectPro',
    clientType: {
      en: 'Project management SaaS (B2B, mid-market)',
      sv: 'Projekthantering-SaaS (B2B, mid-market)',
    },
    challenge: {
      en: 'Time-to-value was killing activation rates. New customers took 3+ weeks to set up their first project properly. CSMs were spending 80% of their time on repetitive setup tasks instead of strategic guidance.',
      sv: 'Time-to-value dödade aktiveringsgraden. Nya kunder tog 3+ veckor att sätta upp sitt första projekt ordentligt. CSMs spenderade 80% av sin tid på repetitiva uppsättningsuppgifter istället för strategisk vägledning.',
    },
    solution: {
      en: [
        'Built AI onboarding agent that interviews customers about their workflow',
        'Auto-generates project templates, custom fields, and automations',
        'Creates personalized training plan based on role and use case',
        'Proactively identifies setup issues before they become problems',
      ],
      sv: [
        'Byggde AI-onboardingagent som intervjuar kunder om deras arbetsflöde',
        'Autogenererar projektmallar, anpassade fält och automatiseringar',
        'Skapar personlig utbildningsplan baserad på roll och use case',
        'Identifierar proaktivt uppsättningsproblem innan de blir problem',
      ],
    },
    results: [
      {
        metric: '67%',
        value: '67%',
        description: {
          en: 'faster time-to-first-project',
          sv: 'snabbare tid-till-första-projekt',
        },
      },
      {
        metric: '+23%',
        value: '+23%',
        description: {
          en: 'increase in 30-day activation rate',
          sv: 'ökning i 30-dagars aktiveringsgrad',
        },
      },
      {
        metric: '4x',
        value: '4x',
        description: {
          en: 'more customers per CSM capacity',
          sv: 'fler kunder per CSM-kapacitet',
        },
      },
    ],
    tags: {
      en: ['Onboarding', 'Activation', 'Customer Success'],
      sv: ['Onboarding', 'Aktivering', 'Customer Success'],
    },
  },
];

export function getCaseStudiesByIndustry(industry: 'event' | 'pe' | 'saas'): CaseStudy[] {
  return caseStudies.filter((cs) => cs.industry === industry);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}

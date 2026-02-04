import type { Locale } from './config';

// Dictionary type for type safety
export interface Dictionary {
  metadata: {
    siteName: string;
    siteDescription: string;
  };
  nav: {
    services: string;
    contact: string;
  };
  common: {
    bookCall: string;
    bookIntro: string;
    seeOfferings: string;
    learnMore: string;
    readMore: string;
    contactUs: string;
    getStarted: string;
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
      siteDescription: 'Executive AI training, hands-on workshops and inspiration talks for leadership teams. GDPR-aware delivery.',
    },
    nav: {
      services: 'Services',
      contact: 'Contact',
    },
    common: {
      bookCall: 'Book a Call',
      bookIntro: 'Book a 20-min intro',
      seeOfferings: 'See offerings',
      learnMore: 'Learn more',
      readMore: 'Read more',
      contactUs: 'Contact us',
      getStarted: 'Get started',
    },
    home: {
      title: 'AI Training, Workshops & Talks That Turn Hype Into Outcomes',
      metaDescription: 'Executive AI training, hands-on workshops and inspiration talks for leadership teams. GDPR-aware delivery. Book a call.',
      h1: 'AI offerings that move from inspiration to measurable impact',
      heroSub: 'We help teams identify high-ROI use cases, build AI agents and workflows, and implement responsibly—with GDPR and security in mind.',
      primaryCta: 'Book a 20-min intro',
      secondaryCta: 'See offerings',
      offeringsTitle: 'Our offerings',
      offerings: {
        consulting: {
          title: 'AI Training for Companies',
          description: 'Executive-focused AI training programs delivered on-site or online. Tailored to your organization\'s needs and goals.',
        },
        workshop: {
          title: 'AI Workshop',
          description: 'Full-day session (8 hours). Leave with prioritized use cases, hands-on experience, and a concrete action plan.',
        },
        talk: {
          title: 'AI Inspiration Talk',
          description: '1 hour of trends, tools, and real-world examples. Spark ideas across your team.',
        },
      },
      howWeWorkTitle: 'How we work',
      howWeWorkSteps: ['Discover', 'Prioritize', 'Prototype', 'Implement', 'Enable'],
      trustedByTitle: 'Trusted by teams building with AI',
      faqTitle: 'Frequently asked questions',
      faqs: [
        { question: 'What types of AI solutions do you help implement?', answer: 'We focus on practical AI applications: AI agents for automation, document processing, customer support bots, internal knowledge assistants, and AI-powered features for SaaS products.' },
        { question: 'Do you work with sensitive data and GDPR requirements?', answer: 'Yes. We specialize in GDPR-aware implementations and can help you deploy local AI models that keep sensitive data on your own infrastructure.' },
        { question: 'How quickly can we get started?', answer: 'A workshop can be scheduled within 1-2 weeks. For training programs, we typically start with a discovery phase to understand your needs.' },
        { question: 'Who should attend the training?', answer: 'Our training is designed for leadership teams, executives, and decision-makers who need to understand AI strategically and practically.' },
      ],
      footerCta: 'Tell us what you\'re trying to automate.',
    },
    services: {
      index: {
        title: 'AI Services | Training, Workshops & Talks',
        metaDescription: 'AI training for companies, hands-on workshops and inspiration talks. GDPR-aware delivery for leadership teams.',
        h1: 'AI services for modern teams',
      },
      consulting: {
        title: 'AI Training for Companies | Equip Your Leadership',
        metaDescription: 'Executive-focused AI training programs delivered on-site or online. AI strategy, prompt engineering, and hands-on workshops for leadership teams.',
        h1: 'AI Training for Companies: Equip your leadership with practical AI expertise',
        heroSub: 'Executive-focused AI training programs delivered on-site or online. Tailored to your organization\'s needs and goals.',
        keyPoints: [
          'AI Strategy for Leaders',
          'Prompt Engineering for Decision Makers',
          'AI Tool Landscape & Selection',
          'Risk & Governance Awareness',
          'Hands-on Executive Workshops',
        ],
      },
      workshops: {
        title: 'AI Workshop for Companies (Full Day) | Use Cases + Roadmap',
        metaDescription: 'A hands-on full-day AI workshop (8 hours) for leadership and teams. Needs analysis, trend scan, tailored demos, and hands-on exercises. Leave with prioritized use cases and next steps.',
        h1: 'AI Workshop (Full Day): identify and validate high-ROI use cases',
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
    contact: {
      title: 'Contact | Book a Call',
      metaDescription: 'Get in touch to discuss AI training, workshops, or talks. Book a 20-minute intro call.',
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
      siteDescription: 'AI-utbildning för företag, hands-on workshops och inspirationsföreläsningar för ledningsgrupper. GDPR-medvetet.',
    },
    nav: {
      services: 'Tjänster',
      contact: 'Kontakt',
    },
    common: {
      bookCall: 'Boka ett samtal',
      bookIntro: 'Boka 20 min intro',
      seeOfferings: 'Se erbjudanden',
      learnMore: 'Läs mer',
      readMore: 'Läs mer',
      contactUs: 'Kontakta oss',
      getStarted: 'Kom igång',
    },
    home: {
      title: 'AI-utbildning, workshops & föreläsningar som ger resultat',
      metaDescription: 'AI-utbildningar för ledningsgrupper, hands-on workshops och inspirationsföreläsningar. GDPR-medvetet. Boka intro.',
      h1: 'AI-erbjudanden som tar er från hype till mätbar effekt',
      heroSub: 'Vi hjälper team att hitta hög-ROI use cases, bygga AI-agenter och förbättra arbetsflöden—med säkerhet och GDPR i fokus.',
      primaryCta: 'Boka 20 min intro',
      secondaryCta: 'Se erbjudanden',
      offeringsTitle: 'Våra erbjudanden',
      offerings: {
        consulting: {
          title: 'AI-utbildning för företag',
          description: 'AI-utbildningar för ledningsgrupper, på plats eller online. Anpassade efter er organisations behov och mål.',
        },
        workshop: {
          title: 'AI-workshop',
          description: 'Heldagsworkshop (8 timmar). Gå därifrån med prioriterade use cases, praktisk erfarenhet och en konkret plan.',
        },
        talk: {
          title: 'AI-inspirationsföreläsning',
          description: '1 timme med trender, verktyg och exempel. Skapa idéer i hela teamet.',
        },
      },
      howWeWorkTitle: 'Vårt arbetssätt',
      howWeWorkSteps: ['Upptäck', 'Prioritera', 'Prototypa', 'Implementera', 'Enablement'],
      trustedByTitle: 'Används av team som bygger med AI',
      faqTitle: 'Vanliga frågor',
      faqs: [
        { question: 'Vilka typer av AI-lösningar hjälper ni implementera?', answer: 'Vi fokuserar på praktiska AI-tillämpningar: AI-agenter för automatisering, dokumentbearbetning, kundsupportbottar, interna kunskapsassistenter och AI-drivna features för SaaS-produkter.' },
        { question: 'Arbetar ni med känslig data och GDPR-krav?', answer: 'Ja. Vi specialiserar oss på GDPR-medvetna implementationer och kan hjälpa er köra lokala AI-modeller som håller känslig data på er egen infrastruktur.' },
        { question: 'Hur snabbt kan vi komma igång?', answer: 'En workshop kan bokas inom 1-2 veckor. För utbildningsprogram börjar vi med en discovery-fas för att förstå era behov.' },
        { question: 'Vem bör delta i utbildningen?', answer: 'Vår utbildning är designad för ledningsgrupper, chefer och beslutsfattare som behöver förstå AI strategiskt och praktiskt.' },
      ],
      footerCta: 'Beskriv er process—vi hittar agent-möjligheter.',
    },
    services: {
      index: {
        title: 'AI-tjänster | Utbildning, Workshops & Föreläsningar',
        metaDescription: 'AI-utbildning för företag, hands-on workshops och inspirationsföreläsningar. GDPR-medveten leverans för ledningsgrupper.',
        h1: 'AI-tjänster för moderna team',
      },
      consulting: {
        title: 'AI-utbildning för företag | Ge er ledning praktisk AI-kompetens',
        metaDescription: 'AI-utbildningar för ledningsgrupper, på plats eller online. AI-strategi, prompt engineering och praktiska workshops för ledningen.',
        h1: 'AI-utbildning för företag: Ge er ledning praktisk AI-kompetens',
        heroSub: 'AI-utbildningar för ledningsgrupper, på plats eller online. Anpassade efter er organisations behov och mål.',
        keyPoints: [
          'AI-strategi för ledare',
          'Prompt Engineering för beslutsfattare',
          'AI-verktygslandskapet & val',
          'Risk- & styrningsmedvetenhet',
          'Praktiska workshops för ledningen',
        ],
      },
      workshops: {
        title: 'AI-workshop för företag (heldag) | Use cases + roadmap',
        metaDescription: 'En praktisk heldags AI-workshop (8 timmar). Behovsanalys, trendspaning, skräddarsydda demos och praktiska övningar. Ni går därifrån med prioriterade use cases och nästa steg.',
        h1: 'AI-workshop (heldag): identifiera och validera hög-ROI use cases',
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
    contact: {
      title: 'Kontakt | Boka ett samtal',
      metaDescription: 'Kontakta oss för att diskutera AI-utbildning, workshops eller föreläsningar. Boka ett 20-minuters intro.',
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

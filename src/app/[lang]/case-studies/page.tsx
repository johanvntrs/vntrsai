import type { Metadata } from 'next';
import { type Locale, getDictionary } from '@/lib/i18n';
import { Hero } from '@/components/ui/Hero';
import { Section } from '@/components/ui/Section';
import { CTA } from '@/components/ui/CTA';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;

  return {
    title: lang === 'sv' ? 'Case Studies | Våra projekt' : 'Case Studies | Our projects',
    description: lang === 'sv'
      ? 'Se hur vi hjälpt team implementera AI-lösningar inom event, PE och SaaS.'
      : 'See how we have helped teams implement AI solutions in events, PE and SaaS.',
  };
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const contactPath = lang === 'sv' ? 'kontakt' : 'contact';

  return (
    <>
      <Hero
        title={lang === 'sv' ? 'Case studies' : 'Case studies'}
        subtitle={lang === 'sv' ? 'Kommer snart.' : 'Coming soon.'}
      />

      <Section>
        <div className="max-w-2xl mx-auto text-center text-gray-600">
          <p>
            {lang === 'sv'
              ? 'Vi arbetar på dokumentationen av våra projekt. Kontakta oss för att diskutera referenscase.'
              : 'We are working on documenting our projects. Contact us to discuss reference cases.'}
          </p>
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

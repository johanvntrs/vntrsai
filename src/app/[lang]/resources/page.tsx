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
    title: lang === 'sv' ? 'Resurser | Guider & verktyg' : 'Resources | Guides & tools',
    description: lang === 'sv'
      ? 'Ladda ner guider, mallar och verktyg för AI-implementation.'
      : 'Download guides, templates and tools for AI implementation.',
  };
}

export default async function ResourcesPage({
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
        title={lang === 'sv' ? 'Resurser' : 'Resources'}
        subtitle={lang === 'sv' ? 'Kommer snart.' : 'Coming soon.'}
      />

      <Section>
        <div className="max-w-2xl mx-auto text-center text-gray-600">
          <p>
            {lang === 'sv'
              ? 'Vi arbetar på att ta fram guider och verktyg. Kontakta oss för att bli notifierad när de är klara.'
              : 'We are working on creating guides and tools. Contact us to be notified when they are ready.'}
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

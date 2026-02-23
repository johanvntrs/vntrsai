import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Sora } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import '../globals.css';
import { i18n, type Locale, getDictionary } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://vntrs.ai';

  return {
    title: {
      default: dict.metadata.siteName,
      template: `%s | ${dict.metadata.siteName}`,
    },
    description: dict.metadata.siteDescription,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: '/en',
        sv: '/sv',
        'x-default': '/sv',
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'sv' ? 'sv_SE' : 'en_US',
      siteName: dict.metadata.siteName,
    },
    twitter: {
      card: 'summary_large_image',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;
  const dict = await getDictionary(lang);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VNTRS AI',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://vntrs.ai',
    logo: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://vntrs.ai'}/logo.png`,
    sameAs: [],
  };

  return (
    <html lang={lang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakarta.variable} ${sora.variable} page-shell font-sans antialiased`}>
        <Header lang={lang} dict={dict} />
        <main className="min-h-screen">{children}</main>
        <Footer lang={lang} dict={dict} />
        <Analytics />
      </body>
    </html>
  );
}

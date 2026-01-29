import Link from 'next/link';

interface CTAProps {
  title: string;
  description?: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  background?: 'dark' | 'light';
}

export function CTA({
  title,
  description,
  primaryCta,
  secondaryCta,
  background = 'dark',
}: CTAProps) {
  const isDark = background === 'dark';

  return (
    <section className={`py-16 lg:py-24 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className={`text-3xl font-bold tracking-tight sm:text-4xl ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h2>
          {description && (
            <p className={`mt-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {description}
            </p>
          )}
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href={primaryCta.href}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                isDark
                  ? 'bg-white text-gray-900 hover:bg-gray-100'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              {primaryCta.text}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`rounded-full border px-6 py-3 text-sm font-medium transition-colors ${
                  isDark
                    ? 'border-gray-600 text-white hover:bg-gray-800'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

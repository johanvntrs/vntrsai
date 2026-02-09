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
    <section className={`py-16 lg:py-24 ${isDark ? 'bg-transparent' : 'bg-[linear-gradient(180deg,#f5f6fb_0%,#eef2f8_100%)]'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mx-auto max-w-4xl rounded-[2rem] border px-8 py-12 text-center shadow-[0_30px_55px_-42px_rgba(26,35,55,0.8)] lg:px-16 lg:py-16 ${
            isDark
              ? 'border-[var(--accent)]/30 bg-[linear-gradient(130deg,#f0ddd6_0%,#d6e2f3_100%)]'
              : 'border-[var(--border)] bg-[linear-gradient(130deg,#ffffff_0%,#f2f7fc_100%)]'
          }`}
        >
          <h2
            className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
              isDark ? 'text-[#1f2433]' : 'text-[var(--foreground)]'
            }`}
          >
            {title}
          </h2>
          {description && (
            <p className={`mx-auto mt-4 max-w-2xl text-lg ${isDark ? 'text-[#3c4459]' : 'text-[var(--muted)]'}`}>
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={primaryCta.href}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 ${
                isDark
                  ? 'bg-[#1f2433] text-white shadow-[0_12px_25px_-15px_rgba(20,20,28,0.85)] hover:bg-[#111626]'
                  : 'bg-[var(--accent)] text-white shadow-[0_12px_25px_-15px_rgba(20,20,28,0.85)] hover:bg-[var(--accent-strong)]'
              }`}
            >
              {primaryCta.text}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`rounded-full border px-6 py-3 text-sm font-medium transition-colors ${
                  isDark
                    ? 'border-[#3c4459]/35 bg-white/70 text-[#1f2433] hover:bg-white'
                    : 'border-[var(--border)] bg-white/70 text-[var(--foreground)] hover:bg-white'
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

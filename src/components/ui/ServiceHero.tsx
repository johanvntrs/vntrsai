import Link from 'next/link';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  badges?: string[];
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  highlights?: {
    icon: 'clock' | 'users' | 'target' | 'check';
    text: string;
  }[];
}

const icons = {
  clock: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  users: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  target: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export function ServiceHero({
  title,
  subtitle,
  badges,
  primaryCta,
  secondaryCta,
  highlights,
}: ServiceHeroProps) {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface-soft)] px-8 py-12 text-center shadow-[0_26px_46px_-38px_rgba(26,35,55,0.7)] lg:px-14 lg:py-16">
          {/* Badges */}
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full border border-[var(--border)] bg-white/75 px-3 py-1 text-xs font-medium text-[var(--foreground)]"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            {subtitle}
          </p>

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 px-3 py-1.5 text-[var(--muted)]"
                >
                  <span className="text-[var(--foreground)]">{icons[highlight.icon]}</span>
                  <span className="text-sm font-medium">{highlight.text}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-8 py-4 text-base font-medium text-white shadow-[0_14px_34px_-18px_rgba(26,35,55,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
            >
              {primaryCta.text}
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/80 px-8 py-4 text-base font-medium text-[var(--foreground)] transition-all duration-200 hover:bg-white"
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

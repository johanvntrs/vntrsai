import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  centered?: boolean;
  boxed?: boolean;
}

export function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  centered = true,
  boxed = true,
}: HeroProps) {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`${
            boxed
              ? 'rounded-[2rem] border border-[var(--border)] bg-[var(--surface-soft)] px-8 py-14 shadow-[0_26px_46px_-38px_rgba(26,35,55,0.7)] lg:px-16 lg:py-20'
              : 'px-2 py-4 lg:px-0 lg:py-6'
          } ${centered ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}`}
        >
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className={`mt-10 flex flex-wrap gap-4 ${centered ? 'justify-center' : ''}`}>
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white shadow-[0_12px_30px_-18px_rgba(26,35,55,0.9)] transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
                >
                  {primaryCta.text}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="rounded-full border border-[var(--border)] bg-white/80 px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-white"
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

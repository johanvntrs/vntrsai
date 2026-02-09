interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  background?: 'white' | 'gray';
}

export function Section({
  children,
  title,
  subtitle,
  className = '',
  background = 'white',
}: SectionProps) {
  const bgClass =
    background === 'gray'
      ? 'bg-[linear-gradient(180deg,#f6f8fa_0%,#f2f4f7_100%)]'
      : 'bg-transparent';

  return (
    <section className={`py-16 lg:py-24 ${bgClass} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-16">
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-[var(--muted)]">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

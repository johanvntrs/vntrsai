interface BulletListProps {
  items: string[];
  title?: string;
  icon?: 'check' | 'arrow' | 'dot';
  variant?: 'default' | 'showcase';
}

export function BulletList({ items, title, icon = 'check', variant = 'default' }: BulletListProps) {
  const icons = {
    check: (
      <svg className="h-5 w-5 text-[#4fa073]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
    arrow: (
      <svg className="h-5 w-5 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    ),
    dot: (
      <div className="h-2 w-2 rounded-full bg-[var(--muted)]/60" />
    ),
  };

  if (variant === 'showcase') {
    return (
      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(160deg,#ffffff_0%,#f5f8fc_100%)] p-5 shadow-[0_24px_44px_-36px_rgba(26,35,55,0.9)] md:p-7">
        <div className="pointer-events-none absolute right-[-56px] top-[-56px] h-40 w-40 rounded-full bg-[#f0f4fb]/70 blur-2xl" />
        {title && (
          <h3 className="mb-5 text-lg font-semibold text-[var(--foreground)]">{title}</h3>
        )}
        <ul className="relative grid gap-3 md:grid-cols-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="group flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 opacity-0 shadow-[0_16px_28px_-26px_rgba(26,35,55,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/25 hover:shadow-[0_20px_32px_-24px_rgba(26,35,55,0.75)]"
              style={{
                animation: 'step-reveal 560ms cubic-bezier(0.2, 0.7, 0.2, 1) forwards',
                animationDelay: `${index * 85}ms`,
              }}
            >
              <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[linear-gradient(145deg,#ecf6ee_0%,#f4faf6_100%)]">
                {icons[icon]}
              </span>
              <span className="text-[15px] leading-relaxed text-[var(--muted)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      {title && (
        <h3 className="mb-4 text-lg font-semibold text-[var(--foreground)]">{title}</h3>
      )}
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-white/65 px-4 py-3">
            <span className="flex-shrink-0 mt-0.5">{icons[icon]}</span>
            <span className="text-[var(--muted)]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

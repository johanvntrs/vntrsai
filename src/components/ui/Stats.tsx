interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface StatsProps {
  stats: Stat[];
  variant?: 'default' | 'cards' | 'minimal';
}

export function Stats({ stats, variant = 'default' }: StatsProps) {
  if (variant === 'cards') {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-3xl border border-[var(--border)] bg-[linear-gradient(160deg,#ffffff_0%,#f7f9fc_100%)] p-6 text-center shadow-[0_18px_34px_-30px_rgba(26,35,55,0.9)]"
          >
            <div className="mb-2 text-4xl font-semibold text-[var(--foreground)]">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-[var(--muted)]">{stat.label}</div>
            {stat.description && (
              <div className="mt-1 text-xs text-[var(--muted)]/90">{stat.description}</div>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-semibold text-[var(--foreground)]">{stat.value}</div>
            <div className="mt-1 text-sm text-[var(--muted)]">{stat.label}</div>
          </div>
        ))}
      </div>
    );
  }

  // Default variant
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="mb-2 text-5xl font-semibold text-[var(--foreground)]">
            {stat.value}
          </div>
          <div className="text-base font-medium text-[var(--muted)]">{stat.label}</div>
          {stat.description && (
            <div className="mt-1 text-sm text-[var(--muted)]/90">{stat.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}

interface TimelineItem {
  time?: string;
  title: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute bottom-0 left-4 top-0 hidden w-0.5 bg-[var(--border)] sm:block" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-6">
            {/* Circle */}
            <div className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[linear-gradient(145deg,#f9dfd2_0%,#dde8fa_100%)] text-sm font-semibold text-[var(--foreground)]">
              {index + 1}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              {item.time && (
                <span className="mb-2 inline-block rounded-full border border-[var(--border)] bg-white/75 px-3 py-1 text-xs font-medium text-[var(--muted)]">
                  {item.time}
                </span>
              )}
              <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
              {item.description && (
                <p className="mt-2 text-[var(--muted)]">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface AgendaBlockProps {
  blocks: {
    time: string;
    title: string;
    items?: string[];
  }[];
  variant?: 'default' | 'approach';
}

export function AgendaBlocks({ blocks, variant = 'default' }: AgendaBlockProps) {
  if (variant === 'approach') {
    return (
      <div className="mx-auto max-w-6xl">
        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent_0%,var(--border)_10%,var(--border)_90%,transparent_100%)] md:block" />

          <div className="space-y-5 md:space-y-8">
            {blocks.map((block, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  <div className="mb-3 flex justify-center md:absolute md:left-1/2 md:top-1/2 md:z-10 md:mb-0 md:-translate-x-1/2 md:-translate-y-1/2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c8cde2] bg-[linear-gradient(145deg,#f8f4ff_0%,#edf1fb_100%)] text-xl font-semibold text-[var(--foreground)] shadow-[0_10px_20px_-12px_rgba(26,35,55,0.8)]">
                      {index + 1}
                    </div>
                    <span
                      className={`pointer-events-none absolute top-1/2 hidden h-px w-8 -translate-y-1/2 bg-[var(--border)] md:block ${
                        isLeft ? 'right-full' : 'left-full'
                      }`}
                    />
                  </div>

                  <div
                    className={`rounded-2xl border border-[var(--border)] bg-white/75 p-5 shadow-[0_18px_30px_-30px_rgba(26,35,55,0.75)] opacity-0 transition-all duration-300 md:w-[calc(50%-3rem)] ${
                      isLeft ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                    style={{
                      animation: 'step-reveal 560ms cubic-bezier(0.2, 0.7, 0.2, 1) forwards',
                      animationDelay: `${index * 120}ms`,
                    }}
                  >
                    <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                      {block.time}
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-[2rem]">
                      {block.title}
                    </h3>

                    {block.items && (
                      <ul className="mt-4 space-y-1.5">
                        {block.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                            <span className="mt-[0.45rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--foreground)]/75" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {blocks.map((block, index) => (
        <div
          key={index}
          className="rounded-3xl border border-[var(--border)] bg-[linear-gradient(160deg,#ffffff_0%,#f7f9fc_100%)] p-6 shadow-[0_20px_38px_-32px_rgba(26,35,55,0.9)] transition-all hover:-translate-y-0.5 hover:shadow-[0_28px_44px_-34px_rgba(26,35,55,0.8)]"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(145deg,#f9dfd2_0%,#dde8fa_100%)] font-semibold text-[var(--foreground)]">
              {index + 1}
            </div>
            <div className="flex-1">
              <span className="text-sm font-medium text-[var(--muted)]">{block.time}</span>
              <h3 className="mt-1 text-lg font-semibold text-[var(--foreground)]">{block.title}</h3>
              {block.items && (
                <ul className="mt-3 space-y-1">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                      <svg className="h-4 w-4 text-[#4fa073]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

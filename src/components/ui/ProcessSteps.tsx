interface ProcessStepsProps {
  steps: string[];
  title?: string;
}

export function ProcessSteps({ steps, title }: ProcessStepsProps) {
  return (
    <div>
      {title && (
        <h3 className="mb-6 text-lg font-semibold text-[var(--foreground)]">{title}</h3>
      )}
      <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group flex items-center rounded-full border border-[var(--border)] bg-white/75 px-3 py-2 opacity-0 shadow-[0_18px_32px_-28px_rgba(26,35,55,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/25 hover:shadow-[0_22px_36px_-26px_rgba(26,35,55,0.8)]"
            style={{
              animation: 'step-reveal 560ms cubic-bezier(0.2, 0.7, 0.2, 1) forwards',
              animationDelay: `${index * 120}ms`,
            }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(140deg,#f7ddcf_0%,#dde8fa_100%)] text-sm font-semibold text-[var(--foreground)] transition-transform duration-300 group-hover:scale-110 motion-safe:animate-[step-breathe_6s_ease-in-out_infinite]"
              style={{ animationDelay: `${index * 220}ms` }}
            >
              {index + 1}
            </div>
            <span className="ml-3 font-medium text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)]">
              {step}
            </span>
            {index < steps.length - 1 && (
              <svg
                className="ml-4 hidden h-5 w-5 text-[var(--muted)]/45 transition-transform duration-300 group-hover:translate-x-0.5 lg:block"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

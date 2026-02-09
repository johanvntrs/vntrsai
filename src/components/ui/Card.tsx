import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  href?: string;
  linkText?: string;
  icon?: React.ReactNode;
}

export function Card({ title, description, href, linkText, icon }: CardProps) {
  const content = (
    <>
      {icon && <div className="mb-4 text-[var(--foreground)]">{icon}</div>}
      <h3 className="text-lg font-semibold text-[var(--foreground)]">{title}</h3>
      <p className="mt-2 text-[var(--muted)]">{description}</p>
      {href && linkText && (
        <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--foreground)]/95 transition-colors group-hover:text-[var(--accent)]">
          {linkText}
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group block rounded-3xl border border-[var(--border)] bg-[linear-gradient(175deg,#ffffff_0%,#f8fafe_100%)] p-6 shadow-[0_20px_40px_-34px_rgba(26,35,55,0.9)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_50px_-35px_rgba(26,35,55,0.85)]"
      >
        <div className="mb-4 h-1.5 w-16 rounded-full bg-[linear-gradient(90deg,#dbedff_0%,#f7dfd8_100%)]" />
        {content}
      </Link>
    );
  }

  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[linear-gradient(175deg,#ffffff_0%,#f8fafe_100%)] p-6 shadow-[0_20px_40px_-34px_rgba(26,35,55,0.9)]">
      <div className="mb-4 h-1.5 w-16 rounded-full bg-[linear-gradient(90deg,#dbedff_0%,#f7dfd8_100%)]" />
      {content}
    </div>
  );
}

interface CardGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}

export function CardGrid({ children, columns = 3 }: CardGridProps) {
  const colsClass = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  };

  return (
    <div className={`grid gap-6 md:grid-cols-2 ${colsClass[columns]}`}>
      {children}
    </div>
  );
}

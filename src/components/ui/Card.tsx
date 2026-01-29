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
      {icon && <div className="mb-4 text-gray-900">{icon}</div>}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      {href && linkText && (
        <span className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-gray-700">
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
        className="group block rounded-2xl border border-gray-200 p-6 hover:border-gray-300 hover:shadow-sm transition-all"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 p-6">
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

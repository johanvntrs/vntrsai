'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `https://vntrs.ai${item.href}` }),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
        <ol className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 shadow-[0_14px_28px_-26px_rgba(26,35,55,0.9)]">
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-[var(--muted)]/60">/</span>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-[var(--foreground)]">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

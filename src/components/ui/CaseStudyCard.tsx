import Link from 'next/link';
import type { CaseStudy } from '@/lib/case-studies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  lang: 'en' | 'sv';
  basePath: string;
}

export function CaseStudyCard({ caseStudy, lang, basePath }: CaseStudyCardProps) {
  return (
    <Link
      href={`${basePath}/${caseStudy.slug}`}
      className="block p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group"
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {caseStudy.tags[lang].slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
        {caseStudy.title[lang]}
      </h3>

      <p className="text-sm text-gray-500 mb-4">
        {caseStudy.client} &middot; {caseStudy.clientType[lang]}
      </p>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {caseStudy.challenge[lang]}
      </p>

      <div className="flex flex-wrap gap-4">
        {caseStudy.results.slice(0, 3).map((result) => (
          <div key={result.metric} className="text-center">
            <div className="text-xl font-bold text-gray-900">{result.value}</div>
            <div className="text-xs text-gray-500">{result.description[lang]}</div>
          </div>
        ))}
      </div>
    </Link>
  );
}

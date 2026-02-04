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
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 hidden sm:block" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-6">
            {/* Circle */}
            <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold">
              {index + 1}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              {item.time && (
                <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium mb-2">
                  {item.time}
                </span>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              {item.description && (
                <p className="mt-2 text-gray-600">{item.description}</p>
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
}

export function AgendaBlocks({ blocks }: AgendaBlockProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {blocks.map((block, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold">
              {index + 1}
            </div>
            <div className="flex-1">
              <span className="text-sm text-gray-500 font-medium">{block.time}</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">{block.title}</h3>
              {block.items && (
                <ul className="mt-3 space-y-1">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
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

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
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center"
          >
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            {stat.description && (
              <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
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
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
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
          <div className="text-5xl font-bold text-gray-900 mb-2">
            {stat.value}
          </div>
          <div className="text-base font-medium text-gray-700">{stat.label}</div>
          {stat.description && (
            <div className="text-sm text-gray-500 mt-1">{stat.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}
